import StoryGrid from "@/components/stories/StoryGrid";
import { getStories } from "@/actions/story.actions";

export default async function DashboardPage() {
  const stories = await getStories();

  return (
    <div className="w-full">
      <div className="mb-6 sm:mb-8">
        <p className="text-sm text-slate-500">
          Pick a story and step into a world that helps you understand yourself
        </p>
      </div>
      <StoryGrid stories={stories} />
    </div>
  );
}
