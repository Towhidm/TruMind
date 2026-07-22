import { connectDB } from "@/lib/mongodb";
import { StoryCategory } from "@/models/StoryCategory";
import { Story } from "@/models/Story";
import { clearStoryMetaCache } from "@/lib/story-cache";

const CATEGORIES = [
  { name: "Life", slug: "life", description: "Everyday life stories", order: 1 },
  { name: "University", slug: "university", description: "Campus and student life", order: 2 },
];

const ACTIVE_SLUGS = ["seven-days", "campus-lights"];

const STORIES = [
  {
    categorySlug: "life",
    title: "Seven Days",
    slug: "seven-days",
    description: "You spend one week at home. Each day asks how you feel.",
    estimatedMinutes: 18,
    difficulty: "easy" as const,
    storyKey: "seven-days",
  },
  {
    categorySlug: "university",
    title: "Campus Lights",
    slug: "campus-lights",
    description: "You are a student away from home. Campus life feels new and hard.",
    estimatedMinutes: 18,
    difficulty: "easy" as const,
    storyKey: "campus-lights",
  },
];

declare global {
  // eslint-disable-next-line no-var
  var __storiesSeeded: boolean | undefined;
  // eslint-disable-next-line no-var
  var __storiesSeedPromise: Promise<void> | undefined;
  // eslint-disable-next-line no-var
  var __storiesSeedVersion: number | undefined;
}

const SEED_VERSION = 3;

/** Runs once per server process (per seed version). */
export async function seedStories() {
  if (global.__storiesSeeded && global.__storiesSeedVersion === SEED_VERSION) return;

  if (!global.__storiesSeedPromise || global.__storiesSeedVersion !== SEED_VERSION) {
    global.__storiesSeedVersion = SEED_VERSION;
    global.__storiesSeedPromise = (async () => {
      await connectDB();
      clearStoryMetaCache();

      await Promise.all(
        CATEGORIES.map((cat) =>
          StoryCategory.findOneAndUpdate({ slug: cat.slug }, cat, {
            upsert: true,
            returnDocument: "after",
          })
        )
      );

      const categories = await StoryCategory.find({
        slug: { $in: CATEGORIES.map((c) => c.slug) },
      }).lean();
      const categoryBySlug = new Map(categories.map((c) => [c.slug, c._id]));

      await Promise.all(
        STORIES.map((story) => {
          const categoryId = categoryBySlug.get(story.categorySlug);
          if (!categoryId) return Promise.resolve();

          return Story.findOneAndUpdate(
            { slug: story.slug },
            {
              categoryId,
              title: story.title,
              slug: story.slug,
              description: story.description,
              coverImage: "",
              estimatedMinutes: story.estimatedMinutes,
              difficulty: story.difficulty,
              chapterCount: 9,
              storyKey: story.storyKey,
              isPublished: true,
            },
            { upsert: true, returnDocument: "after" }
          );
        })
      );

      // Hide removed stories from the library
      await Story.updateMany(
        { slug: { $nin: ACTIVE_SLUGS } },
        { $set: { isPublished: false } }
      );

      global.__storiesSeeded = true;
    })();
  }

  await global.__storiesSeedPromise;
}
