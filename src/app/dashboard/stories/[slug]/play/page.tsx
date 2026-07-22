import { notFound } from "next/navigation";
import StoryPlayer from "@/components/stories/StoryPlayer";
import { getPlayState, ensureStoryProgress } from "@/actions/story.actions";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function StoryPlayPage({ params }: Props) {
  const { slug } = await params;
  let state = await getPlayState(slug);

  if (!state) {
    const created = await ensureStoryProgress(slug);
    if (!created.chapter) notFound();

    state = {
      storyTitle: created.storyTitle,
      storySlug: created.storySlug,
      storyKey: created.storyKey,
      progressId: created.progressId,
      currentChapter: created.currentChapter,
      currentScene: created.currentScene,
      completionPercent: created.completionPercent,
      totalChapters: created.totalChapters,
      chapter: created.chapter,
      answers: [],
    };
  }

  if (!state?.chapter) notFound();

  return (
    <StoryPlayer
      initialChapter={state.chapter}
      initialSceneId={state.currentScene}
      storySlug={state.storySlug}
      storyTitle={state.storyTitle}
      currentChapterNum={state.currentChapter}
      totalChapters={state.totalChapters}
      completionPercent={state.completionPercent}
    />
  );
}
