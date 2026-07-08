import type { StoryDefinition } from "@/lib/story-engine/types";
import { phqChoices } from "./helpers";

export const sundayTableStory: StoryDefinition = {
  key: "sunday-table",
  title: "Sunday Table",
  description:
    "Every Sunday your family gathers around the old oak table. This week, something unspoken sits in the empty chair — and you are the only one who seems to feel its weight.",
  chapters: [
    {
      id: 1,
      title: "Chapter One — Setting the Table",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Sunday morning. Your mom hums in the kitchen. The smell of bread and coffee fills the house. You set seven plates — same ritual since you were small. You used to love this. Stealing olives before dinner. Arguing over the good chair. Playing cards after dishes while your uncle told bad jokes. Today you move through the motions slowly. The music on the radio sounds far away.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Mom", text: "Put the big bowl in the middle — your brother's bringing salad." },
            { speaker: "You", text: "Got it." },
            { speaker: "Mom", text: "You used to fight me for the flower arrangement. Now you barely look at it." },
            { speaker: "You", text: "I'm just tired." },
            { speaker: "Mom", text: "You've been tired a while, honey." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember last year's birthday at this table. You laughed until your cheeks hurt. You danced in the kitchen with your niece. You felt held — not just by people, but by the life you built here. Lately when you picture Sunday dinner, card games, family walks, even your favorite chair, the warmth does not reach you. The table is set. Something in you is not.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The doorbell will ring soon. What has happened to the things you usually enjoy?",
          choices: phqChoices(
            "You still love Sundays — today is just a quiet morning",
            "Some weeks you feel it; other weeks the table feels like a stage",
            "Most weeks family time feels flat — you show up but don't feel present",
            "Almost nothing at this table feels good anymore — you come because you should"
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Chapter Two — The Empty Chair",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "Everyone arrives. Voices overlap. Your niece hugs your legs. You smile and hug back. Inside, a sadness sits quiet — not new, not only today. You have felt this at work, in the car, lying in your childhood bed last night. A heaviness that family noise cannot drown. You wonder if anyone else feels it. Everyone looks fine.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "Dad tells the story about the neighbor's dog again. People laugh on cue. You laugh half a beat late. Your brother bumps your shoulder — 'You good?' You nod. The empty chair at the end is for Grandpa, gone two years. Sometimes you think the sadness is grief. Sometimes you know it is bigger than that. It was here before Grandpa left.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Dad", text: "Pass the bread, kiddo." },
            { speaker: "You", text: "Here." },
            { speaker: "Aunt Rosa", text: "You seem quiet. Everything okay at work?" },
            { speaker: "You", text: "Yeah. Just thinking." },
            { speaker: "Aunt Rosa", text: "About what? You can tell us." },
            { speaker: "You", text: "Nothing. Really." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Aunt Rosa's eyes stay on you a moment too long. How often has this heavy feeling been with you?",
          choices: phqChoices(
            "Today is hard — most days you feel okay",
            "It comes and goes — a few days at a time",
            "More than half your days feel sad or empty, even at the Sunday table",
            "Nearly every day feels gray — you smile anyway"
          ),
        },
      ],
    },
    {
      id: 3,
      title: "Chapter Three — After Everyone Leaves",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "The house is quiet after nine. Mom fell asleep on the couch. You help load the dishwasher. You count your sleep this week: Sunday three hours. Monday awake until four. Tuesday you napped at dinner and missed the call with your brother. Wednesday you slept fourteen hours and woke groggy. Your body does not follow the Sunday rhythm anymore.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Brother (text)", text: "Good to see you today. Felt like you were somewhere else." },
            { speaker: "You", text: "Long week. Sorry." },
            { speaker: "Brother", text: "You always say that. You sleeping okay?" },
            { speaker: "You", text: "Sometimes." },
            { speaker: "Brother", text: "That's not really an answer." },
          ],
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You sit at the Sunday table alone. Crumbs and candle wax. The house creaks. You should go to bed. You know you will lie awake — or sleep too deep and miss your alarm tomorrow. Nights and days have lost their edges. The table saw you laugh today. It also saw you zone out for twenty minutes staring at the salt shaker.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Your brother's text glows. The house is dark. What have your nights been like?",
          choices: phqChoices(
            "You sleep fine — tonight is just post-dinner wired",
            "A few bad nights, but you usually rest okay",
            "More than half your nights are broken — too little or too much sleep",
            "Night after night you cannot rest properly no matter what you try"
          ),
        },
      ],
    },
    {
      id: 4,
      title: "Chapter Four — Monday Morning",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "You remember helping Dad build this table when you were ten. You sanded the edge until your arms ached and you loved it. You ran outside after and played until dark. Your body was a friend. You trusted it. You woke up ready. Now Monday morning finds you at the same oak surface with cold cereal. Your limbs feel heavy before the day begins.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "Mom asks if you want a ride to work. You say you'll walk. It is twelve minutes. It feels like twelve miles. You have been tired for weeks — not the good tired after helping, but empty tired. Like a phone that never charges past ten percent. Coffee does not fix it. Weekend rest does not fix it.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Mom", text: "Sit. Eat something real." },
            { speaker: "You", text: "I'm late." },
            { speaker: "Mom", text: "You're always late lately. Or you cancel." },
            { speaker: "You", text: "Work is busy." },
            { speaker: "Mom", text: "Honey — you barely have energy to talk." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Mom's hand rests on the chair back — Grandpa's chair. How drained have you been feeling?",
          choices: phqChoices(
            "Your energy is normal — Mondays are always rough",
            "Some days you drag; other days you're fine",
            "Most days you feel exhausted even when you haven't done much",
            "Nearly every day you wake up empty — the table is just where you sit with it"
          ),
        },
      ],
    },
    {
      id: 5,
      title: "Chapter Five — Leftovers",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "Tuesday night. The fridge is full of Sunday leftovers — your mom packed containers for everyone. You stand with the door open. You ate nothing at lunch. You grazed on pie at midnight. You cannot remember if you had dinner yesterday. Food at this table used to mean love. Now it means decisions you do not have energy for.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You heat lasagna and eat two bites. You put the rest back. Last week you ate three plates at Sunday dinner and still felt hungry — then sick. Some days you skip meals until your head aches. Other days you stand here eating cold rice from the container without tasting it. Your jeans fit different. You are not sure how.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Mom (from hallway)", text: "Are you eating enough?" },
            { speaker: "You", text: "There's lasagna." },
            { speaker: "Mom", text: "That's not what I asked." },
            { speaker: "You", text: "I'm not hungry." },
            { speaker: "Mom", text: "Or you're too tired to bother. I know the difference." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The lasagna cools on the counter. What has eating been like?",
          choices: phqChoices(
            "Your appetite is steady — Sunday leftovers are a gift",
            "Some days you eat fine; other days you skip or overdo it",
            "More often than not your eating feels off — too little or too much",
            "Nearly every day food feels wrong, and you stop noticing when"
          ),
        },
      ],
    },
    {
      id: 6,
      title: "Chapter Six — The Photo Album",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Niece", text: "Look — you're in every picture! You were always smiling." },
            { speaker: "You", text: "That was a long time ago." },
            { speaker: "Niece", text: "It was last Christmas. Right here." },
            { speaker: "You", text: "Feels longer." },
            { speaker: "Niece", text: "Why don't you smile like that now?" },
          ],
        },
        {
          id: "tension",
          type: "tension",
          content:
            "The question hits harder than your niece knows. A voice in your head answers: because you fail people. You cancel plans. You forget birthdays. You sit at this table and feel nothing while everyone gives you love. You feel like a bad son, a bad sibling, a bad example. The album page blurs. You close it gently.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "Wednesday evening — another small gathering, tacos this time. You help chop onions. Your eyes sting. You are not sure if it is onions or something else. Dad squeezes your shoulder passing by. You want to believe you deserve it. The voice says you do not. It has been saying that a lot.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Your niece watches you with open concern. How often do you feel bad about yourself?",
          choices: phqChoices(
            "You don't — you're going through something, not failing",
            "Sometimes, when you cancel or zone out, the voice gets loud",
            "More than half the time you feel like you let your family down",
            "Nearly every day you feel like you are not enough for this table"
          ),
        },
      ],
    },
    {
      id: 7,
      title: "Chapter Seven — Cards on the Table",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Thursday. Your uncle brings cards — same deck since you were kids. You used to win and gloat. Tonight you stare at your hand: red seven, black three, jack. He explains the rules again because you asked twice. Everyone laughs kindly. You forget whose turn it is. You forget what game you are playing. The table that held a thousand easy evenings now feels like a test you are failing.",
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "It is not just cards. At work you read the same email four times. On the phone with your brother you lose the thread and ask him to repeat himself. Your mind drifts during movies, during prayers, during his wedding toast last month — you smiled in photos but missed half the words. Focus slips like water through your fingers.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Uncle", text: "Your play, champ." },
            { speaker: "You", text: "Sorry — what are we playing?" },
            { speaker: "Uncle", text: "Same game we always play. You okay?" },
            { speaker: "You", text: "Just distracted." },
            { speaker: "Uncle", text: "You've been distracted all month." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Your cards fan useless in your hand. How hard has focusing been?",
          choices: phqChoices(
            "Your mind is sharp — tonight is just noisy",
            "You lose focus sometimes, but you can usually pull it back",
            "More than half the time your thoughts slip away mid-task",
            "Nearly every day feels foggy — even cards at the family table blur"
          ),
        },
      ],
    },
    {
      id: 8,
      title: "Chapter Eight — Clearing Dishes",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "Friday night cleanup. You move slow — plates stacked careful, water running hot. Mom says you are moving like Grandpa did his last year. Your brother, on the other hand, saw you pacing the porch for thirty minutes after dinner Sunday. Two speeds. Neither feels like you. Restless hands. Heavy feet. Same person. Same table.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Brother", text: "Sit down. I'll finish." },
            { speaker: "You", text: "I can help." },
            { speaker: "Brother", text: "You're wiping the same plate over and over." },
            { speaker: "You", text: "Sorry. I zoned out." },
            { speaker: "Brother", text: "Or you can't sit still. Which is it this week?" },
          ],
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You sit. Your leg bounces. You force it still. Mom watches from the doorway. Family notices — they always have. They joke gently, ask quietly, leave food on your step. You say you are fine because fine is easier than explaining that your body cannot pick a pace.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The dishes gleam in the rack. How has your body been moving through the days?",
          choices: phqChoices(
            "You feel normal — steady at the table and elsewhere",
            "Some days slow or restless, but not most days",
            "More than half the time you feel either slowed down or unable to sit still",
            "Nearly every day family would notice — you drag or you cannot stop moving"
          ),
        },
      ],
    },
    {
      id: 9,
      title: "Chapter Nine — Next Sunday",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "You wake early Saturday and find Mom at the table alone with tea. She pats the chair beside her — your chair, since you were small. She tells you about the week she almost left home at seventeen, and how this table pulled her back. She does not fix you. She stays. You realize this table has held hard Sundays before. It can hold yours.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "A thought you have not said aloud sits with the tea cups: that everyone would be lighter if you were not here to weigh them down. That the pain could stop if you stopped. You love these people. That is why the thought hurts. You push it away at breakfast. It returns at dusk. You are tired of pushing.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You", text: "Mom — have you ever wanted to disappear?" },
            { speaker: "Mom", text: "Yes. When I was young. I told someone. It helped." },
            { speaker: "You", text: "I'm scared to say more." },
            {
              speaker: "A gentle voice",
              text: "Being honest here is brave. Your life matters to this table. To you.",
            },
            { speaker: "Mom", text: "You don't have to carry it alone. Not here. Not ever." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Sunday comes again. The table is set. Be honest — have thoughts of hurting yourself or not wanting to be here been part of your days?",
          choices: phqChoices(
            "No — those thoughts have not been with you",
            "They have crossed your mind on a few hard days",
            "They have been there more than half the days when the house went quiet",
            "They have been with you nearly every day — hard to escape even here"
          ),
        },
      ],
    },
  ],
};
