import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
      <article className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-8">
        <Link href="/" className="text-sm font-semibold text-purple-800 hover:underline">
          ← Back to home
        </Link>

        <h1 className="mt-4 text-2xl font-bold text-slate-900">Terms of Use</h1>
        <p className="mt-2 text-sm text-slate-500">Mental Health Welfare / TruMind</p>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            By creating an account, you agree to use this app for personal self-reflection and
            well-being support only.
          </p>

          <h2 className="text-base font-semibold text-slate-900">What this app is</h2>
          <p>
            This app offers interactive stories. Your choices help create a PHQ-9 style self-check
            score and severity band. Results are saved to your account history (Analytics) so you
            can see changes over time.
          </p>

          <h2 className="text-base font-semibold text-slate-900">What this app is not</h2>
          <p>
            This is <strong>not</strong> a medical diagnosis, emergency service, or substitute for
            professional mental health care. If you are in crisis or feel unsafe, contact local
            emergency services or a trusted professional right away.
          </p>

          <h2 className="text-base font-semibold text-slate-900">Your responsibilities</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>You must be 18 or older to use this app.</li>
            <li>Keep your login details private.</li>
            <li>Use the stories honestly for your own reflection.</li>
            <li>Do not try to harm the service or other users&apos; data.</li>
          </ul>

          <h2 className="text-base font-semibold text-slate-900">Account</h2>
          <p>
            You are responsible for activity under your account. We may update these terms as the
            product grows. Continued use means you accept the updated terms.
          </p>
        </div>
      </article>
    </div>
  );
}
