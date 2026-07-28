import Link from "next/link";
import { BookOpen, HeartHandshake, LineChart, Shield } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: BookOpen,
      title: "Pick a story",
      text: "Choose a Life, University, or Professional story. Each one has 9 short chapters.",
    },
    {
      icon: HeartHandshake,
      title: "Make choices",
      text: "Your choices feel like a story, but they quietly map to a PHQ-9 style self-check.",
    },
    {
      icon: LineChart,
      title: "See your result",
      text: "When you finish, you get a total score and a severity band — not a medical diagnosis.",
    },
    {
      icon: Shield,
      title: "Optional support",
      text: "If stress looks higher, you can try a short calming activity. Help resources are always available.",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">How TruMind works</h2>
        <p className="mt-2 text-sm text-slate-500">
          TruMind uses guided stories to help you notice how you have been feeling. It is a
          self-reflection tool, not a doctor or emergency service.
        </p>
      </div>

      <ol className="space-y-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl border border-purple-100 bg-white p-4 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-700">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-purple-600">Step {i + 1}</p>
                <h3 className="mt-0.5 font-semibold text-slate-800">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-4 text-sm text-amber-900">
        If you are in immediate danger, contact local emergency services. TruMind cannot provide
        crisis intervention.
      </div>

      <Link
        href="/dashboard"
        className="inline-flex text-sm font-semibold text-purple-700 hover:underline"
      >
        ← Back to stories
      </Link>
    </div>
  );
}
