import Link from "next/link";
import { Q9_SUPPORT_RESOURCES } from "@/lib/phq9/constants";

export default function SupportHelpPage() {
  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">Help resources</h2>
        <p className="mt-2 text-sm text-slate-500">
          These contacts are for hard moments. They are not part of TruMind chat — they are
          outside support lines you can reach directly.
        </p>
      </div>

      <ul className="space-y-3">
        {Q9_SUPPORT_RESOURCES.map((r) => (
          <li key={r.name} className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm">
            <p className="font-semibold text-purple-700">{r.name}</p>
            <p className="mt-1 text-sm text-slate-600">{r.contact}</p>
          </li>
        ))}
      </ul>

      <p className="text-xs text-slate-400">
        TruMind is not a medical service. If you are in danger now, call local emergency help.
      </p>

      <Link
        href="/dashboard"
        className="inline-flex text-sm font-semibold text-purple-700 hover:underline"
      >
        ← Back to stories
      </Link>
    </div>
  );
}
