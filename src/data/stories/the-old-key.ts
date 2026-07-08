import type { StoryDefinition } from "@/lib/story-engine/types";
import { phqChoices } from "./helpers";

export const theOldKeyStory: StoryDefinition = {
  key: "the-old-key",
  title: "The Old Key",
  description:
    "You inherit a locked box from a stranger who knew your name. Each clue opens a door into your own past — and something you have been hiding from yourself.",
  chapters: [
    {
      id: 1,
      title: "Chapter One — The Delivery",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Courier", text: "Sign here. It's from the Hartwell estate — said to deliver only to you." },
            { speaker: "You", text: "I don't know any Hartwell." },
            { speaker: "Courier", text: "Box is yours. Key's taped underneath. Weird, right?" },
            { speaker: "You", text: "Weird is one word for it." },
          ],
        },
        {
          id: "tension",
          type: "tension",
          content:
            "The box is heavy. Brass lock, no label. Under the tape: an old iron key, cold in your palm. A note in careful handwriting: 'Start with what you still love. The rest will follow.' You used to love puzzles — escape rooms, mystery novels, late-night riddles with friends. You have not opened a book for fun in weeks.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You set the box on your kitchen table. Afternoon light cuts across it. Your phone buzzes — a friend inviting you to trivia night. You used to be the first to say yes. You used to light up at the thought of a new game, a new story, a new place to explore. Now the phone stays face-down. The box waits. So does the question of what still pulls you forward.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The key fits the lock with a soft click. Before you open it — what has happened to the things you usually enjoy?",
          choices: phqChoices(
            "You still reach for them — joy is not gone, just buried under this mystery",
            "Some days you want in; other days even trivia sounds like too much",
            "Most days hobbies and fun feel flat — the box is more interesting than your old life",
            "Almost nothing feels enjoyable anymore — you open the box because everything else is gray"
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Chapter Two — The First Drawer",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "Inside the box: a wooden drawer, empty except for a photograph of a house you have never seen. On the back, a date twenty years ago and your mother's handwriting: 'We were happy here.' Your chest tightens. You did not know this photo existed. The house looks bright — garden, open windows, a child on the steps. The child's face is turned away.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You sit with the photo a long time. A sadness rises that has no clear source — or maybe it does and you are not ready to name it. You have felt this low before, in the quiet hours, in the shower, driving home from work. A heaviness that is not about the mystery. It was there before the courier knocked.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "Who was Hartwell? Why Mom's handwriting?" },
            { speaker: "You", text: "Why do I feel like crying over a house I've never seen?" },
            { speaker: "Phone (Mom)", text: "Missed call." },
            { speaker: "You", text: "I'll call tomorrow. I can't tonight." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The photo trembles in your hand. How often has this kind of sadness been with you?",
          choices: phqChoices(
            "Today is heavy — most days you feel alright",
            "It comes and goes — a few days at a time",
            "More than half your days feel sad or empty, with or without clues",
            "Nearly every day feels dark — the mystery just gave it a shape"
          ),
        },
      ],
    },
    {
      id: 3,
      title: "Chapter Three — Midnight in the Study",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "A second package arrives — a journal with a ribbon marking a page. The entry describes a study at midnight: 'She could not sleep. She read the same line until dawn.' You recognize the feeling. You have been awake past three AM more nights than you can count. Some nights you hunt for clues online. Other nights you stare at the ceiling and think of nothing and everything.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Journal (voice in your head)", text: "The house on the hill. The key under the rose bush." },
            { speaker: "You", text: "This is fiction. It has to be." },
            { speaker: "You (thought)", text: "But I haven't slept in three days. Not really." },
            { speaker: "Clock", text: "2:47 AM." },
            { speaker: "You", text: "One more page. Then I'll try." },
          ],
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "You realize your sleep has fractured since the box arrived — or maybe it fractured before and the box just gave you something to do at night. You nap at odd hours. You wake at four wired and exhausted. Some mornings you sleep until noon and miss calls. Your body and the journal describe the same person.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The journal lies open. Dawn is coming. What have your nights been like?",
          choices: phqChoices(
            "You sleep fine — the mystery just keeps you up sometimes",
            "A few rough nights, but you usually rest okay",
            "More than half your nights are broken — too little sleep or sleeping all day",
            "Night after night you cannot rest — the journal feels like your biography"
          ),
        },
      ],
    },
    {
      id: 4,
      title: "Chapter Four — The Long Hallway",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "You drive to the address from the journal — a house on the edge of town. Your hands are heavy on the wheel. You slept two hours. The hallway inside the house is long and dim; your footsteps echo. Each door has a number. You are on door four when your legs buckle. You sit on the floor. You are so tired it feels like the walls are leaning in.",
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember being twelve, running through your cousin's house playing hide-and-seek. You had endless energy. You laughed until your stomach hurt. You cannot remember the last time you felt that kind of alive. Now climbing stairs winded you. Now a short walk to the mailbox feels like a marathon.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Caretaker", text: "You look pale. There's a bench by door seven." },
            { speaker: "You", text: "I need to keep going. The clues don't wait." },
            { speaker: "Caretaker", text: "Bodies do. Sit a minute." },
            { speaker: "You", text: "If I stop, I might not start again." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The caretaker offers water. Your reflection in the window looks hollow. How drained have you been?",
          choices: phqChoices(
            "Your energy is normal — today is just a long day",
            "Some days you drag; other days you're fine",
            "Most days you feel exhausted even when you haven't done much",
            "Nearly every day you wake up empty — the hallway is just the latest proof"
          ),
        },
      ],
    },
    {
      id: 5,
      title: "Chapter Five — The Kitchen Ledger",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "Behind door seven: a kitchen, frozen in time. A ledger on the table lists meals — dates, portions, names. Your name appears on recent pages, though you have never been here. Entries note 'barely ate' and 'midnight bread again.' Your stomach twists. You have been skipping meals. Or eating at strange hours. Or standing in your own kitchen unable to decide if you are hungry.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You find a tin of biscuits still soft. You eat three without tasting them. Last week you ordered delivery twice in one night. The week before, you lived on coffee until Thursday. Food has become background noise — too much, too little, never quite right. The ledger does not judge. It only records.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Caretaker", text: "That ledger updates itself, they say. Shows truth." },
            { speaker: "You", text: "That's not possible." },
            { speaker: "Caretaker", text: "Neither is a box that knows your name. Yet here you are." },
            { speaker: "You", text: "The eating part is true. I wish it wasn't." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The ledger's last entry is today's date. What has eating been like for you?",
          choices: phqChoices(
            "Your appetite is steady — meals feel normal",
            "Some days you eat fine; other days you skip or overdo it",
            "More often than not your eating feels off — the ledger got that right",
            "Nearly every day food feels wrong, and you stopped caring when"
          ),
        },
      ],
    },
    {
      id: 6,
      title: "Chapter Six — The Mirror Room",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Door nine opens into a room lined with mirrors. In each one you see yourself at different ages — eight, sixteen, last year. In the center mirror you stand now, holding the key. A voice echoes that is yours but older: 'You were supposed to figure it out by now.' The words land like stones.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "The voice lists failures — jobs you quit, calls you never returned, the box you almost did not open because you told yourself you did not deserve answers. You feel like a disappointment. To your mother. To Hartwell, whoever they were. To the child in the photograph. The mirrors do not blink.",
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember winning a school prize. Your teacher said you had a rare mind. You believed her. You carried that belief for years — through hard times, through doubt. You try to find that person in the mirrors. Some days you can. Today the voice is louder than the memory.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Your reflection waits. How often do you feel like you have let yourself down?",
          choices: phqChoices(
            "You don't — you're lost, not worthless",
            "Sometimes the voice wins — but not most days",
            "More than half the time you feel like a failure",
            "Nearly every day you feel like you don't deserve what you find"
          ),
        },
      ],
    },
    {
      id: 7,
      title: "Chapter Seven — The Scattered Map",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Caretaker", text: "Door twelve has the map. Don't lose it — pieces fall off if you're not careful." },
            { speaker: "You", text: "I won't lose it." },
            { speaker: "You (thought)", text: "I already read the same instruction twice." },
            { speaker: "Caretaker", text: "You sure? You seem somewhere else." },
            { speaker: "You", text: "I'm here. I'm trying." },
          ],
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "The map is torn into twelve pieces. You lay them on the floor. Shapes almost match — then do not. You read the journal clue again. You forget the middle sentence. You start over. Your mind skitters like the pieces — close to fitting, never quite. Even this mystery, which once thrilled you, slips through your fingers.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You have been here two hours. You have fit six pieces. You re-read the same paragraph in the journal four times. Texts from friends go unanswered. You used to hold complex plots in your head — twists, names, dates. Now everything scatters. You wonder if the house is doing it, or if you brought the fog with you.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Piece seven will not fit. How hard has it been to concentrate?",
          choices: phqChoices(
            "Your mind is sharp — this puzzle is just hard",
            "You lose focus sometimes, but you can usually pull it back",
            "More than half the time your thoughts slip away mid-task",
            "Nearly every day feels foggy — even clues won't stay in your head"
          ),
        },
      ],
    },
    {
      id: 8,
      title: "Chapter Eight — The Clock Tower",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "You climb the clock tower for the final clue. Your body moves slowly — each step deliberate, like you are wading through syrup. Last week you paced your apartment for an hour without realizing. The caretaker said you spoke in a flat voice, then burst into fast speech an hour later. You do not remember. Your body keeps its own record.",
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "At the top, a clock face frozen at eleven eleven. A note: 'When time stops, notice how you move.' You think back. Friends have asked if you are okay because you are so quiet. Other days they ask because you cannot stop fidgeting. You exist between two speeds — neither feels like yours.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "Wind rattles the tower. You grip the railing. Your heart races. Your limbs feel heavy at the same time. You are so tired and so wired that you laugh once — sharp, strange — and then go quiet. The town below looks small. You feel small too.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The clock does not tick. How has your body been moving through the days?",
          choices: phqChoices(
            "You feel normal — steady pace, steady voice",
            "Some days slow or restless, but not most days",
            "More than half the time you feel either slowed down or unable to sit still",
            "Nearly every day people would notice — you drag or you cannot stop moving"
          ),
        },
      ],
    },
    {
      id: 9,
      title: "Chapter Nine — The Last Lock",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "You descend the tower with the final clue — a small golden key and a letter addressed to you. Hartwell was your grandfather. The house was your mother's childhood home. The box was meant for you when you were ready. You were not ready. You might still not be. But you are here.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "The letter's last line unsettles you: 'The thirteenth door opens only if you tell the truth about the darkest room.' You know which room it means. Not in the house — inside you. A thought you have carried alone. That life would be easier without you in it. That pain could stop if you stopped. The key is warm in your hand. The door is ahead.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "I could turn back. No one would know." },
            {
              speaker: "A gentle voice",
              text: "Or you could be honest. This is a safe space. Your life is not a puzzle to throw away.",
            },
            { speaker: "Caretaker (softly)", text: "That door has waited a long time. So have you." },
            { speaker: "You", text: "I'm scared of what I'll admit." },
            { speaker: "Caretaker", text: "Scared is allowed. Alone is not required." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The thirteenth door waits. Be honest — have thoughts of hurting yourself or not wanting to be here been part of your days?",
          choices: phqChoices(
            "No — those thoughts have not been with you",
            "They have crossed your mind on a few hard days",
            "They have been there more than half the days this mystery could not distract you from",
            "They have been with you nearly every day — the darkest room is real"
          ),
        },
      ],
    },
  ],
};
