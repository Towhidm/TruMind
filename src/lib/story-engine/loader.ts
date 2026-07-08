import { campusLightsStory } from "@/data/stories/campus-lights";
import { moonGateStory } from "@/data/stories/moon-gate";
import { mountainPathStory } from "@/data/stories/mountain-path";
import { nightTrainStory } from "@/data/stories/night-train";
import { quietGardenStory } from "@/data/stories/quiet-garden";
import { sevenDaysStory } from "@/data/stories/seven-days";
import { sundayTableStory } from "@/data/stories/sunday-table";
import { theOldKeyStory } from "@/data/stories/the-old-key";
import type { StoryDefinition } from "./types";

const STORIES: Record<string, StoryDefinition> = {
  "seven-days": sevenDaysStory,
  "campus-lights": campusLightsStory,
  "the-old-key": theOldKeyStory,
  "mountain-path": mountainPathStory,
  "sunday-table": sundayTableStory,
  "moon-gate": moonGateStory,
  "quiet-garden": quietGardenStory,
  "night-train": nightTrainStory,
};

export function getStoryByKey(key: string): StoryDefinition | null {
  return STORIES[key] ?? null;
}

export function getAllStoryKeys(): string[] {
  return Object.keys(STORIES);
}
