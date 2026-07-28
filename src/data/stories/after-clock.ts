import type { StoryDefinition } from "@/lib/story-engine/types";
import { makeChapter } from "./helpers";

/** Professional — commute / after-work life */
export const afterClockStory: StoryDefinition = {
  key: "after-clock",
  title: "After Clock",
  description: "Work ends on paper. The commute and evening still ask how you feel.",
  chapters: [
    makeChapter(
      1,
      "Day 1 — Punch Out",
      [
        {
          type: "narration",
          content:
            "The clock hits end of day. Your bag is packed. Hobby plans wait on your phone. You used to look forward to them. Tonight they feel flat.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Friend (text)", text: "Gym later?" },
            { speaker: "You", text: "Not sure." },
            { speaker: "Friend", text: "Or just a walk. Easy." },
            { speaker: "You", text: "Maybe another day." },
          ],
        },
        {
          type: "memory",
          content: "After-work hobbies once felt like freedom. Interest in them feels smaller now.",
        },
      ],
      "After work, do you still enjoy free time like before?"
    ),
    makeChapter(
      2,
      "Day 2 — Commute Seat",
      [
        {
          type: "dialogue",
          lines: [
            { speaker: "Sibling (call)", text: "How was work?" },
            { speaker: "You", text: "Fine. I'm just quiet." },
            { speaker: "Sibling", text: "You sound down." },
            { speaker: "You", text: "A bit. The day sat heavy." },
          ],
        },
        {
          type: "tension",
          content: "The bus rocks. Rain hits the window. A sad feeling rides home with you.",
        },
        {
          type: "narration",
          content: "You put in earbuds. Music plays. You do not really hear it. The city slides by.",
        },
      ],
      "On the way home, how often do you feel down?"
    ),
    makeChapter(
      3,
      "Day 3 — Early Alarm",
      [
        {
          type: "discovery",
          content:
            "You set two alarms. Sleep still breaks. Or you crash hard and wake unrested for the next shift.",
        },
        {
          type: "narration",
          content: "Your pillow feels warm. Your mind lists tomorrow's tasks. Night does not feel like rest.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Household member", text: "Still awake?" },
            { speaker: "You", text: "Work thoughts won't stop." },
            { speaker: "Household member", text: "Try to rest. Morning comes fast." },
            { speaker: "You", text: "I know." },
          ],
        },
      ],
      "Between workdays, how is your sleep?"
    ),
    makeChapter(
      4,
      "Day 4 — Doorway",
      [
        {
          type: "narration",
          content:
            "You unlock home. Shoes feel heavy. Sitting on the couch takes effort. Evening chores wait.",
        },
        {
          type: "tension",
          content: "Dinner can wait. Energy is low. The day took more than hours on a timesheet.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Neighbor", text: "Long day?" },
            { speaker: "You", text: "Yeah. Empty tank." },
            { speaker: "Neighbor", text: "Rest well." },
            { speaker: "You", text: "Thanks." },
          ],
        },
      ],
      "After work, how is your energy?"
    ),
    makeChapter(
      5,
      "Day 5 — Kitchen Light",
      [
        {
          type: "dialogue",
          lines: [
            { speaker: "Friend (text)", text: "Did you eat?" },
            { speaker: "You", text: "Skipped lunch. Snacking now." },
            { speaker: "Friend", text: "Try a real meal if you can." },
            { speaker: "You", text: "Appetite is weird after work." },
          ],
        },
        {
          type: "narration",
          content: "The fridge light is bright. You close the door. Or you eat standing without a plate.",
        },
        {
          type: "reflection",
          content: "Workdays bend dinner. Hunger comes late, early, or not at all.",
        },
      ],
      "In the evenings, how has your eating been?"
    ),
    makeChapter(
      6,
      "Day 6 — Mirror After Work",
      [
        {
          type: "memory",
          content:
            "You see yourself after a hard week. Bills, targets, family hopes. A hard voice says you are not enough.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "You (to self)", text: "Everyone else seems fine." },
            { speaker: "Friend", text: "Comparison after work lies." },
            { speaker: "You", text: "I feel like I'm falling behind in life." },
            { speaker: "Friend", text: "You're carrying a lot. That is not failure." },
          ],
        },
        {
          type: "tension",
          content: "Shame sits by the door with your work bag. You feel you have let people down.",
        },
      ],
      "After a long work week, how do you feel about yourself?"
    ),
    makeChapter(
      7,
      "Day 7 — Evening Screen",
      [
        {
          type: "narration",
          content:
            "You try a show to relax. Or a short article. Your eyes move. Meaning does not stick. Focus drifts.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Friend (text)", text: "Watching anything good?" },
            { speaker: "You", text: "Can't focus on it." },
            { speaker: "Friend", text: "Brain tired from work?" },
            { speaker: "You", text: "Yes. Completely." },
          ],
        },
        {
          type: "discovery",
          content: "Even easy evening plans need focus you do not have. Concentration feels thin.",
        },
      ],
      "After clock-out, how hard is it to focus on simple things?"
    ),
    makeChapter(
      8,
      "Day 8 — Sidewalk",
      [
        {
          type: "tension",
          content:
            "You walk the last block home. Your pace is slow. Or you walk fast because stopping feels worse.",
        },
        {
          type: "narration",
          content: "Streetlights pass. Your shoulders stay tight. Your body does not know the workday ended.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Friend", text: "You look wound up." },
            { speaker: "You", text: "Slow and restless at once." },
            { speaker: "Friend", text: "Breathe. Almost home." },
            { speaker: "You", text: "Yeah." },
          ],
        },
      ],
      "How has your body felt — slow or restless?"
    ),
    makeChapter(
      9,
      "Day 9 — Night Window",
      [
        {
          type: "narration",
          content:
            "Work is done. Hard thoughts still come. You feel scared. You remember you can call someone who cares.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Crisis resource", text: "Help is available. You are not alone." },
            { speaker: "Friend (text)", text: "I'm awake. Call anytime." },
            { speaker: "You", text: "Thank you. I might need that." },
            { speaker: "Friend", text: "Please reach out. You matter." },
          ],
        },
        {
          type: "memory",
          content: "You think of people beyond your job. Of help lines. Of mornings that can still come.",
        },
      ],
      "These thoughts can be scary. Have you had thoughts of hurting yourself?"
    ),
  ],
};
