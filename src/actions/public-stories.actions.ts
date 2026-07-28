"use server";

import { connectDB } from "@/lib/mongodb";
import { seedStories } from "@/lib/seed";
import { Story } from "@/models/Story";

export interface PublicStoryCard {
  _id: string;
  title: string;
  slug: string;
  description: string;
  estimatedMinutes: number;
  difficulty: string;
  categoryName: string;
  categorySlug: string;
}

export async function getPublicStories(): Promise<PublicStoryCard[]> {
  await connectDB();
  await seedStories();

  const stories = await Story.find({ isPublished: true })
    .populate("categoryId", "name slug")
    .select("title slug description estimatedMinutes difficulty categoryId")
    .lean();

  return stories.map((story) => {
    const category = story.categoryId as unknown as { name: string; slug: string };
    return {
      _id: story._id.toString(),
      title: story.title,
      slug: story.slug,
      description: story.description,
      estimatedMinutes: story.estimatedMinutes,
      difficulty: story.difficulty,
      categoryName: category?.name ?? "Life",
      categorySlug: category?.slug ?? "life",
    };
  });
}
