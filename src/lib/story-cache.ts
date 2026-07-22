import { Story } from "@/models/Story";
import { connectDB } from "@/lib/mongodb";

type CachedStory = {
  _id: string;
  title: string;
  slug: string;
  storyKey: string;
  description: string;
  estimatedMinutes: number;
  difficulty: string;
  chapterCount: number;
  categoryId: unknown;
};

declare global {
  // eslint-disable-next-line no-var
  var __storyBySlugCache: Map<string, CachedStory> | undefined;
}

function getCache() {
  if (!global.__storyBySlugCache) {
    global.__storyBySlugCache = new Map();
  }
  return global.__storyBySlugCache;
}

export async function getStoryMetaBySlug(slug: string): Promise<CachedStory | null> {
  const cache = getCache();
  const hit = cache.get(slug);
  if (hit) return hit;

  await connectDB();
  const story = await Story.findOne({ slug, isPublished: true })
    .select("_id title slug storyKey description estimatedMinutes difficulty chapterCount categoryId")
    .lean();

  if (!story) return null;

  const cached: CachedStory = {
    _id: story._id.toString(),
    title: story.title,
    slug: story.slug,
    storyKey: story.storyKey,
    description: story.description,
    estimatedMinutes: story.estimatedMinutes,
    difficulty: story.difficulty,
    chapterCount: story.chapterCount,
    categoryId: story.categoryId,
  };

  cache.set(slug, cached);
  return cached;
}

export function clearStoryMetaCache() {
  getCache().clear();
}
