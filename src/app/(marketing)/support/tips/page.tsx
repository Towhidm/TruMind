import Link from "next/link";

const TIPS = [
  {
    title: "Take a short break",
    text: "Step away from screens for a few minutes. Drink water. Stretch your shoulders.",
  },
  {
    title: "Talk to someone you trust",
    text: "A friend, roommate, or family member can help you feel less alone after a hard day.",
  },
  {
    title: "Keep a small routine",
    text: "Sleep, meals, and a short walk — even imperfect days — help your body feel steadier.",
  },
  {
    title: "Try a calming activity",
    text: "After you sign in, use Breathing, Grounding, or Stretch from Support when stress feels high.",
  },
  {
    title: "Check in again later",
    text: "One story score is a snapshot. Trends over time in Analytics can show change.",
  },
  {
    title: "Seek professional care when needed",
    text: "If low mood lasts or daily life feels too hard, a counselor or doctor can help.",
  },
];

export default function PublicTipsPage() {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-6 px-4 py-8 sm:px-6 sm:py-10">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">Self-care tips</h1>
        <p className="mt-2 text-sm text-slate-600">
          Simple ideas you can use anytime. They are support tools, not a cure or diagnosis.
        </p>
      </div>

      <ul className="space-y-3">
        {TIPS.map((tip) => (
          <li
            key={tip.title}
            className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur-md"
          >
            <h2 className="font-semibold text-slate-800">{tip.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{tip.text}</p>
          </li>
        ))}
      </ul>

      <Link href="/" className="inline-flex text-sm font-semibold text-purple-800 hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
