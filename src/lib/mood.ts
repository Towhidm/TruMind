import type { MoodLevel } from "@/models/MoodCheckIn";

export const MOOD_OPTIONS: { value: MoodLevel; label: string; emoji: string }[] = [
  { value: 1, label: "Very low", emoji: "😔" },
  { value: 2, label: "Low", emoji: "😕" },
  { value: 3, label: "Okay", emoji: "😐" },
  { value: 4, label: "Good", emoji: "🙂" },
  { value: 5, label: "Great", emoji: "😊" },
];

export function moodLabel(mood: MoodLevel) {
  return MOOD_OPTIONS.find((o) => o.value === mood)?.label ?? "Okay";
}
