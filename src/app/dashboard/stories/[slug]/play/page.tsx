import { auth } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StoryPlayer from "@/components/stories/StoryPlayer";
import { getPlayState, ensureStoryProgress } from "@/actions/story.actions";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function StoryPlayPage({ params }: Props) {
  const session = await auth();
  if (!session) redirect("/");

  const { slug } = await params;
  let state = await getPlayState(slug);

  if (!state) {
    await ensureStoryProgress(slug);
    state = await getPlayState(slug);
  }

  if (!state) notFound();

  return (
    <DashboardLayout>
      <StoryPlayer
        initialChapter={state.chapter}
        initialSceneId={state.currentScene}
        storySlug={state.storySlug}
        storyTitle={state.storyTitle}
        currentChapterNum={state.currentChapter}
        totalChapters={state.totalChapters}
        completionPercent={state.completionPercent}
      />
    </DashboardLayout>
  );
}
