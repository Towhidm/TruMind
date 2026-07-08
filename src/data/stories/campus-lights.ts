import type { StoryDefinition } from "@/lib/story-engine/types";
import { phqChoices } from "./helpers";

export const campusLightsStory: StoryDefinition = {
  key: "campus-lights",
  title: "Campus Lights",
  description:
    "Your first semester away from home. The quad glows at night, friends call from every corner — and something inside you has gone quieter than the library after midnight.",
  chapters: [
    {
      id: 1,
      title: "Chapter One — Welcome Week",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Move-in day is chaos and color. Posters on every wall. A DJ on the lawn. You unpacked your guitar last night and told your roommate you'd play at the open mic. That was before classes started. Now it is Thursday and the guitar case has not opened. The campus fair is tonight — free food, club sign-ups, string lights between the oak trees. Everyone says you have to go.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Priya (roommate)", text: "The film club table has free popcorn. You love movies." },
            { speaker: "You", text: "I know. I just have reading." },
            { speaker: "Priya", text: "It's one hour. Come on — remember how excited you were on the drive here?" },
            { speaker: "You", text: "That was different." },
            { speaker: "Priya", text: "Was it?" },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember the acceptance letter. You jumped on your bed. You made a list — join the radio station, try rock climbing, eat at every food truck. You pictured yourself belonging here. Now you walk past the quad and the lights look beautiful from far away. Up close, you are not sure you want to step into them. Clubs, parties, late-night study groups — they all wait. You used to want all of it.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Priya holds the door open. The music drifts up the stairwell. What do you do with the things you came here to enjoy?",
          choices: phqChoices(
            "You grab your jacket — you still want this campus life",
            "You go for a little while; some nights you want in, some nights you don't",
            "You stay in — most days nothing here feels worth leaving your room for",
            "You lie down and mute your phone — almost nothing on campus calls to you anymore"
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Chapter Two — Rain on the Quad",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Professor Chen", text: "Good work on the essay, but you seemed distant in discussion today." },
            { speaker: "You", text: "Sorry. Long week." },
            { speaker: "Professor Chen", text: "First semesters are hard. My office hours are open." },
            { speaker: "You", text: "Thanks. I'm fine." },
            { speaker: "Professor Chen", text: "Fine is a small word for a big year." },
          ],
        },
        {
          id: "tension",
          type: "tension",
          content:
            "Rain hammers the windows after class. You sit in the back row until everyone leaves. A heaviness follows you — not just today, but many days lately. You watch drops race down the glass and you cannot name why you feel so low. You got into this school. You should be grateful. The sadness does not care about should.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You walk back to the dorm without an umbrella. Your hoodie soaks through. Other students laugh and run. You do not run. You think about calling home but you do not want to hear the worry in your mom's voice. You think about texting Priya. You put your phone away. The gray sky matches something inside you that will not clear.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Water drips from your sleeves in the elevator. How often has this heavy feeling been with you?",
          choices: phqChoices(
            "Today is rough — most days you feel okay",
            "It comes and goes — a few days here and there",
            "More than half your days feel sad or empty, even when things go right",
            "Nearly every day feels gray — hope is hard to find"
          ),
        },
      ],
    },
    {
      id: 3,
      title: "Chapter Three — The 3 AM Library",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "Wednesday, 3 AM. You are in the twenty-four-hour study room again. You count: Sunday you slept four hours. Monday you napped at noon and lay awake all night. Tuesday you crashed at 8 PM and woke at 2 AM, wired and tired. Your roommate's soft snoring through the wall feels unfair. Your body does not know when to rest anymore.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You have an exam at nine. The words in your notes swim. You tried melatonin. You tried a sleep playlist. You tried putting your phone across the room. Nothing holds. Some nights you stare at the ceiling in your dorm. Some nights you sleep until afternoon and miss half the day. Campus never sleeps, and neither do you — not really.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Night janitor", text: "Still here? You look beat, kid." },
            { speaker: "You", text: "Exam tomorrow." },
            { speaker: "Night janitor", text: "You'll do better with sleep than with another hour of that." },
            { speaker: "You", text: "Wish I could." },
            { speaker: "Night janitor", text: "Yeah. I hear that a lot in this room." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The janitor wheels his cart away. The fluorescent lights buzz. What have your nights been like?",
          choices: phqChoices(
            "You sleep fine — tonight is exam stress, not a pattern",
            "A few bad nights, but you usually get decent rest",
            "More than half your nights are broken — too little sleep or sleeping all day",
            "Night after night you cannot rest properly no matter what you try"
          ),
        },
      ],
    },
    {
      id: 4,
      title: "Chapter Four — Back Row",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "Friday morning lecture. You got six hours of broken sleep. Your coffee cup is empty but your hands still shake. The professor's voice is a hum. You read the same slide three times. Your legs feel like lead walking up the hill to the science building. Everyone else seems to move at normal speed. You are running on empty before the day begins.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Marcus (classmate)", text: "Want to grab lunch? My treat." },
            { speaker: "You", text: "I'm not hungry. Just tired." },
            { speaker: "Marcus", text: "You've said that every day this week." },
            { speaker: "You", text: "Busy semester." },
            { speaker: "Marcus", text: "You okay? Seriously." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember orientation week. You ran up the stadium steps on a dare. You were breathless and laughing. Your whole body buzzed with energy. Now you climb one flight of stairs to your room and sit down immediately. You used to stay up late talking and still wake up ready. Now you wake up tired and go to bed tired. The tank never fills.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Marcus waits for an answer you do not have. How drained have you been feeling?",
          choices: phqChoices(
            "Your energy is normal — you're just in a busy stretch",
            "Some days you drag; other days you're alright",
            "Most days you feel exhausted even when you haven't done much",
            "Nearly every day you wake up empty and stay that way"
          ),
        },
      ],
    },
    {
      id: 5,
      title: "Chapter Five — Dining Hall",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Saturday afternoon. The dining hall smells like pizza and fries. You swipe your card and stand in line. You pile food on your tray — pasta, salad, a cookie — because that is what you are supposed to do. You sit alone by the window. You poke the pasta. You eat the cookie in two bites. You throw most of the rest away. Last night you ordered delivery at midnight and ate until your stomach hurt.",
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "You notice your habits shifting. Some days you forget lunch entirely until Priya asks. Some days you eat nothing but granola bars in your room. Other days you cannot stop — dining hall, vending machine, ramen at 2 AM. Food does not taste the same. You are not sure if you are hungry or just filling time.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Priya", text: "You didn't touch dinner again. Want me to bring something back?" },
            { speaker: "You", text: "I ate earlier." },
            { speaker: "Priya", text: "A cereal bar is not dinner." },
            { speaker: "You", text: "I'm not hungry." },
            { speaker: "Priya", text: "Or you're too hungry to bother. Which is it?" },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Priya's concern sits between you like a third roommate. What has eating been like?",
          choices: phqChoices(
            "Your appetite is steady — meals feel normal",
            "Some days you eat fine; other days you skip or overdo it",
            "More often than not your eating feels off — too little or too much",
            "Nearly every day food feels wrong, and you stop paying attention"
          ),
        },
      ],
    },
    {
      id: 6,
      title: "Chapter Six — The Group Project",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "Freshman orientation. You raised your hand in every session. You volunteered to lead the icebreaker. People laughed at your jokes. You felt smart and capable — like you belonged in every room you walked into. That version of you feels like a photo in someone else's album.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "Your group project is due Monday. You missed the last two meetings. Marcus covered your part and said it was fine, but his tone said otherwise. A voice in your head lists every failure: late assignments, unanswered texts, the guitar you never played. It says you are wasting your spot here. It says everyone can see you falling behind.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You open your laptop to work. You close it after ten minutes. You think about apologizing to the group. You think about dropping the class. You stare at your reflection in the dark screen — tired eyes, shoulders slumped. You want to be the person they thought you were. You are not sure that person is still here.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The project deadline looms. How often do you feel like you are failing?",
          choices: phqChoices(
            "You don't — you made mistakes, but you're not a failure",
            "Sometimes, when things pile up, the voice gets loud",
            "More than half the time you feel like you let yourself and others down",
            "Nearly every day you feel like you don't deserve to be here"
          ),
        },
      ],
    },
    {
      id: 7,
      title: "Chapter Seven — Midterm Fog",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "Read the question. Read it again." },
            { speaker: "Exam proctor", text: "Thirty minutes left." },
            { speaker: "You", text: "I know this. I studied this." },
            { speaker: "You (thought)", text: "Why won't it stay in my head?" },
            { speaker: "You", text: "I read the same line four times. Nothing sticks." },
          ],
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "It is not just exams. In lecture you drift and miss whole chunks. You rewatch recorded classes at 1.5 speed and still lose the thread. Texts from friends sit half-read. You put down a page and forget what happened in the first paragraph. Your mind feels like bad Wi-Fi — connected one second, gone the next.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "Midterms are next week. You have three papers due. You cannot hold all of it in your head at once. You wonder if something is wrong with you — if everyone else can focus and you are the only one drowning in fog. Panic flares and then fades into more fog.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The proctor calls time. You leave half the exam blank. How hard has focusing been?",
          choices: phqChoices(
            "Your focus is sharp — today was stress, not every day",
            "You lose focus sometimes, but you can usually pull it back",
            "More than half the time your thoughts slip away mid-task",
            "Nearly every day feels foggy — reading, class, conversations all blur"
          ),
        },
      ],
    },
    {
      id: 8,
      title: "Chapter Eight — The Party Next Door",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Saturday night. The floor above you is a party — bass thumping, voices rising. Priya went. She invited you twice. You said you had work. You do not have work. You lie on your bed and stare at the ceiling. Your leg bounces without stopping. Earlier today in the dining hall, someone said you spoke so slowly they worried you were sick. Last week you could not sit through a one-hour lecture without leaving twice.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "Your body cannot pick a speed. Some days you move through campus like you are underwater. Other days your hands shake and you pace your room until Priya asks you to stop. People notice. They joke that you are either a ghost or a hurricane. You laugh. It does not feel funny.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Priya (returning)", text: "You didn't come. That's okay. But you've been weird lately." },
            { speaker: "You", text: "Weird how?" },
            { speaker: "Priya", text: "Some days you barely talk. Other days you can't sit still. I don't know which you is real." },
            { speaker: "You", text: "I don't either." },
            { speaker: "Priya", text: "That's what scares me." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The party muffles through the ceiling. Priya waits. How has your body been moving through the days?",
          choices: phqChoices(
            "You feel normal — your pace is steady",
            "Some days slow or restless, but not most days",
            "More than half the time you feel either slowed down or unable to sit still",
            "Nearly every day people would notice — you drag or you cannot stop moving"
          ),
        },
      ],
    },
    {
      id: 9,
      title: "Chapter Nine — Lights Out",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "Sunday night. Campus is quiet again. Priya is asleep. You are at your desk with the lamp off, watching the string lights outside your window. A thought arrives — quiet, steady, terrifying. It has visited before. You pushed it away during midterms, during rain, during every 3 AM study session. It does not leave. It asks if anyone would miss you. It asks if you should stay.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "What if I just stopped trying?" },
            { speaker: "You", text: "..." },
            {
              speaker: "A gentle voice",
              text: "You don't have to carry this alone. Being honest here is brave. Your life matters.",
            },
            { speaker: "You (thought)", text: "The counseling center is open Monday. I could go." },
            { speaker: "You", text: "Or I could just get through tonight." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You think of the drive here with your dad — windows down, singing off-key. You think of Professor Chen's office hours. You think of the guitar you still might play. None of these fix tonight. But they are threads. You can hold one. You can call someone. You can stay. The thought is real. So is the choice to reach for help.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The lights flicker outside. Be honest — have thoughts of hurting yourself or not wanting to be here been part of your days?",
          choices: phqChoices(
            "No — those thoughts have not been with you",
            "They have crossed your mind on a few hard days",
            "They have been there more than half the days when campus felt too heavy",
            "They have been with you nearly every day — hard to escape"
          ),
        },
      ],
    },
  ],
};
