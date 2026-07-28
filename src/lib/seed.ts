import { connectDB } from "@/lib/mongodb";
import { StoryCategory } from "@/models/StoryCategory";
import { Story } from "@/models/Story";
import { clearStoryMetaCache } from "@/lib/story-cache";

const CATEGORIES = [
  { name: "Life", slug: "life", description: "Everyday life stories", order: 1 },
  { name: "University", slug: "university", description: "Campus and student life", order: 2 },
  {
    name: "Professional",
    slug: "professional",
    description: "Work and career life stories",
    order: 3,
  },
];

const ACTIVE_SLUGS = [
  "seven-days",
  "campus-lights",
  "late-library",
  "roommate-notes",
  "freshman-week",
  "desk-hours",
  "open-floor",
  "after-clock",
];

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
  {
    categorySlug: "university",
    title: "Late Library",
    slug: "late-library",
    description: "Exam week at university. Long nights in the library ask how you really feel.",
    estimatedMinutes: 18,
    difficulty: "easy" as const,
    storyKey: "late-library",
  },
  {
    categorySlug: "university",
    title: "Roommate Notes",
    slug: "roommate-notes",
    description: "Shared dorm life. Small notes and late talks ask how you feel inside.",
    estimatedMinutes: 18,
    difficulty: "easy" as const,
    storyKey: "roommate-notes",
  },
  {
    categorySlug: "university",
    title: "Freshman Week",
    slug: "freshman-week",
    description: "Your first weeks at university. New halls and new faces ask how you feel.",
    estimatedMinutes: 18,
    difficulty: "easy" as const,
    storyKey: "freshman-week",
  },
  {
    categorySlug: "professional",
    title: "Desk Hours",
    slug: "desk-hours",
    description: "Long days at your desk. Emails and deadlines ask how you really feel.",
    estimatedMinutes: 18,
    difficulty: "easy" as const,
    storyKey: "desk-hours",
  },
  {
    categorySlug: "professional",
    title: "Open Floor",
    slug: "open-floor",
    description: "Open office days. Meetings and noise ask how you feel under the bright lights.",
    estimatedMinutes: 18,
    difficulty: "easy" as const,
    storyKey: "open-floor",
  },
  {
    categorySlug: "professional",
    title: "After Clock",
    slug: "after-clock",
    description: "Work ends on paper. The commute and evening still ask how you feel.",
    estimatedMinutes: 18,
    difficulty: "easy" as const,
    storyKey: "after-clock",
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

const SEED_VERSION = 4;

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
