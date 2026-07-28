import type { StoryDefinition } from "@/lib/story-engine/types";
import { makeChapter } from "./helpers";

/** University — dorm and roommate life */
export const roommateNotesStory: StoryDefinition = {
  key: "roommate-notes",
  title: "Roommate Notes",
  description: "Shared dorm life. Small notes and late talks ask how you feel inside.",
  chapters: [
    makeChapter(
      1,
      "Day 1 — Sticky Note",
      [
        {
          type: "narration",
          content:
            "A yellow note sits on your desk. 'Movie night?' Your roommate smiles. You used to say yes fast. Today you pause.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Roommate", text: "We can order noodles." },
            { speaker: "You", text: "Sounds nice. I'm not sure." },
            { speaker: "Roommate", text: "No pressure. Join if you want." },
            { speaker: "You", text: "I'll decide later." },
          ],
        },
        {
          type: "memory",
          content: "First month here, movie nights felt easy. Laughs filled the small room. Fun feels quieter now.",
        },
      ],
      "Your roommate waits. Do you still enjoy small plans like before?"
    ),
    makeChapter(
      2,
      "Day 2 — Shared Fridge",
      [
        {
          type: "dialogue",
          lines: [
            { speaker: "Roommate", text: "You okay? You've been quiet." },
            { speaker: "You", text: "I'm fine. Just a bit sad." },
            { speaker: "Roommate", text: "I'm here if you want to talk." },
            { speaker: "You", text: "Thanks. That helps." },
          ],
        },
        {
          type: "tension",
          content: "The dorm fridge hums. The room feels small. A heavy feeling sits with you.",
        },
        {
          type: "narration",
          content: "You wash a cup slowly. Outside, students laugh in the hall. You feel apart from them.",
        },
      ],
      "In the dorm, how often do you feel down?"
    ),
    makeChapter(
      3,
      "Day 3 — Bunk Light",
      [
        {
          type: "discovery",
          content:
            "Your roommate sleeps. Your phone light stays on. Sleep will not come. Or you sleep through your alarm.",
        },
        {
          type: "narration",
          content: "The bunk creaks. You turn again. Morning class feels far and too close at once.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Roommate (whisper)", text: "Can't sleep?" },
            { speaker: "You", text: "Not really." },
            { speaker: "Roommate", text: "We can keep the light low." },
            { speaker: "You", text: "Thanks." },
          ],
        },
      ],
      "Shared nights are hard. How is your sleep?"
    ),
    makeChapter(
      4,
      "Day 4 — Laundry Walk",
      [
        {
          type: "narration",
          content:
            "You carry a laundry bag down the hall. It feels heavier than it should. Your arms feel empty of energy.",
        },
        {
          type: "tension",
          content: "Even simple chores feel long. You sit on the washer and close your eyes for a minute.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Hall mate", text: "Rough day?" },
            { speaker: "You", text: "Just low energy." },
            { speaker: "Hall mate", text: "Same boat." },
            { speaker: "You", text: "Yeah." },
          ],
        },
      ],
      "Around the dorm, how is your energy?"
    ),
    makeChapter(
      5,
      "Day 5 — Microwave Dinner",
      [
        {
          type: "dialogue",
          lines: [
            { speaker: "Roommate", text: "I made extra rice." },
            { speaker: "You", text: "Thanks. I forgot to eat earlier." },
            { speaker: "Roommate", text: "Then you snack at midnight?" },
            { speaker: "You", text: "Sometimes. Eating is uneven." },
          ],
        },
        {
          type: "narration",
          content: "Steam rises from the bowl. You take two bites. Or you finish too fast without tasting.",
        },
        {
          type: "reflection",
          content: "Dorm food days feel off. Appetite comes and goes without a clear reason.",
        },
      ],
      "How has your eating been in the dorm?"
    ),
    makeChapter(
      6,
      "Day 6 — Mirror Note",
      [
        {
          type: "memory",
          content:
            "You see an old selfie on the mirror. You look different now. A hard voice says you are not enough.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Roommate", text: "You're harder on yourself than anyone else." },
            { speaker: "You", text: "I feel like I'm falling behind." },
            { speaker: "Roommate", text: "You're still here. That matters." },
            { speaker: "You", text: "I'm trying to believe that." },
          ],
        },
        {
          type: "tension",
          content: "Shame sits in the small room. You feel you have let people down.",
        },
      ],
      "After a long dorm week, how do you feel about yourself?"
    ),
    makeChapter(
      7,
      "Day 7 — Desk Lamp",
      [
        {
          type: "narration",
          content:
            "Homework sits open. A show plays on your laptop. You watch, but nothing sticks. Focus slips away.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Roommate", text: "Want quiet for an hour?" },
            { speaker: "You", text: "Yes. I can't concentrate." },
            { speaker: "Roommate", text: "Headphones in. You got this." },
            { speaker: "You", text: "Thanks." },
          ],
        },
        {
          type: "discovery",
          content: "You reread the same paragraph. The words blur. Focus feels harder than before.",
        },
      ],
      "At your dorm desk, how hard is it to focus?"
    ),
    makeChapter(
      8,
      "Day 8 — Hallway",
      [
        {
          type: "tension",
          content:
            "You walk the hallway. Your steps drag. Or you pace because sitting still feels worse.",
        },
        {
          type: "narration",
          content: "Your roommate notices your foot tapping on the floor. Your body will not rest.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Roommate", text: "Want to step outside for air?" },
            { speaker: "You", text: "Yeah. I feel restless." },
            { speaker: "Roommate", text: "Two minutes. Come on." },
            { speaker: "You", text: "Okay." },
          ],
        },
      ],
      "How has your body felt — slow or restless?"
    ),
    makeChapter(
      9,
      "Day 9 — Soft Light",
      [
        {
          type: "narration",
          content:
            "Night thoughts feel sharp. You feel scared. You remember you can wake your roommate. Help is close.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Roommate", text: "If nights get hard, wake me." },
            { speaker: "You", text: "I might need that." },
            { speaker: "Roommate", text: "Please do. You're not alone here." },
            { speaker: "You", text: "Thank you." },
          ],
        },
        {
          type: "memory",
          content: "You think of campus counseling. Of home. Of people who care when nights feel dark.",
        },
      ],
      "These thoughts can be scary. Have you had thoughts of hurting yourself?"
    ),
  ],
};
