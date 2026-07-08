import type { PhqScore } from "@/lib/phq9/types";
import type { StoryChoice } from "@/lib/story-engine/types";

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
