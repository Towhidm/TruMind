"use client";

import { useCallback, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Progress } from "antd";
import { getNextScene } from "@/lib/story-engine/navigation";
import { saveChapterAnswer } from "@/actions/story.actions";
import SceneRenderer from "./SceneRenderer";
import Q9SupportModal from "./Q9SupportModal";
import type { StoryChapter, StoryChoice } from "@/lib/story-engine/types";

interface StoryPlayerProps {
  initialChapter: StoryChapter;
  initialSceneId: string;
  storySlug: string;
  storyTitle: string;
  currentChapterNum: number;
  totalChapters: number;
  completionPercent: number;
}

export default function StoryPlayer({
  initialChapter,
  initialSceneId,
  storySlug,
  storyTitle,
  currentChapterNum,
  totalChapters,
  completionPercent,
}: StoryPlayerProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [chapter, setChapter] = useState(initialChapter);
  const [sceneId, setSceneId] = useState(initialSceneId);
  const [chapterNum, setChapterNum] = useState(currentChapterNum);
  const [progress, setProgress] = useState(completionPercent);
  const [isSaving, setIsSaving] = useState(false);
  const [showQ9, setShowQ9] = useState(false);

  const scene =
    chapter.scenes.find((s) => s.id === sceneId) ?? chapter.scenes[0] ?? null;

  const handleNext = useCallback(() => {
    const activeId = chapter.scenes.some((s) => s.id === sceneId)
      ? sceneId
      : (chapter.scenes[0]?.id ?? sceneId);
    const next = getNextScene(chapter, activeId);
    if (next) setSceneId(next.id);
  }, [chapter, sceneId]);

  const handleChoice = async (choice: StoryChoice) => {
    setIsSaving(true);
    try {
      const result = await saveChapterAnswer(
        storySlug,
        chapterNum,
        choice.label,
        choice.phqScore
      );

      if (result.showQ9Support) {
        setShowQ9(true);
      }

      if (result.completed && result.assessmentId) {
        startTransition(() => {
          router.push(`/dashboard/stories/${storySlug}/result/${result.assessmentId}`);
        });
        return;
      }

      if (!result.completed && result.chapter && result.nextSceneId) {
        setChapter(result.chapter);
        setSceneId(result.nextSceneId);
        setChapterNum(result.nextChapter);
        setProgress(result.completionPercent);
      }
    } finally {
      setIsSaving(false);
    }
  };

  if (!scene) {
    return (
      <div className="mx-auto flex min-h-full w-full max-w-2xl items-center justify-center py-12">
        <p className="text-sm text-slate-500">This story could not be loaded. Try starting again.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col justify-center gap-4 py-4 md:gap-6">
      <div>
        <h2 className="text-lg font-bold text-slate-800 sm:text-xl">{storyTitle}</h2>
        <Progress percent={progress} strokeColor="#7c3aed" className="mt-2" />
      </div>

      <SceneRenderer
        scene={scene}
        chapterTitle={chapter.title}
        chapterNum={chapterNum}
        totalChapters={totalChapters}
        onNext={handleNext}
        onChoice={handleChoice}
        isSaving={isSaving || isPending}
      />

      <Q9SupportModal open={showQ9} onClose={() => setShowQ9(false)} />
    </div>
  );
}
