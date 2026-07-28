import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-10">
      <article className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-8">
        <Link href="/" className="text-sm font-semibold text-purple-800 hover:underline">
          ← Back to home
        </Link>

        <h1 className="mt-4 text-2xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Mental Health Welfare / TruMind</p>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            We take your privacy seriously. This policy explains what we collect for the story-based
            well-being experience and how it is used.
          </p>

          <h2 className="text-base font-semibold text-slate-900">Information we collect</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Account data:</strong> name, email, and a hashed password so you can sign in.
            </li>
            <li>
              <strong>Age:</strong> the age you enter at signup (you must be 18 or older).
            </li>
            <li>
              <strong>Gender:</strong> Male or Female, chosen at signup.
            </li>
            <li>
              <strong>Terms acceptance:</strong> the time you accepted these policies.
            </li>
            <li>
              <strong>Story progress:</strong> which chapter/scene you are on and your in-story
              choices.
            </li>
            <li>
              <strong>Assessment results:</strong> answers mapped to PHQ-9 items, total score,
              severity label, and completion date — shown in Analytics.
            </li>
          </ul>

          <h2 className="text-base font-semibold text-slate-900">How we use it</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>To keep you signed in and show your dashboard.</li>
            <li>To resume stories and let you replay completed ones.</li>
            <li>To show your personal score history and trends.</li>
            <li>To improve the product experience (for example, story flow).</li>
          </ul>

          <h2 className="text-base font-semibold text-slate-900">How we store it</h2>
          <p>
            Your data is stored in our database linked to your user account. Passwords are stored as
            secure hashes, not plain text. We do not sell your personal or assessment data.
          </p>

          <h2 className="text-base font-semibold text-slate-900">Sensitive well-being data</h2>
          <p>
            Story choices and PHQ-9 style scores are sensitive. They are treated as confidential
            account information. Support prompts (such as after certain high-risk story moments) are
            informational only and do not replace professional help.
          </p>

          <h2 className="text-base font-semibold text-slate-900">Your choices</h2>
          <p>
            You can stop using the app at any time. If you need account deletion help later, contact
            the project owner through the channels they provide.
          </p>
        </div>
      </article>
    </div>
  );
}
