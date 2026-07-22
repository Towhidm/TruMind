import type { StoryDefinition } from "@/lib/story-engine/types";
import { phqChoices } from "./helpers";

export const sevenDaysStory: StoryDefinition = {
  key: "seven-days",
  title: "Seven Days",
  description:
    "You spend one week at home. Each day asks how you feel.",
  chapters: [
    {
      id: 1,
      title: "Day 1 — Morning",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Monday morning. Your alarm rings. You stay in bed. Outside, birds sing. You used to like mornings. Today you do not feel good.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Maya (text)", text: "Want to get coffee later?" },
            { speaker: "You", text: "..." },
            { speaker: "Maya", text: "Or we can watch a movie. Your pick." },
            { speaker: "You", text: "Maybe. I will think about it." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember last month. You cooked with Maya. You laughed a lot. You liked small fun things then. Now those things feel hard.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Maya waits for your answer. Do you still enjoy things like before?",
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
      title: "Day 2 — Rain",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Mom (call)", text: "Hi. How are you today?" },
            { speaker: "You", text: "I'm okay." },
            { speaker: "Mom", text: "You sound quiet. Are you sad?" },
            { speaker: "You", text: "I don't know. Maybe a little." },
            { speaker: "Mom", text: "I love you. Call me anytime." },
          ],
        },
        {
          id: "tension",
          type: "tension",
          content:
            "Rain hits the window. The house feels quiet. A sad feeling sits with you. It has no clear reason. You wish it would go away.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You make tea. You do not drink it. You sit and watch the rain. A song plays next door. It sounds far away.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The rain keeps falling. How often do you feel down?",
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
      title: "Day 3 — Night",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "It is 2 AM. You are awake again. You check the clock. Sleep will not come. Your pillow feels hot.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You try soft music. You try closing your eyes. Your body is tired. Your mind stays busy. Morning feels far away.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "If I sleep now, I get three hours." },
            { speaker: "You", text: "But I still cannot sleep." },
            { speaker: "You (thought)", text: "Tomorrow will be hard." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Night is long. How has your sleep been?",
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
      title: "Day 4 — Tired",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "Thursday. You have three small jobs. You stare at the first one. Your arms feel heavy. Even walking to the kitchen feels hard.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Boss (message)", text: "Can you finish the list today?" },
            { speaker: "You", text: "I will try." },
            { speaker: "Boss", text: "You okay? You seem slow this week." },
            { speaker: "You", text: "Just tired." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You used to clean the house fast. You used to walk after lunch. Now you sit more. Energy feels low.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The list still waits. How tired do you feel?",
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
      title: "Day 5 — Food",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Friday dinner time. The fridge has food. You open it. You close it. Nothing looks good. Your stomach feels empty, then full.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Dad (text)", text: "Did you eat today?" },
            { speaker: "You", text: "A little." },
            { speaker: "Dad", text: "Please eat a real meal. I worry." },
            { speaker: "You", text: "Okay. I will try." },
          ],
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "You find old snacks in a drawer. Some days you eat too fast. Some days you skip meals. Food feels strange this week.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Dinner waits on the counter. How is your eating?",
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
      title: "Day 6 — Mirror",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "Saturday. You look in the mirror. You think of old mistakes. Small ones. Big ones. You feel bad about yourself.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Friend (call)", text: "You did your best. Really." },
            { speaker: "You", text: "It still feels like my fault." },
            { speaker: "Friend", text: "You are not a bad person." },
            { speaker: "You", text: "Sometimes I feel like I am." },
          ],
        },
        {
          id: "tension",
          type: "tension",
          content:
            "You sit on the bed. Hard thoughts come back. You tell yourself to stop. The thoughts stay a little longer.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The mirror is quiet. How often do you feel bad about yourself?",
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
      title: "Day 7 — Focus",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Sunday. You try to read a short page. You read the same line twice. The words mix. You put the book down.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Sister (video)", text: "Did you watch that show I sent?" },
            { speaker: "You", text: "I started. I lost track." },
            { speaker: "Sister", text: "That's okay. Start again later." },
            { speaker: "You", text: "My head feels busy." },
          ],
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "You open your phone notes. Half are unfinished. You used to finish tasks. Focus feels harder now.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The book waits. How hard is it to focus?",
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
      title: "Day 8 — Body",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "You stand to get water. Your legs feel slow. Or your hands keep moving. Your body does not feel normal.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "People talk at a normal speed. You feel behind. Or you feel too fast inside. Sitting still is hard.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Neighbor", text: "You okay? You look restless." },
            { speaker: "You", text: "My body feels weird today." },
            { speaker: "Neighbor", text: "Want to sit outside for a bit?" },
            { speaker: "You", text: "Maybe in a minute." },
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
      title: "Day 9 — Hard Thoughts",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Evening. Dark thoughts come for a moment. You feel scared by them. You know you can ask for help.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Hotline note", text: "If you feel unsafe, please talk to someone." },
            { speaker: "Friend (text)", text: "I'm here. You can tell me anything." },
            { speaker: "You", text: "Thank you. That helps." },
            { speaker: "Friend", text: "You matter. Call me anytime." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember a safe person. A friend. A family member. A doctor. You are not alone with hard thoughts.",
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
