import type { StoryDefinition } from "@/lib/story-engine/types";
import { makeChapter } from "./helpers";

/** Professional — meetings / open office */
export const openFloorStory: StoryDefinition = {
  key: "open-floor",
  title: "Open Floor",
  description: "Open office days. Meetings and noise ask how you feel under the bright lights.",
  chapters: [
    makeChapter(
      1,
      "Day 1 — Hot Desk",
      [
        {
          type: "narration",
          content:
            "The open floor buzzes. Keyboards click. You find a seat. Team games used to feel fun. Today they feel loud and empty.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Teammate", text: "Friday social after work?" },
            { speaker: "You", text: "I'll see." },
            { speaker: "Teammate", text: "Pizza and easy talk." },
            { speaker: "You", text: "Maybe next time." },
          ],
        },
        {
          type: "memory",
          content: "You remember when office jokes felt light. Interest in after-work plans feels smaller now.",
        },
      ],
      "On the open floor, do you still enjoy work socials like before?"
    ),
    makeChapter(
      2,
      "Day 2 — Standup",
      [
        {
          type: "dialogue",
          lines: [
            { speaker: "Lead", text: "Quick update from you?" },
            { speaker: "You", text: "On track. Nothing big." },
            { speaker: "Lead", text: "You seem quieter than usual." },
            { speaker: "You", text: "Just a low day." },
          ],
        },
        {
          type: "tension",
          content: "Eyes turn to you for a second. A sad feeling sits under the bright ceiling lights.",
        },
        {
          type: "narration",
          content: "You nod along. You write one note. The circle moves on. You still feel down.",
        },
      ],
      "Between meetings, how often do you feel down?"
    ),
    makeChapter(
      3,
      "Day 3 — Late Train Home",
      [
        {
          type: "discovery",
          content:
            "You leave late. Sleep is short. Or you sleep too much on weekends and Monday still hurts.",
        },
        {
          type: "narration",
          content: "City lights pass the window. Your mind replays meetings. Rest feels far.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Friend (text)", text: "Home yet?" },
            { speaker: "You", text: "On the way. Can't switch off." },
            { speaker: "Friend", text: "Try to sleep soon." },
            { speaker: "You", text: "I'll try." },
          ],
        },
      ],
      "After long office days, how is your sleep?"
    ),
    makeChapter(
      4,
      "Day 4 — Back-to-Back",
      [
        {
          type: "narration",
          content:
            "Three meetings in a row. Your voice feels thin. Walking to the next room feels like a hill.",
        },
        {
          type: "tension",
          content: "You refill water. Energy does not return. The open floor still hums.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Teammate", text: "Need a break slot?" },
            { speaker: "You", text: "Yes. I'm drained." },
            { speaker: "Teammate", text: "I'll cover the next ping." },
            { speaker: "You", text: "Thank you." },
          ],
        },
      ],
      "Through meeting days, how is your energy?"
    ),
    makeChapter(
      5,
      "Day 5 — Pantry",
      [
        {
          type: "dialogue",
          lines: [
            { speaker: "Coworker", text: "There's fruit in the pantry." },
            { speaker: "You", text: "I forgot lunch again." },
            { speaker: "Coworker", text: "Then cookies at 4?" },
            { speaker: "You", text: "Sometimes. Eating is uneven here." },
          ],
        },
        {
          type: "narration",
          content: "You hold an apple and put it back. Or you finish snacks by the coffee machine without thinking.",
        },
        {
          type: "reflection",
          content: "Office food days bend your appetite. Hunger does not follow a clean clock.",
        },
      ],
      "At the office, how has your eating been?"
    ),
    makeChapter(
      6,
      "Day 6 — Glass Room",
      [
        {
          type: "memory",
          content:
            "A tough meeting ends. You replay your words. A hard voice says you looked weak in front of everyone.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "You (to self)", text: "I messed that up." },
            { speaker: "Ally", text: "You prepared. One hard room is not you." },
            { speaker: "You", text: "It feels like I failed the team." },
            { speaker: "Ally", text: "You're still valuable here." },
          ],
        },
        {
          type: "tension",
          content: "Shame follows you past the glass walls. You feel small on the open floor.",
        },
      ],
      "After hard meetings, how do you feel about yourself?"
    ),
    makeChapter(
      7,
      "Day 7 — Shared Screens",
      [
        {
          type: "narration",
          content:
            "You share your screen. Someone asks a simple question. Your mind goes blank for a second too long.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Colleague", text: "Want me to take notes?" },
            { speaker: "You", text: "Please. Focus is slipping." },
            { speaker: "Colleague", text: "Happens. We got you." },
            { speaker: "You", text: "Thanks." },
          ],
        },
        {
          type: "discovery",
          content: "Chat pings pull your eyes away. Holding one thought feels harder than before.",
        },
      ],
      "In the noise of the floor, how hard is it to focus?"
    ),
    makeChapter(
      8,
      "Day 8 — Elevator",
      [
        {
          type: "tension",
          content:
            "You wait for the elevator. Your shoulders droop. Or your hands shake from too much coffee and rush.",
        },
        {
          type: "narration",
          content: "People notice you shifting from foot to foot. Sitting through the next hour feels hard.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Coworker", text: "You okay?" },
            { speaker: "You", text: "Restless. Or drained. Both." },
            { speaker: "Coworker", text: "Step outside for two minutes." },
            { speaker: "You", text: "Good idea." },
          ],
        },
      ],
      "How has your body felt — slow or restless?"
    ),
    makeChapter(
      9,
      "Day 9 — Quiet Corner",
      [
        {
          type: "narration",
          content:
            "After everyone leaves, hard thoughts arrive. You feel scared. You remember workplace support and friends.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Support line card", text: "Talk to someone. Confidential help." },
            { speaker: "Friend (text)", text: "I'm free. Call if you need." },
            { speaker: "You", text: "Thank you. I might call." },
            { speaker: "Friend", text: "Please. You are not alone." },
          ],
        },
        {
          type: "memory",
          content: "You think of kind coworkers. Of help beyond the badge. Of care that outlasts any job.",
        },
      ],
      "These thoughts can be scary. Have you had thoughts of hurting yourself?"
    ),
  ],
};
