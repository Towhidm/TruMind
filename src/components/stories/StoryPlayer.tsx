"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Progress, Spin } from "antd";
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
  const [chapter, setChapter] = useState(initialChapter);
  const [sceneId, setSceneId] = useState(initialSceneId);
  const [chapterNum, setChapterNum] = useState(currentChapterNum);
  const [progress, setProgress] = useState(completionPercent);
  const [isSaving, setIsSaving] = useState(false);
  const [showQ9, setShowQ9] = useState(false);

  const scene = chapter.scenes.find((s) => s.id === sceneId);

  const handleNext = useCallback(() => {
    const next = getNextScene(chapter, sceneId);
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
        router.push(`/dashboard/stories/${storySlug}/result/${result.assessmentId}`);
        return;
      }

      if (result.nextChapter && result.nextSceneId) {
        const { getPlayState } = await import("@/actions/story.actions");
        const state = await getPlayState(storySlug);
        if (state?.chapter) {
          setChapter(state.chapter);
          setSceneId(result.nextSceneId);
          setChapterNum(result.nextChapter);
          setProgress(state.completionPercent);
        }
      }
    } finally {
      setIsSaving(false);
    }
  };

  if (!scene) {
    return (
      <div className="flex justify-center py-12">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-3xl flex-col gap-4 md:max-w-2xl md:gap-6">
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
        isSaving={isSaving}
      />

      <Q9SupportModal open={showQ9} onClose={() => setShowQ9(false)} />
    </div>
  );
}
