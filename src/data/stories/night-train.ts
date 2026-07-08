import type { StoryDefinition } from "@/lib/story-engine/types";
import { phqChoices } from "./helpers";

export const nightTrainStory: StoryDefinition = {
  key: "night-train",
  title: "Night Train",
  description:
    "At midnight a train arrives at the old platform — lights on, doors open, schedule empty. No one else sees it. The conductor nods like he has been waiting for you. Where it goes is not on any map you know.",
  chapters: [
    {
      id: 1,
      title: "Chapter One — Empty Platform",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "You cannot sleep. At eleven you walk to the station at the edge of town — closed years ago, benches peeling, timetable faded to ghosts. You used to love trains. Day trips with friends. Watching fields blur past windows. The rumble in your chest that felt like adventure starting. Tonight you come because the apartment walls breathe too loud. The platform is empty. Or it should be.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Night guard", text: "Station's closed. You lost?" },
            { speaker: "You", text: "Just walking. Needed air." },
            { speaker: "Night guard", text: "Nobody comes here at midnight." },
            { speaker: "You", text: "I heard something. Tracks humming." },
            { speaker: "Night guard", text: "Tracks don't hum. Go home." },
          ],
        },
        {
          id: "memory",
          type: "memory",
          content:
            "You remember a childhood ride — sticky seats, orange light, your father pointing at cows. You pressed your face to glass and felt the world was huge and kind. That wonder used to live in small things: departures, arrivals, the ding before doors close. Lately even music, movies, old hobbies feel flat. You stand on dead tracks hoping something still moves.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The guard walks away. The rails vibrate under your shoes. What has happened to the things you used to enjoy?",
          choices: phqChoices(
            "You still love the world — tonight is just restless",
            "Some weeks you feel it; other weeks everything looks gray",
            "Most days even good things feel flat — you show up but don't feel present",
            "Almost nothing feels good anymore — you came here because stopping hurt more"
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Chapter Two — Headlights in the Dark",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "Midnight exactly. Light rounds the bend — soft white, impossible. A train slides in silent. No horn. No crowd. Doors sigh open. The guard is gone. The street beyond the fence shows cars, lit windows, normal night. No one looks toward the platform. A sadness sits in your chest — not fear of the train, but the gray weight you carry at home, at work, in the grocery line. The train did not invent it. You brought it.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You step closer. Warm air spills from the car — smell of rain on seats, old leather, something like cinnamon. You should run. You should call someone. Instead you stand at the threshold and feel nothing warm. The platform clock ticks. Your reflection in the door glass looks tired. The train waits. It has nowhere else to be.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Conductor", text: "Evening. Ticket?" },
            { speaker: "You", text: "I don't have one. I didn't know this train existed." },
            { speaker: "Conductor", text: "You did. You just stopped believing." },
            { speaker: "You", text: "Where does it go?" },
            { speaker: "Conductor", text: "Where you need. First — tell me how long you've been heavy." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The conductor's lamp swings gentle. How often has this heavy sadness been with you?",
          choices: phqChoices(
            "Tonight is hard — most days you feel okay",
            "It comes and goes — a few days at a time",
            "More than half your days feel sad or empty, even when the world looks fine",
            "Nearly every day feels gray — the train light just makes it brighter"
          ),
        },
      ],
    },
    {
      id: 3,
      title: "Chapter Three — Sleeper Car",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "You board. The car is half full — faces blurred, like dreams you almost remember. Your bunk has clean sheets and a small lamp. You count your sleep this week: Sunday three hours, Monday awake until four, Tuesday fourteen hours and still groggy, Wednesday nothing restful. The train rocks gentle. Your body forgot how to rest on land.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Conductor", text: "Bunk three. We ride until you tell the truth about your nights." },
            { speaker: "You", text: "That's not a destination." },
            { speaker: "Conductor", text: "It is the only ticket." },
            { speaker: "You", text: "I can't sleep anywhere." },
            { speaker: "Conductor", text: "Then lie down and fail honestly. The train keeps moving." },
          ],
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You lie down. The lamp dims. Through the window: not countryside — shifting dark, like closed eyes. You should sleep. You know you will stare at the ceiling at home — or sleep too deep and miss your life. Nights and days have lost their edges. The train hums. Somewhere ahead, a bridge you cannot see.",
        },
        {
          id: "choice",
          type: "choice",
          content: "The bunk sways. The lamp flickers. What have your nights been like?",
          choices: phqChoices(
            "You sleep fine — tonight is just a strange train",
            "A few bad nights, but you usually rest okay",
            "More than half your nights are broken — too little or too much sleep",
            "Night after night you cannot rest properly no matter what you try"
          ),
        },
      ],
    },
    {
      id: 4,
      title: "Chapter Four — Dining Car at 2 A.M.",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "You wake — or think you do — in the dining car. Vinyl booths. A child once spilled soda on this seat, the stain says. You remember family trips: pancakes at dawn, legs swinging, body buzzing with good tired. You trusted your limbs. You woke ready. Now you walk the aisle like wading. The conductor pours tea without asking. Steam rises. Your hands wrap the cup. They feel far away.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "Fatigue sits in your bones like train soot. You have been tired for weeks — not the good tired after a long day, but empty tired. Coffee on the train does not fix it. Weekends at home do not fix it. The windows show nothing but dark. Still you feel like a battery that never charges past ten percent.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Conductor", text: "When did you last feel light on your feet?" },
            { speaker: "You", text: "I don't remember." },
            { speaker: "Conductor", text: "The train remembers for you. Sit." },
            { speaker: "You", text: "I'm not hungry. I'm not anything." },
            { speaker: "Conductor", text: "Then drink. Empty cups rattle loudest." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Tea burns your tongue. The car sways. How drained have you been feeling?",
          choices: phqChoices(
            "Your energy is normal — midnight trains are just disorienting",
            "Some days you drag; other days you're fine",
            "Most days you feel exhausted even when you haven't done much",
            "Nearly every day you wake up empty — the train cannot charge you by itself"
          ),
        },
      ],
    },
    {
      id: 5,
      title: "Chapter Five — The Buffet",
      scenes: [
        {
          id: "discovery",
          type: "discovery",
          content:
            "The buffet appears when you did not notice walking toward it. Bread, fruit, soup — all slightly wrong, all real enough. You ate nothing today. Yesterday you grazed at 2 a.m. Last week you swallowed three meals at once and felt sick. Food used to mean stationside buns, shared bags of chips, celebration dinners at the end of a line. Now it means decisions you do not have energy for.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You take a roll and bite twice. You set it down on the counter. The conductor does not comment. Other passengers eat in silence — blurred jaws, slow hands. You watch and feel neither hungry nor full. Your reflection in the chrome coffee urn looks thinner. You are not sure when that happened.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Conductor", text: "Eat or don't. But know which you're doing." },
            { speaker: "You", text: "I forget to eat until my head hurts." },
            { speaker: "Conductor", text: "Or you eat until you're sick and taste nothing." },
            { speaker: "You", text: "How did you know?" },
            { speaker: "Conductor", text: "Everyone who boards alone brings the same luggage." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "The half roll sits on the counter. What has eating been like?",
          choices: phqChoices(
            "Your appetite is steady — train food is just odd",
            "Some days you eat fine; other days you skip or overdo it",
            "More often than not your eating feels off — too little or too much",
            "Nearly every day food feels wrong, and you stop noticing when"
          ),
        },
      ],
    },
    {
      id: 6,
      title: "Chapter Six — Ticket Stub",
      scenes: [
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Conductor", text: "Your stub." },
            { speaker: "You", text: "It has my name. I never bought a ticket." },
            { speaker: "Conductor", text: "You did. Every time you said you were fine when you weren't." },
            { speaker: "You", text: "That's not fair." },
            { speaker: "Conductor", text: "The train is not fair. It is honest." },
          ],
        },
        {
          id: "tension",
          type: "tension",
          content:
            "You read the stub again. Cancelled plans. Forgotten birthdays. Smiles in photos while you felt hollow. A voice in your head says you do not deserve a seat — you fail people, you waste tickets, you board midnight trains instead of calling someone. The paper creases in your fist. You want to tear it. You smooth it instead.",
        },
        {
          id: "narration",
          type: "narration",
          content:
            "The train enters a tunnel. Black windows. Your face floats in glass — tired, young, older than you feel. The conductor does not comfort you. 'Stubs are not verdicts,' he says. 'They are records. You can get off. You can stay. You can tell the truth.' The voice in your head has been loud for months.",
        },
        {
          id: "choice",
          type: "choice",
          content: "Tunnel dark presses the windows. How often do you feel bad about yourself?",
          choices: phqChoices(
            "You don't — you're struggling, not failing",
            "Sometimes, when you let people down, the voice gets loud",
            "More than half the time you feel like you are not enough",
            "Nearly every day you feel like you do not deserve a seat on any train"
          ),
        },
      ],
    },
    {
      id: 7,
      title: "Chapter Seven — The Map Room",
      scenes: [
        {
          id: "narration",
          type: "narration",
          content:
            "A door opens to a car of maps — walls, tables, ceiling — routes in ink that moves when you look away. The conductor asks you to trace your stop. You touch the line and forget where you began. You start again. Your finger drifts. Stations blur: home, work, childhood platform, tonight. Focus slips like smoke through the train vents.",
        },
        {
          id: "discovery",
          type: "discovery",
          content:
            "It is not just the maps. At work you read the same email four times. On the phone you lose the thread and ask people to repeat themselves. You boarded this train with a purpose — sleep, escape, proof you are not crazy — and already you cannot hold all three. The conductor watches without judgment. 'The line continues,' he says. 'Even when you lose it.'",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Conductor", text: "Name the next station." },
            { speaker: "You", text: "I — wait. What were we talking about?" },
            { speaker: "Conductor", text: "Your mind. Where it goes." },
            { speaker: "You", text: "Everywhere. Nowhere. I can't hold a thought." },
            { speaker: "Conductor", text: "Then say that. The map can wait." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Ink shifts under your finger. How hard has focusing been?",
          choices: phqChoices(
            "Your mind is sharp — moving maps are just disorienting",
            "You lose focus sometimes, but you can usually pull it back",
            "More than half the time your thoughts slip away mid-task",
            "Nearly every day feels foggy — even the route home blurs"
          ),
        },
      ],
    },
    {
      id: 8,
      title: "Chapter Eight — Emergency Brake",
      scenes: [
        {
          id: "tension",
          type: "tension",
          content:
            "The train shudders. Red light pulses. Someone pulled the emergency brake — you, though you do not remember standing. Your body cannot pick a pace. Sometimes you move through cars like wading through tar. Sometimes you pace the aisle and cannot stop. Restless hands on cold metal. Heavy feet on carpet. Same person. Same night. The train mirrors you — jerking, stopping, lurching forward wrong.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "Conductor", text: "You stopped us. Why?" },
            { speaker: "You", text: "I didn't mean to. My hands just —" },
            { speaker: "Conductor", text: "Your body speaks when your mouth won't." },
            { speaker: "You", text: "I can't sit still. I can't move right." },
            { speaker: "Conductor", text: "Tell me which days. The train needs truth to run smooth." },
          ],
        },
        {
          id: "narration",
          type: "narration",
          content:
            "You sit on the floor of the aisle. The red light fades. Passengers — blurred, patient — wait. You think of pacing your kitchen. Of napping through afternoon and jolting awake guilty. Of friends saying you seem far away or wound too tight. The conductor offers a hand. 'Brakes are for honesty,' he says. 'Not shame.'",
        },
        {
          id: "choice",
          type: "choice",
          content: "The train hums, ready to move. How has your body been moving through the days?",
          choices: phqChoices(
            "You feel normal — steady on the train and at home",
            "Some days slow or restless, but not most days",
            "More than half the time you feel either slowed down or unable to sit still",
            "Nearly every day people would notice — you drag or you cannot stop moving"
          ),
        },
      ],
    },
    {
      id: 9,
      title: "Chapter Nine — Last Stop",
      scenes: [
        {
          id: "memory",
          type: "memory",
          content:
            "Dawn through the windows — real dawn, pink over fields you know. The conductor shows you a photo on the wall: himself younger, same uniform, same tired eyes. 'I rode this train thinking it would take my pain away,' he says. 'It showed me where I hurt. I stayed to punch tickets for others.' You understand. The night train is not escape. It is mirror. The platform ahead is yours.",
        },
        {
          id: "tension",
          type: "tension",
          content:
            "A thought you have not said aloud: that everyone would be lighter if you stepped off into the dark between stations. That the pain could stop if you stopped. You love people waiting at home. That is why the thought hurts. You push it away at breakfast. It returns when the tracks hum. You are tired of pushing alone.",
        },
        {
          id: "dialogue",
          type: "dialogue",
          lines: [
            { speaker: "You", text: "What if I get off and nothing changes?" },
            { speaker: "Conductor", text: "Then you try again in daylight. With a person, not a ghost train." },
            { speaker: "You", text: "I'm scared of the thoughts I have when the cars go quiet." },
            {
              speaker: "A gentle voice",
              text: "Naming fear is brave. Your life matters on this platform. To you.",
            },
            { speaker: "Conductor", text: "The schedule shows another train. Not tonight. When you're ready — with help." },
          ],
        },
        {
          id: "choice",
          type: "choice",
          content: "Doors open. Morning air. Be honest — have thoughts of hurting yourself or not wanting to be here been part of your days?",
          choices: phqChoices(
            "No — those thoughts have not been with you",
            "They have crossed your mind on a few hard nights",
            "They have been there more than half the days when the apartment went quiet",
            "They have been with you nearly every day — hard to escape even on this train"
          ),
        },
      ],
    },
  ],
};
