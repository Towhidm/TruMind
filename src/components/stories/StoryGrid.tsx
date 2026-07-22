import StoryCard from "./StoryCard";
import type { StoryWithProgress } from "@/actions/story.actions";

interface StoryGridProps {
  stories: StoryWithProgress[];
}

export default function StoryGrid({ stories }: StoryGridProps) {
  if (stories.length === 0) {
    return (
      <div className="py-12 text-center text-slate-500">
        No stories available yet. Check back soon.
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
      {stories.map((story) => (
        <StoryCard key={story._id} story={story} />
      ))}
    </div>
  );
}
