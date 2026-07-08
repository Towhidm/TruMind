"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Progress, Tag } from "antd";
import { CheckCircle, Clock, Play } from "lucide-react";
import { getCategoryCover } from "@/lib/story-covers";
import type { StoryWithProgress } from "@/actions/story.actions";

interface StoryCardProps {
  story: StoryWithProgress;
}

export default function StoryCard({ story }: StoryCardProps) {
  const isInProgress = story.status === "in_progress";
  const hasCompleted = story.completedCount > 0;
  const coverSrc = getCategoryCover(story.categorySlug);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-36 w-full overflow-hidden sm:h-40">
        <Image
          src={coverSrc}
          alt={`${story.categoryName} story cover`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <span className="absolute bottom-2 left-3 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-purple-700">
          {story.categoryName}
        </span>
        {hasCompleted && (
          <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold text-green-600 shadow-sm">
            <CheckCircle className="h-3.5 w-3.5" />
            Completed
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4 sm:gap-3 sm:p-5">
        <h3 className="line-clamp-1 text-base font-bold text-slate-800 sm:text-lg">{story.title}</h3>

        <p className="line-clamp-2 text-sm text-slate-500">{story.description}</p>

        {hasCompleted && !isInProgress && (
          <p className="text-xs font-medium text-green-600">
            ✓ Already finished — play again anytime
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {story.estimatedMinutes} min
          </span>
          <Tag className="m-0 capitalize">{story.difficulty}</Tag>
          {hasCompleted && <span className="text-green-600">Done {story.completedCount}x</span>}
        </div>

        {(isInProgress || hasCompleted) && (
          <div>
            <div className="mb-1 flex justify-between text-xs text-slate-500">
              <span>{isInProgress ? "Progress" : "Last run"}</span>
              <span>{story.completionPercent}%</span>
            </div>
            <Progress percent={story.completionPercent} showInfo={false} strokeColor="#7c3aed" size="small" />
          </div>
        )}

        <div className="mt-auto flex flex-col gap-2 pt-1 sm:flex-row">
          {isInProgress ? (
            <Link href={`/dashboard/stories/${story.slug}/play`} className="flex-1">
              <Button type="primary" block icon={<Play className="h-4 w-4" />}>
                Resume
              </Button>
            </Link>
          ) : (
            <Link href={`/dashboard/stories/${story.slug}`} className="flex-1">
              <Button type="primary" block icon={<Play className="h-4 w-4" />}>
                {hasCompleted ? "Play Again" : "Start"}
              </Button>
            </Link>
          )}
          <Link href={`/dashboard/stories/${story.slug}`} className="sm:w-auto">
            <Button block className="w-full">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
