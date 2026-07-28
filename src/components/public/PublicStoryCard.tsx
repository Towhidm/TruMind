"use client";

import Image from "next/image";
import Link from "next/link";
import { Tag } from "antd";
import { Clock, Lock, Play } from "lucide-react";
import { getCategoryCover } from "@/lib/story-covers";
import type { PublicStoryCard } from "@/actions/public-stories.actions";

interface Props {
  story: PublicStoryCard;
  isLoggedIn: boolean;
}

export default function PublicStoryCardView({ story, isLoggedIn }: Props) {
  const coverSrc = getCategoryCover(story.categorySlug);
  const playHref = isLoggedIn
    ? `/dashboard/stories/${story.slug}`
    : `/login?callbackUrl=${encodeURIComponent(`/dashboard/stories/${story.slug}`)}`;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm">
      <div className="relative h-36 w-full overflow-hidden sm:h-40">
        <Image
          src={coverSrc}
          alt={`${story.categoryName} story cover`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <span className="absolute bottom-2 left-3 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-purple-700">
          {story.categoryName}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-1 text-base font-bold text-slate-800">{story.title}</h3>
        <p className="line-clamp-2 text-sm text-slate-500">{story.description}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {story.estimatedMinutes} min
          </span>
          <Tag className="m-0 capitalize">{story.difficulty}</Tag>
        </div>

        {!isLoggedIn && (
          <p className="flex items-center gap-1 text-xs text-amber-700">
            <Lock className="h-3.5 w-3.5" />
            Sign in to play this story
          </p>
        )}

        <Link
          href={playHref}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#7c3aed] px-3 py-2.5 text-sm font-semibold text-white hover:bg-[#6d28d9]"
        >
          <Play className="h-4 w-4" />
          {isLoggedIn ? "Open story" : "Sign in to play"}
        </Link>
      </div>
    </div>
  );
}
