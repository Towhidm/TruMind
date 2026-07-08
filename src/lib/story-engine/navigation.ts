import type { StoryChapter, StoryScene } from "./types";

export function getChapter(chapters: StoryChapter[], chapterNum: number): StoryChapter | null {
  return chapters.find((c) => c.id === chapterNum) ?? null;
}

export function getScene(chapter: StoryChapter, sceneId: string): StoryScene | null {
  return chapter.scenes.find((s) => s.id === sceneId) ?? null;
}

export function getFirstScene(chapter: StoryChapter): StoryScene | null {
  return chapter.scenes[0] ?? null;
}

export function getNextScene(chapter: StoryChapter, currentSceneId: string): StoryScene | null {
  const index = chapter.scenes.findIndex((s) => s.id === currentSceneId);
  if (index === -1 || index >= chapter.scenes.length - 1) return null;
  return chapter.scenes[index + 1];
}

export function isLastScene(chapter: StoryChapter, sceneId: string): boolean {
  const index = chapter.scenes.findIndex((s) => s.id === sceneId);
  return index === chapter.scenes.length - 1;
}

export function calculateCompletionPercent(currentChapter: number, totalChapters: number, hasAnsweredCurrent: boolean): number {
  const completed = hasAnsweredCurrent ? currentChapter : currentChapter - 1;
  return Math.round((completed / totalChapters) * 100);
}
