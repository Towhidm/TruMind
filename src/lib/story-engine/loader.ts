import { afterClockStory } from "@/data/stories/after-clock";
import { campusLightsStory } from "@/data/stories/campus-lights";
import { deskHoursStory } from "@/data/stories/desk-hours";
import { freshmanWeekStory } from "@/data/stories/freshman-week";
import { lateLibraryStory } from "@/data/stories/late-library";
import { openFloorStory } from "@/data/stories/open-floor";
import { roommateNotesStory } from "@/data/stories/roommate-notes";
import { sevenDaysStory } from "@/data/stories/seven-days";
import type { StoryDefinition } from "./types";

const STORIES: Record<string, StoryDefinition> = {
  "seven-days": sevenDaysStory,
  "campus-lights": campusLightsStory,
  "late-library": lateLibraryStory,
  "roommate-notes": roommateNotesStory,
  "freshman-week": freshmanWeekStory,
  "desk-hours": deskHoursStory,
  "open-floor": openFloorStory,
  "after-clock": afterClockStory,
};

export function getStoryByKey(key: string): StoryDefinition | null {
  return STORIES[key] ?? null;
}

export function getAllStoryKeys(): string[] {
  return Object.keys(STORIES);
}
