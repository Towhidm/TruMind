"use server";

import { connectDB } from "@/lib/mongodb";
import { seedStories } from "@/lib/seed";
import { requireCurrentUser } from "@/lib/get-current-user";
import { getStoryByKey } from "@/lib/story-engine/loader";
import { getChapter, getFirstScene, calculateCompletionPercent } from "@/lib/story-engine/navigation";
import { getPhqQuestion } from "@/lib/phq9/scoring";
import { calculateTotalScore, scoreToSeverity, shouldShowQ9Support } from "@/lib/phq9/scoring";
import { Story } from "@/models/Story";
import { StoryCategory } from "@/models/StoryCategory";
import { StoryProgress, type IProgressAnswer } from "@/models/StoryProgress";
import { Assessment } from "@/models/Assessment";
import type { PhqScore } from "@/lib/phq9/types";
import { revalidatePath } from "next/cache";

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
  await connectDB();
  await seedStories();
}

export async function getStories(): Promise<StoryWithProgress[]> {
  const user = await requireCurrentUser();
  await ensureSeed();

  const stories = await Story.find({ isPublished: true }).populate("categoryId").lean();
  const progresses = await StoryProgress.find({ userId: user._id }).lean();
  const assessments = await Assessment.find({ userId: user._id }).lean();

  return stories.map((story) => {
    const progress = progresses.find(
      (p) => p.storyId.toString() === story._id.toString() && p.status === "in_progress"
    );
    const completedRuns = assessments.filter(
      (a) => a.storyId.toString() === story._id.toString()
    );
    const lastCompleted = progresses.find(
      (p) => p.storyId.toString() === story._id.toString() && p.status === "completed"
    );

    const category = story.categoryId as unknown as { name: string; slug: string };

    let status: StoryWithProgress["status"] = "not_started";
    if (progress) status = "in_progress";
    else if (completedRuns.length > 0 || lastCompleted) status = "completed";

    return {
      _id: story._id.toString(),
      title: story.title,
      slug: story.slug,
      description: story.description,
      coverImage: story.coverImage,
      estimatedMinutes: story.estimatedMinutes,
      difficulty: story.difficulty,
      chapterCount: story.chapterCount,
      categoryName: category?.name ?? "Life",
      categorySlug: category?.slug ?? "life",
      completionPercent: progress?.completionPercent ?? (completedRuns.length > 0 ? 100 : 0),
      status,
      progressId: progress?._id.toString(),
      lastPlayedAt: progress?.lastPlayedAt?.toISOString(),
      completedCount: completedRuns.length,
    };
  });
}

export async function getStoryBySlug(slug: string) {
  const user = await requireCurrentUser();
  await ensureSeed();

  const story = await Story.findOne({ slug, isPublished: true }).populate("categoryId").lean();
  if (!story) return null;

  const progress = await StoryProgress.findOne({
    userId: user._id,
    storyId: story._id,
    status: "in_progress",
  }).lean();

  const completedCount = await Assessment.countDocuments({
    userId: user._id,
    storyId: story._id,
  });

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
          answersCount: progress.answers.length,
        }
      : null,
    completedCount,
    hasInProgress: !!progress,
  };
}

async function initStoryProgress(storySlug: string) {
  const user = await requireCurrentUser();
  await ensureSeed();

  const story = await Story.findOne({ slug: storySlug });
  if (!story) throw new Error("Story not found");

  const definition = getStoryByKey(story.storyKey);
  if (!definition) throw new Error("Story content not found");

  const firstChapter = getChapter(definition.chapters, 1);
  const firstScene = firstChapter ? getFirstScene(firstChapter) : null;

  const progress = await StoryProgress.findOneAndUpdate(
    { userId: user._id, storyId: story._id, status: "in_progress" },
    {
      userId: user._id,
      storyId: story._id,
      currentChapter: 1,
      currentScene: firstScene?.id ?? "intro",
      answers: [],
      completionPercent: 0,
      status: "in_progress",
      lastPlayedAt: new Date(),
    },
    { upsert: true, returnDocument: "after" }
  );

  return { progressId: progress!._id.toString() };
}

export async function startStory(storySlug: string) {
  const result = await initStoryProgress(storySlug);

  revalidatePath("/dashboard");
  revalidatePath(`/dashboard/stories/${storySlug}`);

  return result;
}

export async function ensureStoryProgress(storySlug: string) {
  return initStoryProgress(storySlug);
}

export async function getPlayState(storySlug: string) {
  const user = await requireCurrentUser();
  await ensureSeed();

  const story = await Story.findOne({ slug: storySlug });
  if (!story) return null;

  const progress = await StoryProgress.findOne({
    userId: user._id,
    storyId: story._id,
    status: "in_progress",
  }).lean();

  if (!progress) return null;

  const definition = getStoryByKey(story.storyKey);
  if (!definition) return null;

  const chapter = getChapter(definition.chapters, progress.currentChapter);
  if (!chapter) return null;

  return {
    storyTitle: story.title,
    storySlug: story.slug,
    storyKey: story.storyKey,
    progressId: progress._id.toString(),
    currentChapter: progress.currentChapter,
    currentScene: progress.currentScene,
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
  const user = await requireCurrentUser();
  await ensureSeed();

  const story = await Story.findOne({ slug: storySlug });
  if (!story) throw new Error("Story not found");

  const progress = await StoryProgress.findOne({
    userId: user._id,
    storyId: story._id,
    status: "in_progress",
  });
  if (!progress) throw new Error("No active progress");

  const question = getPhqQuestion(questionId);
  if (!question) throw new Error("Invalid question");

  const definition = getStoryByKey(story.storyKey);
  if (!definition) throw new Error("Story content not found");

  const filteredAnswers = progress.answers.filter((a: IProgressAnswer) => a.questionId !== questionId);
  filteredAnswers.push({
    questionId,
    questionText: question.text,
    score,
    choiceLabel,
    answeredAt: new Date(),
  });

  const nextChapter = questionId + 1;
  const isLastChapter = questionId >= definition.chapters.length;
  const nextChapterData = !isLastChapter ? getChapter(definition.chapters, nextChapter) : null;
  const nextScene = nextChapterData ? getFirstScene(nextChapterData) : null;

  progress.answers = filteredAnswers;
  progress.currentChapter = isLastChapter ? questionId : nextChapter;
  progress.currentScene = isLastChapter ? "choice" : (nextScene?.id ?? "intro");
  progress.completionPercent = calculateCompletionPercent(
    questionId,
    definition.chapters.length,
    true
  );
  progress.lastPlayedAt = new Date();
  await progress.save();

  const showQ9Support = shouldShowQ9Support(questionId, score);

  if (isLastChapter) {
    const assessmentId = await completeStory(storySlug);
    return { completed: true, assessmentId, showQ9Support };
  }

  revalidatePath(`/dashboard/stories/${storySlug}/play`);
  return { completed: false, showQ9Support, nextChapter, nextSceneId: nextScene?.id };
}

export async function completeStory(storySlug: string): Promise<string> {
  const user = await requireCurrentUser();
  await ensureSeed();

  const story = await Story.findOne({ slug: storySlug });
  if (!story) throw new Error("Story not found");

  const progress = await StoryProgress.findOne({
    userId: user._id,
    storyId: story._id,
    status: "in_progress",
  });
  if (!progress) throw new Error("No active progress");

  const totalScore = calculateTotalScore(progress.answers);
  const severity = scoreToSeverity(totalScore);

  const assessment = await Assessment.create({
    userId: user._id,
    storyId: story._id,
    answers: progress.answers,
    totalScore,
    severity: severity.key,
    severityLabel: severity.label,
    completedAt: new Date(),
  });

  progress.status = "completed";
  progress.completionPercent = 100;
  progress.lastPlayedAt = new Date();
  await progress.save();

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/analytics");
  revalidatePath(`/dashboard/stories/${storySlug}`);

  return assessment._id.toString();
}

export async function getAssessmentResult(assessmentId: string) {
  const user = await requireCurrentUser();
  await connectDB();

  const assessment = await Assessment.findOne({
    _id: assessmentId,
    userId: user._id,
  })
    .populate("storyId")
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
