import type { StoryDefinition } from "@/lib/story-engine/types";
import { makeChapter } from "./helpers";

/** University — exam and library stress */
export const lateLibraryStory: StoryDefinition = {
  key: "late-library",
  title: "Late Library",
  description: "Exam week at university. Long nights in the library ask how you really feel.",
  chapters: [
    makeChapter(
      1,
      "Day 1 — Study Desk",
      [
        {
          type: "narration",
          content:
            "The library is quiet. Lamps glow on long tables. You open your books. You used to like study nights. Tonight they feel empty.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Lab partner (text)", text: "Study group at 8?" },
            { speaker: "You", text: "Maybe. I'm not sure." },
            { speaker: "Lab partner", text: "Snacks on me. Come if you can." },
            { speaker: "You", text: "I'll think about it." },
          ],
        },
        {
          type: "memory",
          content:
            "Last semester you liked late coffee and easy laughs between chapters. Fun felt close. Now it feels far.",
        },
      ],
      "Your phone waits. Do you still enjoy small things like before?"
    ),
    makeChapter(
      2,
      "Day 2 — Exam Board",
      [
        {
          type: "dialogue",
          lines: [
            { speaker: "Friend", text: "You look quiet today." },
            { speaker: "You", text: "I'm okay. Just tired of exams." },
            { speaker: "Friend", text: "Want to walk outside?" },
            { speaker: "You", text: "Maybe later. I feel a bit down." },
          ],
        },
        {
          type: "tension",
          content:
            "The exam list hangs on the wall. Dates feel heavy. A sad feeling sits with you between the shelves.",
        },
        {
          type: "narration",
          content: "You stare at one page. Students pass by. You force a small smile and look down again.",
        },
      ],
      "Between exams, how often do you feel down?"
    ),
    makeChapter(
      3,
      "Day 3 — Midnight",
      [
        {
          type: "discovery",
          content:
            "It is past midnight. Your eyes burn. You sleep a little, then wake. Or you sleep too long and miss the morning.",
        },
        {
          type: "narration",
          content: "The library closes. You walk home in the dark. Your bed waits, but rest feels hard.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Roommate", text: "You're still awake?" },
            { speaker: "You", text: "My mind won't stop." },
            { speaker: "Roommate", text: "Try to rest a bit." },
            { speaker: "You", text: "I'll try." },
          ],
        },
      ],
      "Exam week is long. How is your sleep?"
    ),
    makeChapter(
      4,
      "Day 4 — Stairs",
      [
        {
          type: "narration",
          content:
            "You climb the library stairs. Your bag feels heavy. Your legs feel slow. A short walk feels like a long day.",
        },
        {
          type: "tension",
          content: "Coffee helps for an hour. Then the tired feeling returns. Energy feels low.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Librarian", text: "Need help finding a book?" },
            { speaker: "You", text: "No thanks. Just resting a second." },
            { speaker: "Librarian", text: "Take your time." },
            { speaker: "You", text: "Thank you." },
          ],
        },
      ],
      "After long study hours, how is your energy?"
    ),
    makeChapter(
      5,
      "Day 5 — Cafeteria",
      [
        {
          type: "dialogue",
          lines: [
            { speaker: "Friend", text: "You skipped lunch again?" },
            { speaker: "You", text: "I wasn't hungry. Then I ate too fast." },
            { speaker: "Friend", text: "Your body needs fuel for exams." },
            { speaker: "You", text: "I know. Eating feels weird lately." },
          ],
        },
        {
          type: "narration",
          content:
            "The tray looks full. Your stomach feels empty or too full. Food is not simple this week.",
        },
        {
          type: "reflection",
          content: "You notice the pattern. Some days no appetite. Some days snacks without thinking.",
        },
      ],
      "During exam week, how has your eating been?"
    ),
    makeChapter(
      6,
      "Day 6 — Grade Talk",
      [
        {
          type: "memory",
          content:
            "You think of home. Of fees paid. Of people who believe in you. A hard voice says you are failing them.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "You (to self)", text: "I should be better than this." },
            { speaker: "Friend", text: "One hard week does not define you." },
            { speaker: "You", text: "It feels like it does." },
            { speaker: "Friend", text: "You're trying. That counts." },
          ],
        },
        {
          type: "tension",
          content: "Shame sits on your chest. You feel small next to the tall shelves.",
        },
      ],
      "After hard study days, how do you feel about yourself?"
    ),
    makeChapter(
      7,
      "Day 7 — Reading Room",
      [
        {
          type: "narration",
          content:
            "You read one line. Then again. The words slide away. A simple article feels like a wall.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Classmate", text: "Want to share notes?" },
            { speaker: "You", text: "Yes. I lost focus again." },
            { speaker: "Classmate", text: "Same. Exam brain is real." },
            { speaker: "You", text: "Thanks. My head feels full." },
          ],
        },
        {
          type: "discovery",
          content: "Your highlighter stops mid-page. Focus feels harder than last month.",
        },
      ],
      "In the quiet reading room, how hard is it to focus?"
    ),
    makeChapter(
      8,
      "Day 8 — Between Stacks",
      [
        {
          type: "tension",
          content:
            "You walk between book stacks. Your steps feel slow. Or your foot taps and will not stop.",
        },
        {
          type: "narration",
          content: "Sitting still is hard. Standing still is hard too. Your body feels odd today.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Friend", text: "You seem restless." },
            { speaker: "You", text: "My body won't settle." },
            { speaker: "Friend", text: "Let's stretch outside." },
            { speaker: "You", text: "Okay. For a minute." },
          ],
        },
      ],
      "How has your body felt — slow or restless?"
    ),
    makeChapter(
      9,
      "Day 9 — Help Desk",
      [
        {
          type: "narration",
          content:
            "Hard thoughts come after midnight. You feel scared. You remember campus help is near. You can tell someone.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Counseling poster", text: "Talk to us. You are not alone." },
            { speaker: "Friend (text)", text: "I'm awake. Call if you need me." },
            { speaker: "You", text: "Thank you. I might call." },
            { speaker: "Friend", text: "Please do. You matter." },
          ],
        },
        {
          type: "memory",
          content:
            "You think of a kind teacher. Of the help desk. Of people who care on hard nights.",
        },
      ],
      "These thoughts can be scary. Have you had thoughts of hurting yourself?"
    ),
  ],
};
