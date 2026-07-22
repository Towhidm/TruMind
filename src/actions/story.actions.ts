"use server";

import { connectDB } from "@/lib/mongodb";
import { seedStories } from "@/lib/seed";
import { requireCurrentUser } from "@/lib/get-current-user";
import { getStoryByKey } from "@/lib/story-engine/loader";
import { getStoryMetaBySlug } from "@/lib/story-cache";
import {
  getChapter,
  getFirstScene,
  calculateCompletionPercent,
  resolveSceneId,
} from "@/lib/story-engine/navigation";
import { getPhqQuestion } from "@/lib/phq9/scoring";
import {
  calculateTotalScore,
  scoreToSeverity,
  shouldShowQ9Support,
} from "@/lib/phq9/scoring";
import { Story } from "@/models/Story";
import { StoryProgress, type IProgressAnswer } from "@/models/StoryProgress";
import { Assessment } from "@/models/Assessment";
import type { PhqScore } from "@/lib/phq9/types";
import type { StoryChapter } from "@/lib/story-engine/types";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";

export interface StoryWithProgress {
  _id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  estimatedMinutes: number;
  difficulty: string;
  chapterCount: number;
  categoryName: string;
  categorySlug: string;
  completionPercent: number;
  status: "not_started" | "in_progress" | "completed";
  progressId?: string;
  lastPlayedAt?: string;
  completedCount: number;
}

async function ensureSeed() {
  await seedStories();
}

export async function getStories(): Promise<StoryWithProgress[]> {
  const [user] = await Promise.all([requireCurrentUser(), ensureSeed()]);

  const [stories, progresses, assessments] = await Promise.all([
    Story.find({ isPublished: true })
      .populate("categoryId", "name slug")
      .select(
        "title slug description coverImage estimatedMinutes difficulty chapterCount categoryId"
      )
      .lean(),
    StoryProgress.find({ userId: user._id })
      .select("storyId status completionPercent lastPlayedAt")
      .lean(),
    Assessment.find({ userId: user._id }).select("storyId").lean(),
  ]);

  return stories.map((story) => {
    const storyId = story._id.toString();
    const progress = progresses.find(
      (p) => p.storyId.toString() === storyId && p.status === "in_progress"
    );
    const completedRuns = assessments.filter((a) => a.storyId.toString() === storyId);
    const lastCompleted = progresses.find(
      (p) => p.storyId.toString() === storyId && p.status === "completed"
    );

    const category = story.categoryId as unknown as { name: string; slug: string };

    let status: StoryWithProgress["status"] = "not_started";
    if (progress) status = "in_progress";
    else if (completedRuns.length > 0 || lastCompleted) status = "completed";

    return {
      _id: storyId,
      title: story.title,
      slug: story.slug,
      description: story.description,
      coverImage: story.coverImage,
      estimatedMinutes: story.estimatedMinutes,
      difficulty: story.difficulty,
      chapterCount: story.chapterCount,
      categoryName: category?.name ?? "Life",
      categorySlug: category?.slug ?? "life",
      completionPercent:
        progress?.completionPercent ?? (completedRuns.length > 0 ? 100 : 0),
      status,
      progressId: progress?._id.toString(),
      lastPlayedAt: progress?.lastPlayedAt?.toISOString(),
      completedCount: completedRuns.length,
    };
  });
}

export async function getStoryBySlug(slug: string) {
  const [user] = await Promise.all([requireCurrentUser(), ensureSeed()]);

  const story = await Story.findOne({ slug, isPublished: true })
    .populate("categoryId", "name slug")
    .lean();
  if (!story) return null;

  const storyObjectId = new mongoose.Types.ObjectId(story._id.toString());

  const [progress, completedCount] = await Promise.all([
    StoryProgress.findOne({
      userId: user._id,
      storyId: storyObjectId,
      status: "in_progress",
    })
      .select("currentChapter currentScene completionPercent answers")
      .lean(),
    Assessment.countDocuments({
      userId: user._id,
      storyId: storyObjectId,
    }),
  ]);

  const category = story.categoryId as unknown as { name: string; slug: string };
  const definition = getStoryByKey(story.storyKey);

  return {
    _id: story._id.toString(),
    title: story.title,
    slug: story.slug,
    description: story.description,
    estimatedMinutes: story.estimatedMinutes,
    difficulty: story.difficulty,
    chapterCount: story.chapterCount,
    storyKey: story.storyKey,
    categoryName: category?.name ?? "Life",
    categorySlug: category?.slug ?? "life",
    chapterTitles: definition?.chapters.map((c) => c.title) ?? [],
    progress: progress
      ? {
          id: progress._id.toString(),
          currentChapter: progress.currentChapter,
          currentScene: progress.currentScene,
          completionPercent: progress.completionPercent,
          answersCount: progress.answers?.length ?? 0,
        }
      : null,
    completedCount,
    hasInProgress: !!progress,
  };
}

async function initStoryProgress(storySlug: string, options?: { forceReset?: boolean }) {
  const forceReset = options?.forceReset ?? false;
  const [user] = await Promise.all([requireCurrentUser(), ensureSeed()]);

  const story = await getStoryMetaBySlug(storySlug);
  if (!story) throw new Error("Story not found");

  const definition = getStoryByKey(story.storyKey);
  if (!definition) throw new Error("Story content not found");

  const storyObjectId = new mongoose.Types.ObjectId(story._id);
  const firstChapter = getChapter(definition.chapters, 1);
  const firstScene = firstChapter ? getFirstScene(firstChapter) : null;
  const sceneId = firstScene?.id ?? "intro";

  if (!forceReset) {
    const existing = await StoryProgress.findOne({
      userId: user._id,
      storyId: storyObjectId,
      status: "in_progress",
    });

    if (existing) {
      const chapter =
        getChapter(definition.chapters, existing.currentChapter) ?? firstChapter;
      if (!chapter) throw new Error("Story chapter not found");

      const safeScene = resolveSceneId(chapter, existing.currentScene);
      if (safeScene !== existing.currentScene) {
        existing.currentScene = safeScene;
        await existing.save();
      }

      return {
        progressId: existing._id.toString(),
        storyTitle: story.title,
        storySlug: story.slug,
        storyKey: story.storyKey,
        currentChapter: existing.currentChapter,
        currentScene: safeScene,
        completionPercent: existing.completionPercent,
        totalChapters: definition.chapters.length,
        chapter,
      };
    }
  }

  // Start / Play Again: remove old progress and begin a fresh run.
  // Assessment history is kept separately.
  await StoryProgress.deleteMany({
    userId: user._id,
    $or: [{ storyId: storyObjectId }, { storyId: story._id }],
  });

  const progress = await StoryProgress.create({
    userId: user._id,
    storyId: storyObjectId,
    currentChapter: 1,
    currentScene: sceneId,
    answers: [],
    completionPercent: 0,
    status: "in_progress",
    lastPlayedAt: new Date(),
  });

  return {
    progressId: progress._id.toString(),
    storyTitle: story.title,
    storySlug: story.slug,
    storyKey: story.storyKey,
    currentChapter: 1,
    currentScene: sceneId,
    completionPercent: 0,
    totalChapters: definition.chapters.length,
    chapter: firstChapter,
  };
}

export async function startStory(storySlug: string) {
  const result = await initStoryProgress(storySlug, { forceReset: true });
  revalidatePath("/dashboard");
  revalidatePath(`/dashboard/stories/${storySlug}`);
  revalidatePath(`/dashboard/stories/${storySlug}/play`);
  return result;
}

export async function ensureStoryProgress(storySlug: string) {
  // Keep existing in-progress run; only create if none exists
  return initStoryProgress(storySlug, { forceReset: false });
}

/** Fast path for Resume — story meta is memory-cached after first hit */
export async function getPlayState(storySlug: string) {
  const [user] = await Promise.all([requireCurrentUser(), ensureSeed()]);
  const story = await getStoryMetaBySlug(storySlug);
  if (!story) return null;

  const storyObjectId = new mongoose.Types.ObjectId(story._id);

  const progress = await StoryProgress.findOne({
    userId: user._id,
    storyId: storyObjectId,
    status: "in_progress",
  })
    .select("currentChapter currentScene completionPercent answers")
    .lean();

  if (!progress) return null;

  const definition = getStoryByKey(story.storyKey);
  if (!definition) return null;

  const chapter = getChapter(definition.chapters, progress.currentChapter);
  if (!chapter) return null;

  const safeScene = resolveSceneId(chapter, progress.currentScene);
  if (safeScene !== progress.currentScene) {
    await StoryProgress.updateOne(
      { _id: progress._id },
      { $set: { currentScene: safeScene } }
    );
  }

  return {
    storyTitle: story.title,
    storySlug: story.slug,
    storyKey: story.storyKey,
    progressId: progress._id.toString(),
    currentChapter: progress.currentChapter,
    currentScene: safeScene,
    completionPercent: progress.completionPercent,
    totalChapters: definition.chapters.length,
    chapter,
    answers: progress.answers,
  };
}

export async function saveChapterAnswer(
  storySlug: string,
  questionId: number,
  choiceLabel: string,
  score: PhqScore
) {
  const [user] = await Promise.all([requireCurrentUser(), ensureSeed()]);
  const story = await getStoryMetaBySlug(storySlug);
  if (!story) throw new Error("Story not found");

  const storyObjectId = new mongoose.Types.ObjectId(story._id);

  const progress = await StoryProgress.findOne({
    userId: user._id,
    storyId: storyObjectId,
    status: "in_progress",
  });
  if (!progress) throw new Error("No active progress");

  const question = getPhqQuestion(questionId);
  if (!question) throw new Error("Invalid question");

  const definition = getStoryByKey(story.storyKey);
  if (!definition) throw new Error("Story content not found");

  const filteredAnswers = progress.answers.filter(
    (a: IProgressAnswer) => a.questionId !== questionId
  );
  filteredAnswers.push({
    questionId,
    questionText: question.text,
    score,
    choiceLabel,
    answeredAt: new Date(),
  });

  const nextChapterNum = questionId + 1;
  const isLastChapter = questionId >= definition.chapters.length;
  const nextChapterData = !isLastChapter
    ? getChapter(definition.chapters, nextChapterNum)
    : null;
  const nextScene = nextChapterData ? getFirstScene(nextChapterData) : null;

  const completionPercent = calculateCompletionPercent(
    questionId,
    definition.chapters.length,
    true
  );

  progress.answers = filteredAnswers;
  progress.currentChapter = isLastChapter ? questionId : nextChapterNum;
  progress.currentScene = isLastChapter ? "choice" : (nextScene?.id ?? "intro");
  progress.completionPercent = completionPercent;
  progress.lastPlayedAt = new Date();
  await progress.save();

  const showQ9Support = shouldShowQ9Support(questionId, score);

  if (isLastChapter) {
    const totalScore = calculateTotalScore(filteredAnswers);
    const severity = scoreToSeverity(totalScore);

    const assessment = await Assessment.create({
      userId: user._id,
      storyId: storyObjectId,
      answers: filteredAnswers,
      totalScore,
      severity: severity.key,
      severityLabel: severity.label,
      completedAt: new Date(),
    });

    progress.status = "completed";
    progress.completionPercent = 100;
    await progress.save();

    revalidatePath("/dashboard");
    revalidatePath("/dashboard/analytics");

    return {
      completed: true as const,
      assessmentId: assessment._id.toString(),
      showQ9Support,
    };
  }

  return {
    completed: false as const,
    showQ9Support,
    nextChapter: nextChapterNum,
    nextSceneId: nextScene?.id ?? "intro",
    completionPercent,
    chapter: nextChapterData as StoryChapter,
  };
}

export async function getAssessmentResult(assessmentId: string) {
  const user = await requireCurrentUser();
  await connectDB();

  const assessment = await Assessment.findOne({
    _id: assessmentId,
    userId: user._id,
  })
    .populate("storyId", "title slug")
    .lean();

  if (!assessment) return null;

  const story = assessment.storyId as unknown as { title: string; slug: string };

  return {
    id: assessment._id.toString(),
    storyTitle: story?.title ?? "Story",
    storySlug: story?.slug ?? "",
    totalScore: assessment.totalScore,
    severity: assessment.severity,
    severityLabel: assessment.severityLabel,
    answers: assessment.answers,
    completedAt: assessment.completedAt.toISOString(),
  };
}
