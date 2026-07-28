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
    text: "Use Breathing, Grounding, or Stretch from the Support menu when stress feels high.",
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

export default function SelfCareTipsPage() {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">Self-care tips</h2>
        <p className="mt-2 text-sm text-slate-500">
          Simple ideas you can use anytime. They are support tools, not a cure or diagnosis.
        </p>
      </div>

      <ul className="space-y-3">
        {TIPS.map((tip) => (
          <li key={tip.title} className="rounded-2xl border border-teal-100 bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-slate-800">{tip.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{tip.text}</p>
          </li>
        ))}
      </ul>

      <Link
        href="/dashboard"
        className="inline-flex text-sm font-semibold text-purple-700 hover:underline"
      >
        ← Back to stories
      </Link>
    </div>
  );
}
