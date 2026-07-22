import type { StoryDefinition } from "@/lib/story-engine/types";
import { phqChoices } from "./helpers";

export const campusLightsStory: StoryDefinition = {
  key: "campus-lights",
  title: "Campus Lights",
  description:
    "You are a student at university. Campus life asks how you feel each day.",
  chapters: [
    {
      id: 1,
      title: "Day 1 — Class",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Monday on campus. Lights shine on the path. Friends laugh nearby. You used to like school days. Today feels dull.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Sam", text: "Club night tonight. Come with us?" },
            { speaker: "You", text: "I don't know yet." },
            { speaker: "Sam", text: "Free snacks. Easy music. No pressure." },
            { speaker: "You", text: "Maybe. Let me think." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember last term. You liked games, walks, and late talks. Fun felt easy then. Now fun feels far.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Sam waits. Do you still enjoy things like before?",
          choices: phqChoices(
            "I still enjoy them like before",
            "Some days yes, some days no",
            "Most days I don't enjoy them",
            "I almost never enjoy anything"
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Day 2 — Lunch",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Roommate", text: "You okay? You look down." },
            { speaker: "You", text: "I'm fine. Just quiet." },
            { speaker: "Roommate", text: "You can talk to me." },
            { speaker: "You", text: "Thanks. I feel a bit sad." },
          ],
        },
        {
          id: "tension",
          type: "tension",
          content:
            "The dining hall is loud. Your tray feels heavy. A sad feeling sits with you. You force a small smile.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You sit by the window. Students walk by. You feel alone in the crowd. The day feels long.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Lunch ends. How often do you feel down?",
          choices: phqChoices(
            "I almost never feel down",
            "I feel down some days",
            "I feel down most days",
            "I feel down nearly every day"
          ),
        },
      ],
    },
    {
      id: 3,
      title: "Day 3 — Dorm Night",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "Your dorm is dark. It is late. You check your phone. Sleep will not come. Class starts early.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You hear music from the hall. You close your eyes. You wake up, then wake up again. Morning comes too soon.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Roommate", text: "Did you sleep at all?" },
            { speaker: "You", text: "Not really." },
            { speaker: "Roommate", text: "Same here some weeks." },
            { speaker: "You", text: "My nights feel broken." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Another long night. How has your sleep been?",
          choices: phqChoices(
            "I sleep fine most nights",
            "Some nights I sleep badly",
            "Most nights I sleep badly",
            "I almost never sleep well"
          ),
        },
      ],
    },
    {
      id: 4,
      title: "Day 4 — Library",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "You open your laptop. One short paper waits. Your eyes feel heavy. Even typing feels hard.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Tutor", text: "Any questions on the homework?" },
            { speaker: "You", text: "I feel too tired to start." },
            { speaker: "Tutor", text: "Take a short break. Then try one page." },
            { speaker: "You", text: "Okay. I will try." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You used to study for hours. You walked across campus with energy. Now your body feels empty.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The paper waits. How tired do you feel?",
          choices: phqChoices(
            "I have normal energy",
            "I feel tired some days",
            "I feel tired most days",
            "I feel tired nearly every day"
          ),
        },
      ],
    },
    {
      id: 5,
      title: "Day 5 — Cafeteria",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Meal time again. Lines move slow. Pizza, rice, fruit. Nothing looks good. You take a small plate.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Mom (text)", text: "Are you eating well at school?" },
            { speaker: "You", text: "Kind of." },
            { speaker: "Mom", text: "Please eat breakfast too." },
            { speaker: "You", text: "I'll try tomorrow." },
          ],
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "Your snack drawer has old chips. Some days you skip lunch. Some days you eat too much late at night.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Your plate is half full. How is your eating?",
          choices: phqChoices(
            "I eat like I usually do",
            "My eating changed some days",
            "My eating is off most days",
            "Almost every day my eating is wrong"
          ),
        },
      ],
    },
    {
      id: 6,
      title: "Day 6 — Grades",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "You see an old test score. You feel small. You think, I should be better. Hard thoughts about yourself grow.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Advisor", text: "One grade does not define you." },
            { speaker: "You", text: "It still feels like I failed." },
            { speaker: "Advisor", text: "You are learning. That counts." },
            { speaker: "You", text: "I keep blaming myself." },
          ],
        },
        {
          id: "tension",
          type: "tension",
          content:
            "You walk across the quad. Friends wave. You smile back. Inside, you feel not good enough.",
        },
        {
          id: "choice",
          type: "choice",
          content: "How often do you feel bad about yourself?",
          choices: phqChoices(
            "I do not feel bad about myself",
            "I feel bad about myself some days",
            "I feel bad about myself most days",
            "I feel bad about myself nearly every day"
          ),
        },
      ],
    },
    {
      id: 7,
      title: "Day 7 — Lecture",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "The teacher talks. You open your notes. You write one line. Then you stop. The words do not stick.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Classmate", text: "Want my notes later?" },
            { speaker: "You", text: "Yes please. I lost focus." },
            { speaker: "Classmate", text: "Happens to me too." },
            { speaker: "You", text: "Thanks. My head feels full." },
          ],
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "Your phone has half-read emails. Your homework list is long. Focus feels harder than last month.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Class ends. How hard is it to focus?",
          choices: phqChoices(
            "I can focus fine",
            "Focus is hard some days",
            "Focus is hard most days",
            "I almost never can focus"
          ),
        },
      ],
    },
    {
      id: 8,
      title: "Day 8 — Walk",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "You walk to the bus stop. Your steps feel slow. Or your legs want to move too fast. Your body feels odd.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "Other students pass you. You feel behind. Sitting in class, your foot keeps tapping. Rest is hard.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Friend", text: "You seem restless today." },
            { speaker: "You", text: "My body won't settle." },
            { speaker: "Friend", text: "Want to sit on the bench?" },
            { speaker: "You", text: "Yeah. For a minute." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "How has your body felt — slow or restless?",
          choices: phqChoices(
            "My body feels normal",
            "Some days I feel slow or restless",
            "Most days I feel slow or restless",
            "I feel slow or restless nearly every day"
          ),
        },
      ],
    },
    {
      id: 9,
      title: "Day 9 — Quiet Talk",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Night on campus. Hard thoughts come. You feel scared. You remember help is near. You can tell someone.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Counselor poster", text: "Talk to us. You are not alone." },
            { speaker: "Friend (text)", text: "I'm awake. Call if you need me." },
            { speaker: "You", text: "Thank you. I might call." },
            { speaker: "Friend", text: "Please do. You matter." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You think of home. Of a kind teacher. Of the campus help desk. Safe people exist for hard days.",
        },
        {
          id: "choice",
          type: "choice",
          content: "These thoughts can be scary. Have you had thoughts of hurting yourself?",
          choices: phqChoices(
            "I have not had those thoughts",
            "I had those thoughts some days",
            "I had those thoughts most days",
            "I had those thoughts nearly every day"
          ),
        },
      ],
    },
  ],
};
