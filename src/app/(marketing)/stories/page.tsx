import { auth } from "@/lib/auth";
import { getPublicStories } from "@/actions/public-stories.actions";
import PublicStoryCardView from "@/components/public/PublicStoryCard";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ category?: string }>;
}

export default async function PublicStoriesPage({ searchParams }: Props) {
  const params = await searchParams;
  const [session, stories] = await Promise.all([auth(), getPublicStories()]);
  const isLoggedIn = !!session?.user;

  const category = params.category?.toLowerCase();
  const filtered = category
    ? stories.filter((s) => s.categorySlug === category)
    : stories;

  const subtitle = category
    ? `${category.charAt(0).toUpperCase() + category.slice(1)} stories`
    : "Browse stories. Sign in to play and save your progress.";

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-8 sm:px-6 sm:py-10">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">Stories</h1>
        <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
        {!isLoggedIn && (
          <p className="mt-3 text-sm text-slate-700">
            New here?{" "}
            <Link href="/signup" className="font-semibold text-purple-800 hover:underline">
              Create an account
            </Link>{" "}
            to start playing.
          </p>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-slate-600">No stories match this filter.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((story) => (
            <PublicStoryCardView key={story._id} story={story} isLoggedIn={isLoggedIn} />
          ))}
        </div>
      )}
    </div>
  );
}
