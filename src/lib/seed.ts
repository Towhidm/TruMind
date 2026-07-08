import { connectDB } from "@/lib/mongodb";
import { StoryCategory } from "@/models/StoryCategory";
import { Story } from "@/models/Story";

const CATEGORIES = [
  { name: "Life", slug: "life", description: "Everyday life stories", order: 1 },
  { name: "University", slug: "university", description: "Campus and student life", order: 2 },
  { name: "Adventure", slug: "adventure", description: "Journeys and discoveries", order: 3 },
  { name: "Mystery", slug: "mystery", description: "Secrets waiting to unfold", order: 4 },
  { name: "Fantasy", slug: "fantasy", description: "Magical worlds", order: 5 },
  { name: "Family", slug: "family", description: "Home and relationships", order: 6 },
  { name: "Healing", slug: "healing", description: "Paths toward peace", order: 7 },
  { name: "Dreams", slug: "dreams", description: "Stories of the mind", order: 8 },
];

const STORIES = [
  {
    categorySlug: "life",
    title: "Seven Days",
    slug: "seven-days",
    description:
      "A quiet week in your life unfolds day by day. Each morning brings something new — and something you have been carrying in silence.",
    estimatedMinutes: 18,
    difficulty: "easy" as const,
    storyKey: "seven-days",
  },
  {
    categorySlug: "university",
    title: "Campus Lights",
    slug: "campus-lights",
    description:
      "Your first semester away from home. Late nights, new faces, and a dorm room that slowly starts to feel like yours — or doesn't.",
    estimatedMinutes: 18,
    difficulty: "easy" as const,
    storyKey: "campus-lights",
  },
  {
    categorySlug: "mystery",
    title: "The Old Key",
    slug: "the-old-key",
    description:
      "A small brass key arrives in the mail with no note. One locked box in the attic. Something inside wants to be found.",
    estimatedMinutes: 18,
    difficulty: "medium" as const,
    storyKey: "the-old-key",
  },
  {
    categorySlug: "adventure",
    title: "Mountain Path",
    slug: "mountain-path",
    description:
      "You signed up for a trail you have never walked. The mountain does not rush you. But it does not lie about what the climb costs.",
    estimatedMinutes: 18,
    difficulty: "medium" as const,
    storyKey: "mountain-path",
  },
  {
    categorySlug: "family",
    title: "Sunday Table",
    slug: "sunday-table",
    description:
      "Every Sunday your family gathers around the same old table. Same chairs. Same recipes. Something shifts when you start noticing what is not said.",
    estimatedMinutes: 18,
    difficulty: "easy" as const,
    storyKey: "sunday-table",
  },
  {
    categorySlug: "fantasy",
    title: "The Moon Gate",
    slug: "moon-gate",
    description:
      "In an old forest at the edge of town, a hidden gate appears only when the moon is full. You were told not to go. You go anyway — and what waits on the other side knows your name.",
    estimatedMinutes: 18,
    difficulty: "medium" as const,
    storyKey: "moon-gate",
  },
  {
    categorySlug: "healing",
    title: "Quiet Garden",
    slug: "quiet-garden",
    description:
      "Behind the clinic wall, through a gap you were not meant to find, lies a forgotten garden. Weeds and wildflowers. A broken bench. Something about this place makes the noise in your head go still — for a moment.",
    estimatedMinutes: 18,
    difficulty: "easy" as const,
    storyKey: "quiet-garden",
  },
  {
    categorySlug: "dreams",
    title: "Night Train",
    slug: "night-train",
    description:
      "At midnight a train arrives at the old platform — lights on, doors open, schedule empty. No one else sees it. The conductor nods like he has been waiting for you. Where it goes is not on any map you know.",
    estimatedMinutes: 18,
    difficulty: "medium" as const,
    storyKey: "night-train",
  },
];

export async function seedStories() {
  await connectDB();

  for (const cat of CATEGORIES) {
    await StoryCategory.findOneAndUpdate({ slug: cat.slug }, cat, {
      upsert: true,
      returnDocument: "after",
    });
  }

  for (const story of STORIES) {
    const category = await StoryCategory.findOne({ slug: story.categorySlug });
    if (!category) continue;

    await Story.findOneAndUpdate(
      { slug: story.slug },
      {
        categoryId: category._id,
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
  }
}
