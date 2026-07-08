import type { StoryDefinition } from "@/lib/story-engine/types";
import { phqChoices } from "./helpers";

export const moonGateStory: StoryDefinition = {
  key: "moon-gate",
  title: "The Moon Gate",
  description:
    "In an old forest at the edge of town, a hidden gate appears only when the moon is full. You were told not to go. You go anyway — and what waits on the other side knows your name.",
  chapters: [
    {
      id: 1,
      title: "Chapter One — The Forest Edge",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "The forest starts where the streetlights stop. You stand at the path with a small lantern and a coat too thin for the cold. The trees lean close. Someone carved a warning on the first oak: Do not walk after dark. You used to love this place — fireflies in summer, hidden streams, the smell of wet bark after rain. You came here to feel wonder. Tonight the path feels long before you take a step.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Old neighbor", text: "You going in? On a night like this?" },
            { speaker: "You", text: "Just a walk. I won't go far." },
            { speaker: "Old neighbor", text: "The gate shows up when the moon is round. People who go through don't come back the same." },
            { speaker: "You", text: "Maybe that's what I need." },
            { speaker: "Old neighbor", text: "Or maybe you need sleep." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember last autumn here. You lay on moss and watched leaves fall like slow gold coins. You laughed at a squirrel that stole your bread. You felt small in a good way — part of something alive. Lately when you think of forests, stars, old paths, even this lantern in your hand, the magic does not land. You walk anyway. Something ahead might still be worth finding.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The moon rises. The path waits. What has happened to the wonder you used to feel out here?",
          choices: phqChoices(
            "It is still there — tonight is just cold and strange",
            "Some nights the forest feels alive; other nights it feels like wallpaper",
            "Most walks feel flat — you come but nothing reaches you",
            "Almost nothing out here feels good anymore — you walk because stopping is worse"
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Chapter Two — Silver Light",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "Deep in the trees the air changes. Cold turns clean. Your breath makes silver clouds. A sadness sits in your chest — not fear of the dark, but the same gray weight you carry at home, at work, in the grocery line. The forest did not put it there. You brought it with your boots and your lantern. The moon finds it and makes it visible.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You pass a ring of stones no map shows. Ferns glow pale at the edges. You should feel awe. Instead you feel tired of feeling nothing. A bird calls once and goes quiet. You think of turning back. You keep walking because the path slopes down and something pulls you forward — not hope exactly. Habit. Curiosity. The need to know if the gate is real.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "Why am I so heavy in a place like this?" },
            { speaker: "Voice in the trees", text: "You are not lost. You are early." },
            { speaker: "You", text: "Who said that?" },
            { speaker: "Voice", text: "The forest remembers what you forget." },
            { speaker: "You", text: "I don't want riddles. I want the gate." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The voice fades. The sadness stays. How often has this heavy feeling been with you?",
          choices: phqChoices(
            "Tonight is hard — most days you feel okay",
            "It comes and goes — a few days at a time",
            "More than half your days feel sad or empty, even under open sky",
            "Nearly every day feels gray — the moon just makes it brighter"
          ),
        },
      ],
    },
    {
      id: 3,
      title: "Chapter Three — The Gate Appears",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "The clearing opens without warning. Between two birch trees stands an arch of black stone — no gate in daylight, your neighbor swore. Tonight iron vines weave across it, blooming with faint blue light. You count your sleep this week: two hours Sunday, awake until four Monday, fourteen hours Tuesday, nothing restful since. Your body forgot how to follow the moon.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You", text: "It's real." },
            { speaker: "Figure by the arch", text: "It is always real. You are only now looking." },
            { speaker: "You", text: "What is on the other side?" },
            { speaker: "Figure", text: "What you carry. What you dropped. What you fear." },
            { speaker: "You", text: "Can I sleep there?" },
            { speaker: "Figure", text: "You can try. The gate does not promise rest." },
          ],
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You touch the iron vines. They are warm. Your lantern flickers. You should be afraid. You are too worn to flinch. The figure steps aside — tall, face hidden under a hood. 'Not yet,' it says. 'Walk the edge first. Know your nights.' The gate hums. The forest holds its breath. You have never been so awake and so exhausted at once.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The gate glows. Your eyes burn. What have your nights been like?",
          choices: phqChoices(
            "You sleep fine — tonight is just moonlit and wired",
            "A few bad nights, but you usually rest okay",
            "More than half your nights are broken — too little or too much sleep",
            "Night after night you cannot rest properly no matter what you try"
          ),
        },
      ],
    },
    {
      id: 4,
      title: "Chapter Four — The Keeper's Path",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "The figure — the Keeper, you decide — leads you along the gate's outer rim. You remember running this forest at twelve, legs strong, lungs burning in the best way. You trusted your body. You woke ready. Now each step on moss feels like lifting stone. The Keeper does not hurry. 'The gate opens for the tired,' it says. 'Not the careless.'",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "Your lantern dims though the flame is steady. Fatigue sits in your bones like river silt. You have been tired for weeks — not the good tired after a long walk, but empty tired. Coffee does not fix it. Weekends do not fix it. The moon pours down and still you feel like a cup with a crack.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Keeper", text: "When did you last feel light?" },
            { speaker: "You", text: "I don't remember." },
            { speaker: "Keeper", text: "That is an answer." },
            { speaker: "You", text: "I'm not here for a lesson." },
            { speaker: "Keeper", text: "No one is. They come for the gate. They stay for the truth." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The Keeper's hood tilts toward you. How drained have you been feeling?",
          choices: phqChoices(
            "Your energy is normal — the forest path is just long",
            "Some days you drag; other days you're fine",
            "Most days you feel exhausted even when you haven't done much",
            "Nearly every day you wake up empty — the gate will not fix that by itself"
          ),
        },
      ],
    },
    {
      id: 5,
      title: "Chapter Five — Moon Fruit",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "The Keeper stops at a low branch. Silver fruit hangs like small moons — one ripe, one shriveled. 'Eat the living one,' it says. 'Or admit you have been feeding on ash.' You ate nothing today. Yesterday you grazed at midnight. Last week you swallowed three meals at once and felt sick. Food used to mean camping trips, shared bread, sweet tea. Now it means choices you do not have energy for.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You bite the silver fruit. It tastes like cold water and memory. Your stomach turns — hungry and full at once. The Keeper watches without judgment. 'The gate knows hunger,' it says. 'All kinds.' You spit the skin into the ferns. Your hands shake. Not from magic. From weeks of eating wrong and calling it fine.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Keeper", text: "Do you nourish yourself?" },
            { speaker: "You", text: "I eat when I remember." },
            { speaker: "Keeper", text: "That is not the same." },
            { speaker: "You", text: "I'm too tired to cook." },
            { speaker: "Keeper", text: "The body keeps score even when the mind looks away." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The fruit's glow fades on your tongue. What has eating been like?",
          choices: phqChoices(
            "Your appetite is steady — the silver fruit was just strange",
            "Some days you eat fine; other days you skip or overdo it",
            "More often than not your eating feels off — too little or too much",
            "Nearly every day food feels wrong, and you stop noticing when"
          ),
        },
      ],
    },
    {
      id: 6,
      title: "Chapter Six — Names in the Bark",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Keeper", text: "Read the birch." },
            { speaker: "You", text: "These are names. Hundreds of them." },
            { speaker: "Keeper", text: "People who stood where you stand. Some walked through. Some turned back." },
            { speaker: "You", text: "Is mine here?" },
            { speaker: "Keeper", text: "Not yet. That depends on what you believe about yourself." },
          ],
        },
        {
          id: "tension",
          type: "tension",
          content:
            "You find a name you almost know — smudged, like your own handwriting when you cancel plans and lie about why. A voice in your head says you do not deserve the gate. You fail people. You forget calls. You came to a magic forest and still feel hollow. The birch blurs. You press your palm flat against the bark until it steadies.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "The Keeper waits. No pity. No praise. 'The gate does not ask if you are good,' it says. 'It asks if you are honest.' You want to believe you are worth the walk. The voice in your head has been loud for months. You are tired of arguing with it alone.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Your name is not carved yet. How often do you feel bad about yourself?",
          choices: phqChoices(
            "You don't — you're struggling, not failing",
            "Sometimes, when you let people down, the voice gets loud",
            "More than half the time you feel like you are not enough",
            "Nearly every day you feel like you do not deserve what waits beyond the gate"
          ),
        },
      ],
    },
    {
      id: 7,
      title: "Chapter Seven — The Riddle Bridge",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "A stream cuts the clearing. Stones float an inch above the water — stepping stones, but wrong. The Keeper gives you three words to hold in order: moon, gate, name. You repeat them. You forget the middle one halfway across. You stop on a stone that wobbles. The forest spins. You grip your lantern until your knuckles ache.",
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "It is not just the bridge. At work you read the same line four times. On the phone you lose the thread and ask people to repeat themselves. You started this walk with a map and checked it twice in ten minutes. Focus slips like mist through the trees. The gate will not open for a mind that cannot stay.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Keeper", text: "Say the three words." },
            { speaker: "You", text: "Moon... gate... I forgot." },
            { speaker: "Keeper", text: "Again. Slower." },
            { speaker: "You", text: "Moon. Gate. Name." },
            { speaker: "Keeper", text: "The forest is patient. Are you?" },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The stones hum under your boots. How hard has focusing been?",
          choices: phqChoices(
            "Your mind is sharp — the floating stones are just distracting",
            "You lose focus sometimes, but you can usually pull it back",
            "More than half the time your thoughts slip away mid-task",
            "Nearly every day feels foggy — even three words blur together"
          ),
        },
      ],
    },
    {
      id: 8,
      title: "Chapter Eight — Still or Running",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "You reach the gate's threshold. Your body cannot pick a pace. Sometimes you move like wading through sap — the Keeper had to wait twice. Sometimes your heart races and your feet want to run nowhere. Restless hands. Heavy legs. Same person. Same moon. The iron vines pulse in time with your breath, fast then slow, wrong both ways.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Keeper", text: "The gate mirrors the body. What does yours say?" },
            { speaker: "You", text: "That I'm broken." },
            { speaker: "Keeper", text: "That you are fighting. There is a difference." },
            { speaker: "You", text: "I can't sit still. I can't move right." },
            { speaker: "Keeper", text: "Then tell the truth before you step through." },
          ],
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You force your legs still. The vines brighten. You think of pacing your kitchen at 2 a.m. Of napping through afternoon and jolting awake guilty. Of friends saying you seem far away or too fast. The forest sees it all. The gate waits. You are one honest answer from the other side.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The vines part a finger's width. How has your body been moving through the days?",
          choices: phqChoices(
            "You feel normal — steady on the path and at home",
            "Some days slow or restless, but not most days",
            "More than half the time you feel either slowed down or unable to sit still",
            "Nearly every day people would notice — you drag or you cannot stop moving"
          ),
        },
      ],
    },
    {
      id: 9,
      title: "Chapter Nine — Through the Gate",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "The Keeper lowers its hood. You know the face — not a stranger, but you younger, eyes bright on this same path. 'I walked through once,' it says quietly. 'I thought magic would erase the weight. It only showed me where I hurt.' You realize the Keeper stayed to guide others. The gate did not fix it. Honesty and time did. The arch can hold your story too.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "A thought you have not said aloud: that everyone would be lighter if you disappeared into the forest. That the pain could stop if you stopped. You love people waiting at home. That is why the thought hurts. You push it away at breakfast. It returns when the moon is high. You are tired of pushing alone.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You", text: "What if I walk through and don't come back?" },
            { speaker: "Keeper", text: "Then you chose. But there is another door — telling someone before you step." },
            { speaker: "You", text: "I'm scared." },
            {
              speaker: "A gentle voice",
              text: "Fear is not failure. Your life matters on both sides of this gate.",
            },
            { speaker: "Keeper", text: "The moon will rise again. So can you." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The gate stands open. The forest is quiet. Be honest — have thoughts of hurting yourself or not wanting to be here been part of your days?",
          choices: phqChoices(
            "No — those thoughts have not been with you",
            "They have crossed your mind on a few hard nights",
            "They have been there more than half the days when the house went quiet",
            "They have been with you nearly every day — hard to escape even here"
          ),
        },
      ],
    },
  ],
};
