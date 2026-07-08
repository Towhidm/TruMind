import type { StoryDefinition } from "@/lib/story-engine/types";
import { phqChoices } from "./helpers";

export const sevenDaysStory: StoryDefinition = {
  key: "seven-days",
  title: "Seven Days",
  description:
    "A quiet week in your life unfolds day by day. Each morning brings something new — and something you have been carrying in silence.",
  chapters: [
    {
      id: 1,
      title: "Day One — The Empty Morning",
      scenes: [
        {
          id: "intro",
          type: "narration",
          content:
            "Monday. Your alarm goes off at seven. You used to jump out of bed and make coffee while music played in the kitchen. Last month you painted the mugs yourself. You were proud of them. Today you lie still and watch dust move in a strip of sunlight. The mugs sit in the cupboard. You have not touched them in days. Outside, a car door slams. Someone laughs. You pull the blanket higher.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            {
              speaker: "Maya (text)",
              text: "Hey! That new café on Maple finally opened. Want to go after work? They have live music on Mondays.",
            },
            { speaker: "You", text: "..." },
            {
              speaker: "Maya",
              text: "No rush. I just thought of you when I walked past. Remember when we danced in the rain outside that place?",
            },
            { speaker: "You", text: "Yeah. That was fun." },
            { speaker: "Maya", text: "Still is, if you want it to be." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember last spring. You rode your bike to the river every Saturday. You brought a sketchbook. You drew trees and ducks and the old bridge. You felt light then — like the world had room for you in it. You try to feel that way now, thinking about music, walks, cooking, friends. Most of those things wait for you. But when you picture doing them, something in you goes quiet.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Maya's message glows on your screen. The week is just starting. What do you do with the things you used to love?",
          choices: phqChoices(
            "You text her back and pick a time — you still want those moments",
            "You say maybe later; some days they sound good, some days they don't",
            "You leave the phone face-down; most days nothing sounds worth the effort",
            "You delete the thread in your mind before reading it again — joy feels out of reach"
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Day Two — The Gray Sky",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Mom (call)", text: "Hi, sweetheart. How's your week going?" },
            { speaker: "You", text: "Fine. Busy." },
            { speaker: "Mom", text: "You sound far away. Are you eating okay?" },
            { speaker: "You", text: "I'm fine, Mom. Really." },
            {
              speaker: "Mom",
              text: "Okay. I love you. The door is always open here, you know that.",
            },
          ],
        },
        {
          id: "tension",
          type: "tension",
          content:
            "After you hang up, the apartment feels too big. Rain streaks the window. You have felt this heaviness before — not just today, but creeping in across many mornings. A sadness that does not need a reason. It sits on your chest like a stone. You wonder if it will lift. You wonder if anyone can see it on you.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You make tea you do not drink. You sit on the couch and stare at the gray sky until the light changes. A song you used to love plays from a neighbor's apartment. It sounds beautiful and far away, like it belongs to someone else's life. You think about calling Mom back. You do not.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The rain keeps falling. How deep has this gray feeling gone?",
          choices: phqChoices(
            "It passes — today is just a slow day",
            "It shows up now and then, like weather that moves through",
            "It has been here more days than not — hard to remember the last clear morning",
            "It feels like the sky has been gray for as long as you can recall"
          ),
        },
      ],
    },
    {
      id: 3,
      title: "Day Three — Restless Night",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "Wednesday, 2:14 AM. You are awake again. You count the nights this week you slept through — one, maybe two. Some nights you lie awake for hours. Other nights you crash at dawn and miss half the day. Your pillow is warm on one side and cold on the other from turning over and over.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You tried everything. Herbal tea. A podcast. Breathing slowly. You even moved to the couch. Your body is exhausted but your mind keeps running — lists, old conversations, things you should have said. The clock ticks loud in the quiet. You think about tomorrow's meetings. You think about nothing. Neither helps.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "If I sleep now, I get three hours. That is something." },
            { speaker: "You", text: "But the ceiling keeps staring back." },
            { speaker: "Clock", text: "Tick. Tick. Tick." },
            { speaker: "You (thought)", text: "Tomorrow will be worse if I don't sleep. Or maybe it will be the same." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Dawn is still hours away. What have your nights been like lately?",
          choices: phqChoices(
            "You sleep fine most nights — tonight is the exception",
            "A few nights were rough, but you usually rest okay",
            "More than half your nights are broken — too little or too much sleep",
            "Night after night you fight for rest and rarely win"
          ),
        },
      ],
    },
    {
      id: 4,
      title: "Day Four — Running on Empty",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "Thursday afternoon. Your to-do list has three items. You have been staring at the first one for forty minutes. Your legs feel heavy walking to the kitchen. You slept — sort of — but you wake up tired every day now. It is not the good kind of tired after hard work. It is empty, like a phone at one percent that never charges.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Jordan (coworker)", text: "You look wiped. Want me to cover the three o'clock call?" },
            { speaker: "You", text: "No, I'll manage." },
            { speaker: "Jordan", text: "You sure? You've been quiet all week." },
            { speaker: "You", text: "Just need more coffee." },
            { speaker: "Jordan", text: "Coffee isn't fixing it, is it?" },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember a hike last fall. Your legs burned on the uphill and you loved it. You reached the top and shouted into the wind. You had energy to spare. Now you walk to the mailbox and feel done. You sit back down. The afternoon stretches ahead like a long hallway with no doors.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Jordan walks away, unconvinced. How empty has your tank been?",
          choices: phqChoices(
            "Your energy feels normal — today is just a slump",
            "Some days you drag; other days you're fine",
            "Most days you run on fumes no matter how much you rest",
            "Nearly every day you feel drained before you even start"
          ),
        },
      ],
    },
    {
      id: 5,
      title: "Day Five — The Kitchen Light",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Friday evening. You stand in the kitchen under the bright light. The fridge hums. Inside: half a carton of eggs, condiments, takeout boxes from Tuesday. You have not cooked a real meal in days. Last night you ate cereal for dinner. The night before, you picked at crackers and went to bed hungry — or maybe you just forgot to eat. Your stomach feels strange. Not quite hungry. Not quite full.",
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "You open a drawer and find a recipe card your aunt wrote — her famous soup. You used to make it on cold nights. You notice your jeans fit differently. You are not sure if you have been eating less or more. Some days food has no taste. Other days you stand here and eat straight from the container without tasting anything at all.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Neighbor (through wall)", text: "Smells amazing over here! What are you making?" },
            { speaker: "You", text: "Just... thinking about it." },
            { speaker: "Neighbor", text: "Well, save me a bowl if you do!" },
            { speaker: "You (thought)", text: "I don't know if I'm hungry. I don't know if it matters." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The recipe card is still in your hand. What has eating been like for you?",
          choices: phqChoices(
            "Your appetite is steady — meals feel normal",
            "Some days you eat fine; other days you skip or snack odd hours",
            "More often than not, food feels wrong — too much or too little",
            "Nearly every day your eating feels off, and you stop noticing when"
          ),
        },
      ],
    },
    {
      id: 6,
      title: "Day Six — The Mirror",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "Saturday morning. You pass the bathroom mirror and slow down. Last year you gave a toast at your friend's wedding. People said you were kind, funny, brave. You believed them then. You try to hold that version of yourself in mind — the one who showed up, who tried, who cared.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "A voice in your head starts before you can stop it. It lists everything you did not do this week. Every message you left on read. Every promise you broke to yourself. It says you are letting people down. It says you are not enough. The voice sounds like yours, but crueler.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You grip the sink. Your reflection looks tired — not just sleepy, but worn down from the inside. You think about apologizing to someone, but you are not sure what for. You think about staying in this bathroom until the voice goes quiet. It does not.",
        },
        {
          id: "choice",
          type: "choice",
          content: "You splash water on your face. The voice is still there. How often do you feel this way about yourself?",
          choices: phqChoices(
            "You don't — today is a hard moment, not a pattern",
            "Sometimes, on bad days, the voice gets loud",
            "More than half the time you feel like you are failing someone",
            "Nearly every day you feel like a disappointment — to yourself or others"
          ),
        },
      ],
    },
    {
      id: 7,
      title: "Day Seven — Scattered Pages",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "One page. Just one page." },
            { speaker: "Phone", text: "Buzz." },
            { speaker: "You", text: "Where was I? I already forgot." },
            { speaker: "You (thought)", text: "Focus. The words are right there." },
            { speaker: "You", text: "I read the same line four times. It won't stick." },
          ],
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "Sunday afternoon. You pick up a book you have read three times. The same paragraph blurs. You tried a show earlier — you rewound the same scene twice. At breakfast, someone asked you a question and you had to ask them to repeat it. Your mind feels like a room with too many doors — you walk in and forget why.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "You set the book down. A panic flickers — what if you cannot think clearly anymore? What if this is just how it is now? You have work on Monday. Emails. Decisions. You are not sure you can hold it all in your head.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The book lies open on your lap. How hard has it been to focus?",
          choices: phqChoices(
            "Your mind feels sharp — today is scattered, not every day",
            "You lose focus sometimes, but you can usually pull it back",
            "More than half the time your thoughts slip away mid-task",
            "Nearly every day feels foggy — reading, talking, working all blur together"
          ),
        },
      ],
    },
    {
      id: 8,
      title: "The Slow Hour",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Sunday evening. Your friend came over an hour ago. You are on the couch together. At some point they stopped talking and just watched you. You realize you have been staring at one spot on the rug — or maybe you have been up and down three times without noticing. Your body and your mind do not seem to agree on what speed to move.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "Some days your words come out slow, like wading through water. Other days your hands will not stay still — you pick at your nails, bounce your leg, pace the room. People notice. They ask if you are okay. You say you are fine. You are not sure which feeling is worse.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Friend", text: "You've been really quiet. Or really restless. I can't tell which." },
            { speaker: "You", text: "Sorry. I'm just tired." },
            { speaker: "Friend", text: "You've barely moved in an hour. Last week you couldn't sit still at all." },
            { speaker: "You", text: "It's been a weird week." },
            { speaker: "Friend", text: "Yeah. I can see that." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Your friend stays, but the room feels heavy. How has your body been moving through the days?",
          choices: phqChoices(
            "You feel like yourself — normal pace, normal rest",
            "Some days slow, some days restless — but not most days",
            "More than half the time you feel either slowed down or unable to sit still",
            "Nearly every day people would notice — you drag or you cannot stop moving"
          ),
        },
      ],
    },
    {
      id: 9,
      title: "The Last Door",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "Night falls. Your friend has gone home. The house is quiet — too quiet. A thought crosses your mind. One you have been pushing away all week. It sits in the room with you. It does not shout. It whispers. You do not have to face it alone, but right now you are alone.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "What if things don't get better?" },
            { speaker: "You", text: "..." },
            {
              speaker: "A gentle voice",
              text: "It's okay to be honest here. This is a safe space. Your safety matters.",
            },
            { speaker: "You (thought)", text: "I don't have to answer. But I could." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You think of the helpline number you saved months ago. You think of Maya's laugh in the rain. You think of your mom's voice saying the door is open. None of these fix tonight. But they are real. So is the pain. You owe yourself the truth — and you owe yourself care.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The week ends here. Be honest with yourself — have thoughts of hurting yourself or not wanting to be here been part of your days?",
          choices: phqChoices(
            "No — those thoughts have not been with you",
            "They have crossed your mind on a few hard days",
            "They have been there more than half the days this week felt unbearable",
            "They have been with you nearly every day — hard to escape"
          ),
        },
      ],
    },
  ],
};
