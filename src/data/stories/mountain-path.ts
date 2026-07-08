import type { StoryDefinition } from "@/lib/story-engine/types";
import { phqChoices } from "./helpers";

export const mountainPathStory: StoryDefinition = {
  key: "mountain-path",
  title: "Mountain Path",
  description:
    "You set out to reach a summit no one in your village has seen in fifty years. The trail tests your body, your courage — and the weight you have been carrying in silence.",
  chapters: [
    {
      id: 1,
      title: "Chapter One — Base Camp",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Dawn at the trailhead. Mist hangs in the pines. Your pack is loaded — map, rope, food for six days. Old Elias tied a red thread on your wrist and said the mountain shows you what you need to see. You used to live for this. Sunrise hikes. Rivers. Stars so close you could count them. You planned this trip for a year. Standing here, the joy feels thin — like a coat that no longer fits.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Elias", text: "The first camp is only four hours. You know the path." },
            { speaker: "You", text: "I know it." },
            { speaker: "Elias", text: "Then why do you look like you're saying goodbye?" },
            { speaker: "You", text: "I'm tired before I start. That's all." },
            { speaker: "Elias", text: "The mountain doesn't care about all. It cares about truth." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember your first climb at sixteen. You sang on the ridge. You felt the world open up — vast, kind, full of room for you. You wanted every trail, every peak, every cold morning with coffee steaming in your hands. That hunger drove you here. Lately even the things you love — maps, campfires, the smell of pine — feel distant. Like they belong to someone else.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Elias watches you shoulder your pack. What do you do with the adventure you came for?",
          choices: phqChoices(
            "You step onto the path — the fire is still there, buried under ash",
            "You walk, but some days the trail feels flat even when it climbs",
            "You move forward, though most days wonder why you bothered packing",
            "You climb because stopping is worse — almost nothing feels good anymore"
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Chapter Two — River Crossing",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "Day two. You reach the river where the bridge washed out years ago. Logs slick with moss. The water roars white below. A sadness hits you so hard you sit on a rock and cannot stand. It is not fear of the crossing. It is a gray wave from nowhere — the same feeling that found you in your apartment, on the bus, in the grocery line. The mountain did not invent it. You brought it.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "I should feel alive out here. Why don't I?" },
            { speaker: "You", text: "Just cross. Keep moving." },
            { speaker: "You (thought)", text: "What's the point if I feel this bad?" },
            { speaker: "Wind", text: "..." },
            { speaker: "You", text: "One log at a time." },
          ],
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You cross halfway and freeze. Not from danger — from emptiness. You think of turning back. You think of sitting on this rock until dark. Eventually you move. Camp that night is cold. You stare at the fire and feel nothing warm. The stars come out brilliant and far away. You pull your coat tighter.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The river roars behind you. How often has this heavy sadness been with you?",
          choices: phqChoices(
            "Today is hard — out here most days you feel alive",
            "It comes and goes — a few days at a time even on the trail",
            "More than half your days feel sad or empty, mountain or no mountain",
            "Nearly every day feels gray — the river just made it louder"
          ),
        },
      ],
    },
    {
      id: 3,
      title: "Chapter Three — The Sheltered Cave",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "Day three. Storm drives you into a cave. Rain hammers the entrance. You cannot sleep. You lie in your bag and count hours. Last night you slept one hour before waking at every sound. Nights before the trip were worse — lying awake in bed, then sleeping through alarms. Out here your body does not know the rules. Too little. Too much. Never rested.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You watch lightning flash on the cave walls. Shapes move — animals, faces, nothing. You think about tomorrow's climb. You think about nothing. Your mind will not settle. When rain slows, you step outside at 4 AM. You are exhausted and awake at once. The storm passes. You do not feel refreshed.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "If I sleep now, I get two hours before dawn." },
            { speaker: "You", text: "But the ceiling — no, the cave roof — keeps staring back." },
            { speaker: "You (thought)", text: "Elias said rest at camp. I can't." },
            { speaker: "Drip", text: "Tap. Tap. Tap." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Dawn light creeps into the cave. What have your nights been like?",
          choices: phqChoices(
            "You sleep fine in the wild — tonight was the storm",
            "A few bad nights, but you usually rest okay",
            "More than half your nights are broken — cave or bed, same fight",
            "Night after night you cannot rest — the cave just echoes it"
          ),
        },
      ],
    },
    {
      id: 4,
      title: "Chapter Four — The Steep Ascent",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You", text: "One more switchback. That's all." },
            { speaker: "You (thought)", text: "I said that five switchbacks ago." },
            { speaker: "You", text: "Legs — just move." },
            { speaker: "You (thought)", text: "They're lead. Everything is lead." },
            { speaker: "You", text: "Stop. Breathe. Can't stop." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember racing your brother up this lower slope. You beat him laughing, not even winded. Your body was a tool you trusted — strong, quick, eager. Now each step costs twice. You slept badly. You ate little. You have not felt real energy in weeks. The altitude is not the only thing thinning the air.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "You stop on a ledge. Your hands shake. Your chest heaves. A normal climb should not feel like this — not for you, not yet. But emptiness lives in your muscles. You drink water and it does not help. You think about how far you still have to go. The summit feels less like a goal and more like a joke.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The trail climbs higher. How drained has your body been?",
          choices: phqChoices(
            "Your energy is normal — today is altitude and bad sleep",
            "Some days you drag; other days the trail carries you",
            "Most days you feel exhausted even on flat ground",
            "Nearly every day you wake up empty — the mountain just proves it"
          ),
        },
      ],
    },
    {
      id: 5,
      title: "Chapter Five — The Supply Cache",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "Day four. You find the supply cache Elias hid — dried fruit, nuts, chocolate. You used to devour this stuff on the trail. Today you eat two almonds and put the rest away. Yesterday you ate half your day's rations at once, standing, not tasting. Your stomach aches either way. Hunger and fullness feel the same — wrong.",
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "You check your food log — a habit from your planning days. Skipped breakfast three times last week. Ate trail mix until sick twice. At home you ordered food you did not want. Out here you forget to eat until dizzy, then force too much down. Your body is confused. So are you.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "Fuel the climb. That's the rule." },
            { speaker: "You", text: "I'm not hungry." },
            { speaker: "You (thought)", text: "Or I'm too hungry to chew." },
            { speaker: "You", text: "Which is it?" },
            { speaker: "You (thought)", text: "Does it matter?" },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The cache is half full. Your body needs more. What has eating been like?",
          choices: phqChoices(
            "Your appetite is steady — trail food tastes fine",
            "Some days you eat well; other days you skip or binge",
            "More often than not your eating feels off — too little or too much",
            "Nearly every day food feels wrong, and you stopped noticing when"
          ),
        },
      ],
    },
    {
      id: 6,
      title: "Chapter Six — The Eagle's Drop",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "Day five. The path narrows along a cliff. An eagle circles below. Your knee slips on loose stone. You catch yourself. Your heart pounds. A voice in your head — not fear of falling — says you should have been better prepared. Should have trained more. Should not have come. Should not have started this life. The voice sounds like yours on your worst days.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You press your back to the rock wall. You think of everyone who believed in you — Elias, your brother, the friends who waved you off. You feel like you are letting them down with every tired step. Not because you might fail the climb. Because you are not the person they think you are. You are someone who can barely hold a thought or a meal or a night's sleep.",
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember the medal from your first race. You remember your brother saying you were the brave one in the family. You try to wear that memory like armor. Today it fits poorly. The eagle cries once and glides away. You wonder if you deserve to be up this high.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The path widens ahead. How often do you feel like you have failed?",
          choices: phqChoices(
            "You don't — you're struggling, not worthless",
            "Sometimes the voice wins on the hard switchbacks",
            "More than half the time you feel like you let everyone down",
            "Nearly every day you feel like you are not enough — cliff or kitchen"
          ),
        },
      ],
    },
    {
      id: 7,
      title: "Chapter Seven — Whiteout",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "Day six. Clouds swallow the peak. Visibility drops to arm's length. You check your map. You check it again. The symbols blur. You read the compass note in your journal — you read it three times and still forget which way is north. Your mind, once sharp on trails, scatters like the mist.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You", text: "North is — north is..." },
            { speaker: "You (thought)", text: "I knew this an hour ago." },
            { speaker: "You", text: "Focus. The map. The map." },
            { speaker: "You (thought)", text: "Why won't it stay?" },
            { speaker: "You", text: "One step. Then another. Don't think." },
          ],
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You rope yourself to a tree and wait. Hours pass. You try to read Elias's notes. The same paragraph slips away. You panic quietly — if you cannot think clearly here, you cannot think clearly home. The whiteout is weather. The fog might be you. You are not sure anymore where one ends.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The clouds do not lift. How hard has it been to focus?",
          choices: phqChoices(
            "Your mind is sharp — the whiteout is just disorienting",
            "You lose focus sometimes, but you can usually pull it back",
            "More than half the time your thoughts slip away mid-task",
            "Nearly every day feels foggy — even the map won't stay in your head"
          ),
        },
      ],
    },
    {
      id: 8,
      title: "Chapter Eight — The Final Ridge",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "The clouds break. You see the summit — still a day's walk. You should feel triumph. Your body moves slowly, words come out quiet when you talk to yourself. Last night you paced the camp in circles for twenty minutes before you noticed. Days before the trip you sat frozen on your couch for an hour. Other times you cannot keep still — picking at your pack straps, tapping your poles, restless as wind.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "Elias told a story once about a climber who moved like a ghost — slow, silent — and another who talked fast and could not sleep. The mountain, he said, shows both. You feel both in one body. Too slow to keep pace with your old self. Too restless to rest. People would notice if they were here. You notice alone.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "Ghost or hurricane. Pick one." },
            { speaker: "You", text: "I can't." },
            { speaker: "You (thought)", text: "Elias would see it. He always sees." },
            { speaker: "You", text: "Keep walking. However slow." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The ridge wind cuts through your jacket. How has your body been moving through the days?",
          choices: phqChoices(
            "You feel normal — steady pace on the trail",
            "Some days slow or restless, but not most days",
            "More than half the time you feel either slowed down or unable to sit still",
            "Nearly every day people would notice — you drag or you cannot stop moving"
          ),
        },
      ],
    },
    {
      id: 9,
      title: "Chapter Nine — The Summit",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "You reach the top at sunrise. Fifty years since anyone stood here, Elias said. The world spreads below — gold and endless. You should cry happy tears. You feel hollow and full at once. In your pocket, a letter you wrote yourself before the trip: 'If you make it, remember why you stay.' You almost did not bring it. You almost did not come.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "The hollow part is old. It whispered on the river rock. In the cave. On the cliff. A thought you never say aloud — that everyone would be better off if you did not come down. That pain could end if you stepped wrong on purpose. The summit is beautiful. The thought is still there. Beauty does not always chase it away.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You (thought)", text: "I could stay up here forever. Or not go back." },
            {
              speaker: "A gentle voice",
              text: "You climbed to see truth. Your life is worth the descent. You don't have to carry this alone.",
            },
            { speaker: "You", text: "The letter said remember why you stay." },
            { speaker: "You (thought)", text: "I'm trying to remember." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The sun warms your face. Be honest — have thoughts of hurting yourself or not wanting to be here been part of your days?",
          choices: phqChoices(
            "No — those thoughts have not been with you",
            "They have crossed your mind on a few hard days on the trail",
            "They have been there more than half the days — summit or valley",
            "They have been with you nearly every day — hard to escape even up here"
          ),
        },
      ],
    },
  ],
};
