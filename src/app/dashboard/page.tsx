import StoryGrid from "@/components/stories/StoryGrid";
import DailyMoodCheckIn from "@/components/mood/DailyMoodCheckIn";
import { getStories } from "@/actions/story.actions";
import { getTodayMoodCheckIn } from "@/actions/mood.actions";

interface Props {
  searchParams: Promise<{ category?: string; filter?: string; notice?: string }>;
}

function localDayKeyFromServer() {
  // Approximate; client also sends its dayKey on save. Used for initial hydrate.
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default async function DashboardPage({ searchParams }: Props) {
  const params = await searchParams;
  const dayKey = localDayKeyFromServer();

  const [stories, todayMood] = await Promise.all([
    getStories(),
    getTodayMoodCheckIn(dayKey),
  ]);

  const category = params.category?.toLowerCase();
  const filter = params.filter?.toLowerCase();

  let filtered = stories;
  let subtitle = "Pick a story and step into a world that helps you understand yourself";

  if (category) {
    filtered = stories.filter((s) => s.categorySlug === category);
    const label = category.charAt(0).toUpperCase() + category.slice(1);
    subtitle = `${label} stories`;
  } else if (filter === "completed") {
    filtered = stories.filter((s) => s.completedCount > 0 || s.status === "completed");
    subtitle = "Stories you have completed";
  }

  return (
    <div className="w-full">
      <DailyMoodCheckIn initialMood={todayMood?.mood ?? null} dayKey={dayKey} />

      <div className="mb-6 sm:mb-8">
        <p className="text-sm text-slate-500">{subtitle}</p>
        {params.notice === "no-continue" && (
          <p className="mt-2 rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-800">
            No story in progress right now. Pick one below to start.
          </p>
        )}
      </div>
      <StoryGrid stories={filtered} emptyMessage="No stories match this filter." />
    </div>
  );
}
