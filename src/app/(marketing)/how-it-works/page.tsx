import Link from "next/link";
import { BookOpen, HeartHandshake, LineChart, Shield } from "lucide-react";

export default function HowItWorksPublicPage() {
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
      text: "If stress looks higher, you can try a short calming activity after you sign in.",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6 px-4 py-8 sm:px-6 sm:py-10">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">How TruMind works</h1>
        <p className="mt-2 text-sm text-slate-600">
          TruMind uses guided stories and optional check-ins to help you notice how you have been
          feeling. It is a self-reflection tool, not a doctor or emergency service.
        </p>
      </div>

      <ol className="space-y-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-700">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-purple-600">Step {i + 1}</p>
                <h2 className="mt-0.5 font-semibold text-slate-800">{step.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="rounded-2xl border border-amber-200/70 bg-amber-50/80 p-4 text-sm text-amber-900 backdrop-blur-md">
        Playing stories and saving check-ins requires an account. If you are in immediate danger,
        contact local emergency services.
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/signup" className="text-sm font-semibold text-purple-800 hover:underline">
          Create account
        </Link>
        <Link href="/stories" className="text-sm font-semibold text-slate-700 hover:underline">
          Browse stories
        </Link>
      </div>
    </div>
  );
}
