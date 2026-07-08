import type { StoryDefinition } from "@/lib/story-engine/types";
import { phqChoices } from "./helpers";

export const quietGardenStory: StoryDefinition = {
  key: "quiet-garden",
  title: "Quiet Garden",
  description:
    "Behind the clinic wall, through a gap you were not meant to find, lies a forgotten garden. Weeds and wildflowers. A broken bench. Something about this place makes the noise in your head go still — for a moment.",
  chapters: [
    {
      id: 1,
      title: "Chapter One — The Gap in the Wall",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "You come to the clinic on a gray Tuesday. Same building, same waiting room magazines, same plastic chairs. On your way to the appointment you pass the back corridor — staff only, the sign says. But a loose brick has fallen. Through the gap: green. Not parking lot. Not dumpster. Garden. You used to notice small beautiful things — frost on windows, a stranger's kind nod, light through leaves. Lately the world feels muted. Still, you stop.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Receptionist", text: "Sir? That area is closed." },
            { speaker: "You", text: "I saw something back there. A garden?" },
            { speaker: "Receptionist", text: "Oh — the old courtyard. Nobody uses it anymore." },
            { speaker: "You", text: "Can I sit there while I wait?" },
            { speaker: "Receptionist", text: "...Give me five minutes. I'll check." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember your grandmother's garden. Tomatoes warm from the vine. Dirt under your nails that felt like belonging. You would sit and watch bees for an hour and call it a perfect afternoon. That ease feels far now. Even things you love — plants, quiet corners, the smell of rain on soil — reach you through cotton. The gap in the wall glows green anyway. You want to step closer.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The receptionist walks away. Through the gap, ivy moves in the wind. What has happened to the small joys you used to feel?",
          choices: phqChoices(
            "They are still there — today is just a clinic-gray morning",
            "Some days you notice beauty; other days everything looks flat",
            "Most days even lovely things feel distant — you see them but don't feel them",
            "Almost nothing reaches you anymore — you came here because colors stopped working"
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Chapter Two — Overgrown Paths",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "The receptionist returns with a key. 'Don't tell anyone I let you in,' she says. The door sticks. The garden opens like a held breath — cracked stone paths, rose bushes gone wild, a fountain dry for years. Sadness rises without warning. Not because the garden is sad. Because you are, and the quiet here does not hide it. You feel it in the waiting room, on the bus, in bed. The garden just stops pretending.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "You sit on the broken bench. A robin lands, hops, leaves. You watch and feel nothing warm. You should cry or breathe relief. Instead you sit in gray — familiar, heavy, honest. This is the feeling you carry into appointments and out of them. The garden does not fix it. It makes room for it.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "Why am I sad in a place meant to heal?" },
            { speaker: "You", text: "Maybe that's why I needed to find it." },
            { speaker: "You (thought)", text: "How long have I felt like this?" },
            { speaker: "Wind in the ivy", text: "..." },
            { speaker: "You", text: "Long enough." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The dry fountain stares up at the sky. How often has this heavy sadness been with you?",
          choices: phqChoices(
            "Today is hard — most days you feel okay",
            "It comes and goes — a few days at a time",
            "More than half your days feel sad or empty, even in quiet places",
            "Nearly every day feels gray — the garden just has fewer distractions"
          ),
        },
      ],
    },
    {
      id: 3,
      title: "Chapter Three — The Night Bench",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "You come back after hours — the receptionist left the key in an envelope. 'For when waiting inside is too much,' she wrote. Moonlight on the path. The clinic windows dark. You count your sleep: Sunday three hours, Monday awake until four, Tuesday you napped through dinner and missed a call from your sister. The garden is cool and honest. Night sounds — crickets, distant traffic — do not judge.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Sister (text)", text: "You okay? You went quiet on the phone." },
            { speaker: "You", text: "At the clinic garden. Long day." },
            { speaker: "Sister", text: "Again? You sleep there now?" },
            { speaker: "You", text: "Not sleep. Just sit." },
            { speaker: "Sister", text: "That's not really an answer." },
          ],
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "You lie on the bench and stare at stars between clouds. You should rest. You know you will lie awake at home — or sleep too deep and miss morning. Nights and days have lost their edges. The garden saw you zone out for twenty minutes watching a moth on the stone. It does not ask you to perform wellness.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Your sister's text glows. Crickets sing. What have your nights been like?",
          choices: phqChoices(
            "You sleep fine — tonight is just a quiet garden visit",
            "A few bad nights, but you usually rest okay",
            "More than half your nights are broken — too little or too much sleep",
            "Night after night you cannot rest properly no matter what you try"
          ),
        },
      ],
    },
    {
      id: 4,
      title: "Chapter Four — Pulling Weeds",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "Wednesday afternoon. You find gardening gloves in a shed — cracked, still fit. You pull weeds without being asked. Your grandmother taught you: hands in soil, back bent, sun on your neck. You loved the ache then. Your body was a friend. You woke ready. Now each tug feels heavier than the weed. Sweat on your forehead. Arms slow. The good tired does not come.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "A nurse watches from the window. She does not stop you. You have been tired for weeks — not the tired after helping, but empty tired. Like a phone that never charges past ten percent. You sit on the bench before you finish the row. The weeds will wait. So will your exhaustion.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Nurse", text: "You don't have to do that." },
            { speaker: "You", text: "I know. It helps." },
            { speaker: "Nurse", text: "Does it? You look worn out." },
            { speaker: "You", text: "I'm always worn out lately." },
            { speaker: "Nurse", text: "That's worth telling someone in there." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Soil under your nails. Gloves dropped on the path. How drained have you been feeling?",
          choices: phqChoices(
            "Your energy is normal — gardening is just hard work",
            "Some days you drag; other days you're fine",
            "Most days you feel exhausted even when you haven't done much",
            "Nearly every day you wake up empty — the bench is where you sit with it"
          ),
        },
      ],
    },
    {
      id: 5,
      title: "Chapter Five — The Lunch Table",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "Thursday. You bring lunch to the garden — a habit now. Sandwich from the clinic cafe, apple, water. You unwrap the sandwich and eat two bites. You put the rest on the bench beside you. Last week you ate nothing until your head ached. The week before you bought three meals and tasted none. Food used to mean care — packed lunches, shared fruit, tea with honey. Now it means decisions you do not have energy for.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "A sparrow lands near the apple core. You watch it peck. You are not hungry. You are not full. You are somewhere in between and tired of noticing. Your clothes fit different. You are not sure how. The garden does not comment. It grows anyway — wild, uneven, alive.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Receptionist", text: "You eating enough out there?" },
            { speaker: "You", text: "There's a sandwich." },
            { speaker: "Receptionist", text: "Half a sandwich on the bench isn't eating." },
            { speaker: "You", text: "I'm not hungry." },
            { speaker: "Receptionist", text: "Or you're too tired to bother. I know the difference." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The half sandwich warms in the sun. What has eating been like?",
          choices: phqChoices(
            "Your appetite is steady — lunch in the garden is peaceful",
            "Some days you eat fine; other days you skip or overdo it",
            "More often than not your eating feels off — too little or too much",
            "Nearly every day food feels wrong, and you stop noticing when"
          ),
        },
      ],
    },
    {
      id: 6,
      title: "Chapter Six — Names on Stones",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You", text: "These stones along the path — are they markers?" },
            { speaker: "Nurse", text: "Patients planted them years ago. Little victories. Hard days survived." },
            { speaker: "You", text: "There's no stone for me." },
            { speaker: "Nurse", text: "You haven't asked for one yet." },
            { speaker: "You", text: "I don't feel like I deserve a victory." },
          ],
        },
        {
          id: "tension",
          type: "tension",
          content:
            "The nurse leaves. A voice in your head agrees — you fail appointments, cancel on friends, sit in this garden and still feel hollow. You are a bad patient, a bad sibling, a bad version of who you meant to be. The stones blur. You press your thumb into the rough edge of one until the feeling steadies.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "Friday rain. You sit under the shed roof and listen to drops on leaves. The clinic door opens — someone laughs inside. You want to believe you deserve to be here, in the garden and in the world. The voice says you do not. It has been saying that a lot.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Rain runs down the stones. How often do you feel bad about yourself?",
          choices: phqChoices(
            "You don't — you're hurting, not failing",
            "Sometimes, when you miss things, the voice gets loud",
            "More than half the time you feel like you let everyone down",
            "Nearly every day you feel like you are not enough for this garden or this life"
          ),
        },
      ],
    },
    {
      id: 7,
      title: "Chapter Seven — The Herb Labels",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Saturday. You find wooden labels in the shed — lavender, mint, sage — faded handwriting. You walk the paths trying to match plant to name. You read the same label three times. You forget which row you started. The garden is small. Your mind drifts anyway — to bills, to yesterday's session, to whether you locked your door. Focus slips like water through cracked stone.",
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "It is not just the labels. At work you read the same email four times. On the phone with your sister you lose the thread and ask her to repeat herself. During your appointment you nodded while missing half the words. The garden bench held you, but your thoughts were miles away. Concentration used to be easy here. Now even quiet costs effort.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Therapist", text: "You seem somewhere else today." },
            { speaker: "You", text: "I was in the garden this morning. Still there, I guess." },
            { speaker: "Therapist", text: "What pulled you away?" },
            { speaker: "You", text: "Everything. Nothing. I can't hold one thought." },
            { speaker: "Therapist", text: "That's important data. Not failure." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "A lavender sprig wilts in your hand. How hard has focusing been?",
          choices: phqChoices(
            "Your mind is sharp — the faded labels are just hard to read",
            "You lose focus sometimes, but you can usually pull it back",
            "More than half the time your thoughts slip away mid-task",
            "Nearly every day feels foggy — even this small garden blurs"
          ),
        },
      ],
    },
    {
      id: 8,
      title: "Chapter Eight — Two Speeds",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "Sunday morning in the garden. You move slow — watering can heavy, steps careful on wet stone. The nurse saw you pacing the same path for thirty minutes last night. Two speeds. Neither feels like you. Restless hands pulling weeds at midnight. Heavy feet that cannot finish a short walk. The clinic clock ticks inside. Out here, time bends.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Receptionist", text: "You were here at dawn. And last night past ten." },
            { speaker: "You", text: "I couldn't sit still at home." },
            { speaker: "Receptionist", text: "So you came to the garden to pace instead?" },
            { speaker: "You", text: "It felt better than walls." },
            { speaker: "Receptionist", text: "Your body is telling you something. Listen." },
          ],
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You sit. Your leg bounces. You force it still. A butterfly lands on your knee. You watch it until it flies. People notice — the receptionist, the nurse, your sister on the phone. You say you are fine because fine is easier than explaining that your body cannot pick a pace.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Water drips from the can. The path gleams. How has your body been moving through the days?",
          choices: phqChoices(
            "You feel normal — steady in the garden and elsewhere",
            "Some days slow or restless, but not most days",
            "More than half the time you feel either slowed down or unable to sit still",
            "Nearly every day someone would notice — you drag or you cannot stop moving"
          ),
        },
      ],
    },
    {
      id: 9,
      title: "Chapter Nine — Your Stone",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "Monday. The nurse meets you at the gap with a flat stone and a marker. 'Patients who made it through hard seasons leave one,' she says. 'Not because they were fixed. Because they stayed.' You think of your grandmother's garden. Of first finding this place through the broken wall. Of weeds pulled, benches sat, nights survived. The garden held you before you believed you could be held.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "A thought you have not said aloud in session: that everyone would be lighter if you were not here to weigh them down. That the pain could stop if you stopped. You love these people. That is why the thought hurts. You push it away in the waiting room. It returns in the garden at dusk. You are tired of pushing.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You", text: "What if I write my name and I don't make it?" },
            { speaker: "Nurse", text: "Then someone else sits on this bench and knows you tried." },
            { speaker: "You", text: "I'm scared of the thoughts I have at night." },
            {
              speaker: "A gentle voice",
              text: "Naming fear is brave. Your life matters in this garden. To you.",
            },
            { speaker: "Nurse", text: "You don't have to carry it alone. Not here. Not ever." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The marker cap clicks open. The stones wait. Be honest — have thoughts of hurting yourself or not wanting to be here been part of your days?",
          choices: phqChoices(
            "No — those thoughts have not been with you",
            "They have crossed your mind on a few hard days",
            "They have been there more than half the days when the clinic closed",
            "They have been with you nearly every day — hard to escape even here"
          ),
        },
      ],
    },
  ],
};
