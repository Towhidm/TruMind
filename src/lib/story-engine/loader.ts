import { campusLightsStory } from "@/data/stories/campus-lights";
import { sevenDaysStory } from "@/data/stories/seven-days";
import type { StoryDefinition } from "./types";

const STORIES: Record<string, StoryDefinition> = {
  "seven-days": sevenDaysStory,
  "campus-lights": campusLightsStory,
};

export function getStoryByKey(key: string): StoryDefinition | null {
  return STORIES[key] ?? null;
}

export function getAllStoryKeys(): string[] {
  return Object.keys(STORIES);
}
