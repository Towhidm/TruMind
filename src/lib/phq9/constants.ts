import type { PhqQuestion } from "./types";

export const PHQ9_TIMEFRAME = "Over the last 2 weeks";

export const PHQ9_QUESTIONS: PhqQuestion[] = [
  { id: 1, text: "Little interest or pleasure in doing things" },
  { id: 2, text: "Feeling down, depressed, or hopeless" },
  { id: 3, text: "Trouble falling or staying asleep, or sleeping too much" },
  { id: 4, text: "Feeling tired or having little energy" },
  { id: 5, text: "Poor appetite or overeating" },
  { id: 6, text: "Feeling bad about yourself — or that you are a failure or have let yourself or your family down" },
  { id: 7, text: "Trouble concentrating on things, such as reading the newspaper or watching television" },
  { id: 8, text: "Moving or speaking so slowly that other people could have noticed. Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual" },
  { id: 9, text: "Thoughts that you would be better off dead, or of hurting yourself" },
];

export const PHQ9_CHOICE_LABELS = [
  "Not at all",
  "Several days",
  "More than half the days",
  "Nearly every day",
] as const;

export const SEVERITY_RANGES = [
  { min: 0, max: 4, label: "Minimal", key: "minimal" as const },
  { min: 5, max: 9, label: "Mild", key: "mild" as const },
  { min: 10, max: 14, label: "Moderate", key: "moderate" as const },
  { min: 15, max: 19, label: "Moderately Severe", key: "moderately_severe" as const },
  { min: 20, max: 27, label: "Severe", key: "severe" as const },
];

export const Q9_SUPPORT_RESOURCES = [
  { name: "National Suicide Prevention Lifeline", contact: "988 (US)" },
  { name: "Crisis Text Line", contact: "Text HOME to 741741" },
  { name: "International Association for Suicide Prevention", contact: "https://www.iasp.info/resources/Crisis_Centres/" },
];
