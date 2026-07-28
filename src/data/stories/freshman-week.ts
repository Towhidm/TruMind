import type { StoryDefinition } from "@/lib/story-engine/types";
import { makeChapter } from "./helpers";

/** University — new student / campus start */
export const freshmanWeekStory: StoryDefinition = {
  key: "freshman-week",
  title: "Freshman Week",
  description: "Your first weeks at university. New halls and new faces ask how you feel.",
  chapters: [
    makeChapter(
      1,
      "Day 1 — Campus Tour",
      [
        {
          type: "narration",
          content:
            "Orientation maps fill your hands. Clubs call out. You used to love new starts. Today the noise feels flat.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Guide", text: "Join us for the welcome game?" },
            { speaker: "You", text: "Maybe later." },
            { speaker: "Guide", text: "Free snacks after. Easy fun." },
            { speaker: "You", text: "I'll think about it." },
          ],
        },
        {
          type: "memory",
          content: "Before university, new days felt bright. Now interest feels thin even in a crowded yard.",
        },
      ],
      "Around campus events, do you still enjoy things like before?"
    ),
    makeChapter(
      2,
      "Day 2 — New Hall",
      [
        {
          type: "dialogue",
          lines: [
            { speaker: "Parent (call)", text: "How is the new place?" },
            { speaker: "You", text: "It's fine. I'm a bit quiet." },
            { speaker: "Parent", text: "You sound down." },
            { speaker: "You", text: "Maybe a little. It's a lot." },
          ],
        },
        {
          type: "tension",
          content: "The new building feels big. Homesickness sits with you in the stairwell.",
        },
        {
          type: "narration",
          content: "You wave at strangers. You smile small. Inside, the day feels heavy.",
        },
      ],
      "In your first weeks, how often do you feel down?"
    ),
    makeChapter(
      3,
      "Day 3 — Strange Bed",
      [
        {
          type: "discovery",
          content:
            "The mattress is new. Sleep is not. You wake early. Or you sleep through your first class alarm.",
        },
        {
          type: "narration",
          content: "Night sounds are different here. Your mind stays loud when the hall goes quiet.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Neighbor", text: "Hard to sleep in a new place?" },
            { speaker: "You", text: "Yes. My body is confused." },
            { speaker: "Neighbor", text: "It gets easier. Hang in there." },
            { speaker: "You", text: "Hope so." },
          ],
        },
      ],
      "Away from home, how is your sleep?"
    ),
    makeChapter(
      4,
      "Day 4 — Long Walk",
      [
        {
          type: "narration",
          content:
            "The campus map says ten minutes. It feels like thirty. Your bag pulls your shoulder down.",
        },
        {
          type: "tension",
          content: "You sit on a bench between buildings. Energy feels low for a young morning.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Senior student", text: "Lost?" },
            { speaker: "You", text: "A bit. And tired." },
            { speaker: "Senior student", text: "Building C is that way. Rest if you need." },
            { speaker: "You", text: "Thanks." },
          ],
        },
      ],
      "Walking campus, how is your energy?"
    ),
    makeChapter(
      5,
      "Day 5 — Dining Hall",
      [
        {
          type: "dialogue",
          lines: [
            { speaker: "New friend", text: "The food line is long. Worth it?" },
            { speaker: "You", text: "I skipped breakfast. Now I'm not sure." },
            { speaker: "New friend", text: "Or you grab too many snacks later?" },
            { speaker: "You", text: "Both, some days." },
          ],
        },
        {
          type: "narration",
          content: "Trays clatter. You pick rice and leave half. Or you eat fast without tasting.",
        },
        {
          type: "reflection",
          content: "New food, new schedule. Appetite does not follow a clear rule.",
        },
      ],
      "In the dining hall, how has your eating been?"
    ),
    makeChapter(
      6,
      "Day 6 — Class Intro",
      [
        {
          type: "memory",
          content:
            "You remember high school praise. Here, everyone seems ahead. A hard voice says you do not belong.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "You (to self)", text: "Maybe I chose wrong." },
            { speaker: "Mentor", text: "First weeks fool everyone." },
            { speaker: "You", text: "I feel behind already." },
            { speaker: "Mentor", text: "Feeling new is not failure." },
          ],
        },
        {
          type: "tension",
          content: "Shame sits in the lecture hall. You feel you have let your family down.",
        },
      ],
      "As a new student, how do you feel about yourself?"
    ),
    makeChapter(
      7,
      "Day 7 — Syllabus",
      [
        {
          type: "narration",
          content:
            "The syllabus is long. You read the first page twice. Dates blur. Focus will not hold.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Classmate", text: "Want to form a study chat?" },
            { speaker: "You", text: "Yes. I keep losing focus." },
            { speaker: "Classmate", text: "Same. We'll help each other." },
            { speaker: "You", text: "That would help." },
          ],
        },
        {
          type: "discovery",
          content: "Your highlighter stops. Even a short video lecture feels hard to follow.",
        },
      ],
      "In early classes, how hard is it to focus?"
    ),
    makeChapter(
      8,
      "Day 8 — Quad",
      [
        {
          type: "tension",
          content:
            "You cross the quad. Your steps feel slow. Or you walk too fast because stillness feels worse.",
        },
        {
          type: "narration",
          content: "Other first-years play games. You sit, then stand, then sit again. Your body feels odd.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Friend", text: "You seem restless." },
            { speaker: "You", text: "My body won't settle." },
            { speaker: "Friend", text: "Want water and a slow walk?" },
            { speaker: "You", text: "Okay." },
          ],
        },
      ],
      "How has your body felt — slow or restless?"
    ),
    makeChapter(
      9,
      "Day 9 — Support Booth",
      [
        {
          type: "narration",
          content:
            "Hard thoughts visit at night in a new city. You feel scared. Orientation posters say help is here.",
        },
        {
          type: "dialogue",
          lines: [
            { speaker: "Support booth", text: "Talk to us anytime. You matter." },
            { speaker: "Friend (text)", text: "I'm here. Call if nights get hard." },
            { speaker: "You", text: "Thank you. I might." },
            { speaker: "Friend", text: "Please do." },
          ],
        },
        {
          type: "memory",
          content: "You think of home. Of campus counselors. Of people ready for hard first weeks.",
        },
      ],
      "These thoughts can be scary. Have you had thoughts of hurting yourself?"
    ),
  ],
};
