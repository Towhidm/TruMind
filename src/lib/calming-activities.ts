export type CalmingActivityId = "breathing" | "grounding" | "stretch";

export interface CalmingActivity {
  id: CalmingActivityId;
  title: string;
  shortLabel: string;
  description: string;
  durationLabel: string;
  steps: string[];
}

export const CALMING_ACTIVITIES: CalmingActivity[] = [
  {
    id: "breathing",
    title: "Calm Breathing",
    shortLabel: "Breathing",
    description: "Slow breaths to ease tension in your body and mind.",
    durationLabel: "About 1 minute",
    steps: [
      "Sit comfortably. Soften your shoulders.",
      "Breathe in slowly through your nose for 4 counts.",
      "Hold gently for 4 counts.",
      "Breathe out through your mouth for 4 counts.",
      "Repeat a few times. There is no perfect pace.",
    ],
  },
  {
    id: "grounding",
    title: "5-4-3-2-1 Grounding",
    shortLabel: "Grounding",
    description: "Use your senses to come back to the present moment.",
    durationLabel: "About 2 minutes",
    steps: [
      "Name 5 things you can see.",
      "Name 4 things you can touch.",
      "Name 3 things you can hear.",
      "Name 2 things you can smell.",
      "Name 1 thing you can taste (or a favorite taste).",
    ],
  },
  {
    id: "stretch",
    title: "Easy Stretch",
    shortLabel: "Stretch",
    description: "Gentle moves to release stress from your neck and shoulders.",
    durationLabel: "About 1 minute",
    steps: [
      "Roll your shoulders up, back, and down slowly — 5 times.",
      "Tilt your right ear toward your right shoulder. Hold 10 seconds.",
      "Tilt your left ear toward your left shoulder. Hold 10 seconds.",
      "Open and close your hands, then shake them lightly.",
      "Take one slow breath. Notice if anything feels a little easier.",
    ],
  },
];

export function getCalmingActivity(id: CalmingActivityId): CalmingActivity | undefined {
  return CALMING_ACTIVITIES.find((a) => a.id === id);
}
