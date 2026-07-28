import type { StoryDefinition } from "@/lib/story-engine/types";
import { makeChapter } from "./helpers";

/** Professional — office desk / laptop work */
export const deskHoursStory: StoryDefinition = {
  key: "desk-hours",
  title: "Desk Hours",
  description: "Long days at your desk. Emails and deadlines ask how you really feel.",
  chapters: [
    makeChapter(
      1,
      "Day 1 — Inbox",
      [
        {
          type: "narration",
          content:
            "Monday inbox is full. Your chair faces the screen. You used to like solving tasks. Today they feel dull.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Coworker (chat)", text: "Coffee break at 11?" },
            { speaker: "You", text: "Not sure yet." },
            { speaker: "Coworker", text: "No pressure. Join if you want." },
            { speaker: "You", text: "Maybe." },
          ],
        },
        {
          type: "memory",
          content: "Last year small wins felt good. Team jokes felt light. Interest feels thin now.",
        },
      ],
      "At your desk, do you still enjoy work like before?"
    ),
    makeChapter(
      2,
      "Day 2 — Status Call",
      [
        {
          type: "dialogue",
          lines: [
            { speaker: "Manager", text: "Any blockers this week?" },
            { speaker: "You", text: "I'm managing. Just quiet today." },
            { speaker: "Manager", text: "You seem a bit down." },
            { speaker: "You", text: "A little. I'll push through." },
          ],
        },
        {
          type: "tension",
          content: "The call ends. Your screen glows. A sad feeling stays after the mute button.",
        },
        {
          type: "narration",
          content: "You open a spreadsheet. Numbers blur. You force a small nod to yourself and keep going.",
        },
      ],
      "During the workday, how often do you feel down?"
    ),
    makeChapter(
      3,
      "Day 3 — Late Slack",
      [
        {
          type: "discovery",
          content:
            "A message arrives at 11 p.m. Sleep will not come. Or you oversleep and rush the morning login.",
        },
        {
          type: "narration",
          content: "Your bedroom still smells like laptop heat. Rest and work feel mixed together.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Partner / roommate", text: "Still online?" },
            { speaker: "You", text: "One more reply." },
            { speaker: "Partner / roommate", text: "Sleep matters too." },
            { speaker: "You", text: "I know. Hard to switch off." },
          ],
        },
      ],
      "With late work nights, how is your sleep?"
    ),
    makeChapter(
      4,
      "Day 4 — Afternoon Slump",
      [
        {
          type: "narration",
          content:
            "The clock says 3 p.m. Your shoulders drop. A short email feels like a long climb.",
        },
        {
          type: "tension",
          content: "Coffee is gone. Energy is gone too. Your hands rest on the keyboard without typing.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Coworker", text: "You look wiped." },
            { speaker: "You", text: "Low energy today." },
            { speaker: "Coworker", text: "Take five. Stretch." },
            { speaker: "You", text: "Yeah. I should." },
          ],
        },
      ],
      "Through desk hours, how is your energy?"
    ),
    makeChapter(
      5,
      "Day 5 — Desk Lunch",
      [
        {
          type: "dialogue",
          lines: [
            { speaker: "Coworker", text: "Eating at your desk again?" },
            { speaker: "You", text: "Skipped breakfast. Not hungry now." },
            { speaker: "Coworker", text: "Or vending snacks later?" },
            { speaker: "You", text: "Probably. Eating is messy this week." },
          ],
        },
        {
          type: "narration",
          content: "Your lunch box stays closed. Or you finish chips without noticing. Food feels off.",
        },
        {
          type: "reflection",
          content: "Busy workdays change how you eat. Appetite does not stay steady.",
        },
      ],
      "On workdays, how has your eating been?"
    ),
    makeChapter(
      6,
      "Day 6 — Review Notes",
      [
        {
          type: "memory",
          content:
            "Feedback lands in your inbox. One hard line sticks. A voice says you are failing the team.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "You (to self)", text: "I should be better." },
            { speaker: "Mentor", text: "One review is not your whole worth." },
            { speaker: "You", text: "It feels like it is." },
            { speaker: "Mentor", text: "You're learning. That is allowed." },
          ],
        },
        {
          type: "tension",
          content: "Shame sits under the desk light. You feel you have let people down.",
        },
      ],
      "After feedback, how do you feel about yourself?"
    ),
    makeChapter(
      7,
      "Day 7 — Deep Work",
      [
        {
          type: "narration",
          content:
            "You open a report. You read the title twice. Tabs multiply. Focus will not stay on one task.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Coworker", text: "Need a quiet hour?" },
            { speaker: "You", text: "Yes. I keep drifting." },
            { speaker: "Coworker", text: "I'll hold chat. You focus." },
            { speaker: "You", text: "Thanks." },
          ],
        },
        {
          type: "discovery",
          content: "A short brief feels long. Concentration is harder than last month.",
        },
      ],
      "At your screen, how hard is it to focus?"
    ),
    makeChapter(
      8,
      "Day 8 — Standing Desk",
      [
        {
          type: "tension",
          content:
            "You stand, then sit, then stand. Or you stay still so long your body feels slow and heavy.",
        },
        {
          type: "narration",
          content: "Your foot taps under the desk. Meetings notice. Rest inside your body feels far.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Coworker", text: "Restless day?" },
            { speaker: "You", text: "My body won't settle." },
            { speaker: "Coworker", text: "Walk to the window with me." },
            { speaker: "You", text: "Okay." },
          ],
        },
      ],
      "How has your body felt — slow or restless?"
    ),
    makeChapter(
      9,
      "Day 9 — After Hours",
      [
        {
          type: "narration",
          content:
            "The office is empty. Hard thoughts come. You feel scared. You remember HR support and people who care.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "EAP poster", text: "Help is confidential. Reach out." },
            { speaker: "Friend (text)", text: "Call me if work nights get dark." },
            { speaker: "You", text: "Thank you. I might." },
            { speaker: "Friend", text: "Please do. You matter more than any deadline." },
          ],
        },
        {
          type: "memory",
          content: "You think of trusted friends. Of help lines. Of care beyond the job title.",
        },
      ],
      "These thoughts can be scary. Have you had thoughts of hurting yourself?"
    ),
  ],
};
