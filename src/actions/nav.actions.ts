"use server";

import { requireCurrentUser } from "@/lib/get-current-user";
import { seedStories } from "@/lib/seed";
import { StoryProgress } from "@/models/StoryProgress";
import { Story } from "@/models/Story";

/** Most recently played in-progress story slug, if any. */
export async function getContinueStorySlug(): Promise<string | null> {
  const [user] = await Promise.all([requireCurrentUser(), seedStories()]);

  const progress = await StoryProgress.findOne({
    userId: user._id,
    status: "in_progress",
  })
    .sort({ lastPlayedAt: -1 })
    .select("storyId")
    .lean();

  if (!progress) return null;

  const story = await Story.findById(progress.storyId).select("slug isPublished").lean();
  if (!story?.isPublished) return null;

  return story.slug;
}
