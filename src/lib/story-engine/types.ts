import type { PhqScore } from "@/lib/phq9/types";

export interface DialogueLine {
  speaker: string;
  text: string;
}

export interface StoryChoice {
  id: string;
  label: string;
  phqScore: PhqScore;
}

export interface StoryScene {
  id: string;
  type: "narration" | "dialogue" | "reflection" | "memory" | "discovery" | "tension" | "choice";
  content?: string;
  lines?: DialogueLine[];
  choices?: StoryChoice[];
  prompt?: string;
}

export interface StoryChapter {
  id: number;
  title: string;
  scenes: StoryScene[];
}

export interface StoryDefinition {
  key: string;
  title: string;
  description: string;
  chapters: StoryChapter[];
}
