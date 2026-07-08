import Image from "next/image";
import { auth } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { getStoryBySlug } from "@/actions/story.actions";
import StoryDetailsActions from "@/components/stories/StoryDetailsActions";
import { getCategoryCover } from "@/lib/story-covers";
import { Tag } from "antd";
import { Clock } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function StoryDetailsPage({ params }: Props) {
  const session = await auth();
  if (!session) redirect("/");

  const { slug } = await params;
  const story = await getStoryBySlug(slug);
  if (!story) notFound();

  const coverSrc = getCategoryCover(story.categorySlug);

  return (
    <DashboardLayout>
      <div className="w-full max-w-2xl">
        <div className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm">
          <div className="relative h-44 w-full sm:h-52">
            <Image
              src={coverSrc}
              alt={`${story.categoryName} story cover`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 672px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-4 sm:p-6">
              <Tag color="purple" className="mb-2">
                {story.categoryName}
              </Tag>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">{story.title}</h1>
            </div>
          </div>

          <div className="space-y-4 p-4 sm:p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              <Tag className="capitalize">{story.difficulty}</Tag>
              <span className="flex items-center gap-1 text-sm text-slate-400">
                <Clock className="h-4 w-4" />
                {story.estimatedMinutes} min
              </span>
            </div>

            <p className="leading-relaxed text-slate-600">{story.description}</p>

            {story.completedCount > 0 && (
              <div className="rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
                ✓ You already completed this story
                {story.completedCount > 1 ? ` (${story.completedCount} times)` : ""}. You can play
                again anytime.
              </div>
            )}

            {story.progress && (
              <p className="text-sm text-purple-600">
                In progress — {story.progress.completionPercent}% complete
              </p>
            )}

            <div className="pt-4">
              <StoryDetailsActions slug={slug} hasInProgress={story.hasInProgress} />
            </div>

            <div className="border-t border-purple-50 pt-4">
              <h3 className="mb-2 text-sm font-semibold text-slate-700">Chapters</h3>
              <ol className="list-inside list-decimal space-y-1 text-sm text-slate-500">
                {story.chapterTitles.map((title) => (
                  <li key={title}>{title}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
