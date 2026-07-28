import type { PhqScore } from "@/lib/phq9/types";
import type { StoryChapter, StoryChoice, StoryScene } from "@/lib/story-engine/types";

export function phqChoices(
  notAtAll: string,
  severalDays: string,
  moreThanHalf: string,
  nearlyEveryDay: string
): StoryChoice[] {
  return [
    { id: "c0", label: notAtAll, phqScore: 0 as PhqScore },
    { id: "c1", label: severalDays, phqScore: 1 as PhqScore },
    { id: "c2", label: moreThanHalf, phqScore: 2 as PhqScore },
    { id: "c3", label: nearlyEveryDay, phqScore: 3 as PhqScore },
  ];
}

/** Standard PHQ-9 choice wording for each item (1–9). */
export const PHQ_CHOICE_SETS: Record<number, [string, string, string, string]> = {
  1: [
    "I still enjoy them like before",
    "Some days yes, some days no",
    "Most days I don't enjoy them",
    "I almost never enjoy anything",
  ],
  2: [
    "I almost never feel down",
    "I feel down some days",
    "I feel down most days",
    "I feel down nearly every day",
  ],
  3: [
    "My sleep is fine",
    "Sleep is hard some nights",
    "Sleep is hard most nights",
    "Sleep is hard nearly every night",
  ],
  4: [
    "I have normal energy",
    "I feel tired some days",
    "I feel tired most days",
    "I feel tired nearly every day",
  ],
  5: [
    "My eating is normal",
    "Eating changes some days",
    "Eating changes most days",
    "Eating is hard nearly every day",
  ],
  6: [
    "I feel okay about myself",
    "I feel bad about myself some days",
    "I feel bad about myself most days",
    "I feel bad about myself nearly every day",
  ],
  7: [
    "I can focus fine",
    "Focus is hard some days",
    "Focus is hard most days",
    "I almost never can focus",
  ],
  8: [
    "My body feels normal",
    "Some days I feel slow or restless",
    "Most days I feel slow or restless",
    "I feel slow or restless nearly every day",
  ],
  9: [
    "I have not had those thoughts",
    "I had those thoughts some days",
    "I had those thoughts most days",
    "I had those thoughts nearly every day",
  ],
};

type SceneInput =
  | { type: "narration" | "memory" | "discovery" | "tension" | "reflection"; content: string }
  | {
      type: "dialogue";
      lines: { speaker: string; text: string }[];
    };

export function makeChapter(
  id: number,
  title: string,
  scenes: SceneInput[],
  choicePrompt: string
): StoryChapter {
  const labels = PHQ_CHOICE_SETS[id];
  if (!labels) throw new Error(`No PHQ choice set for chapter ${id}`);

  const builtScenes: StoryScene[] = scenes.map((scene, index) => {
    if (scene.type === "dialogue") {
      return { id: `dialogue-${index}`, type: "dialogue", lines: scene.lines };
    }
    return { id: `${scene.type}-${index}`, type: scene.type, content: scene.content };
  });

  builtScenes.push({
    id: "choice",
    type: "choice",
    content: choicePrompt,
    choices: phqChoices(...labels),
  });

  return { id, title, scenes: builtScenes };
}
