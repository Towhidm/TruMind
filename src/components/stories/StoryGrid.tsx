import StoryCard from "./StoryCard";
import type { StoryWithProgress } from "@/actions/story.actions";

interface StoryGridProps {
  stories: StoryWithProgress[];
  emptyMessage?: string;
}

export default function StoryGrid({
  stories,
  emptyMessage = "No stories available yet. Check back soon.",
}: StoryGridProps) {
  if (stories.length === 0) {
    return <div className="py-12 text-center text-slate-500">{emptyMessage}</div>;
  }

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
      {stories.map((story) => (
        <StoryCard key={story._id} story={story} />
      ))}
    </div>
  );
}
