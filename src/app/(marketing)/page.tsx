import Link from "next/link";
import { auth } from "@/lib/auth";
import homeStyles from "@/components/public/home.module.css";

export default async function HomePage() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <div className={homeStyles.content}>
      <section className={homeStyles.hero}>
        <div className={homeStyles.heroCopy}>
          <p className={homeStyles.brand}>🧠 TruMind · Mental Health Welfare</p>
          <h1 className={homeStyles.headline}>
            Your Mental
            <br />
            Well-being
            <br />
            <span className={homeStyles.accent}>Matters</span>
          </h1>
          <div className={homeStyles.underline} />
          <p className={homeStyles.lead}>
            TruMind helps you notice how you feel through guided stories, a simple daily mood
            check-in, and gentle calming activities — private, optional, and never a medical
            diagnosis.
          </p>

          <div className={homeStyles.actions}>
            {isLoggedIn ? (
              <Link href="/dashboard" className={homeStyles.btnPrimary}>
                Open Dashboard
              </Link>
            ) : (
              <>
                <Link href="/signup" className={homeStyles.btnPrimary}>
                  Get started free
                </Link>
                <Link href="/login" className={homeStyles.btnSecondary}>
                  Sign in
                </Link>
              </>
            )}
            <Link href="/stories" className={homeStyles.btnGhost}>
              Browse stories
            </Link>
          </div>

          <p className={homeStyles.note}>
            Playing stories, saving mood check-ins, and calming activities need an account.
          </p>
        </div>

        <aside className={homeStyles.panel}>
          <div className={homeStyles.privacyCard}>
            <div className={homeStyles.privacyIcon}>🛡️</div>
            <div>
              <strong>Your privacy comes first</strong>
              <span>Answers and scores stay in your account — we do not sell your data.</span>
            </div>
          </div>
          <div className={homeStyles.birds}>〜 ✦ 〜</div>
        </aside>
      </section>

      <section className={homeStyles.features}>
        {[
          {
            title: "Story self-checks",
            text: "Step into Life, University, or Professional stories. Your choices quietly reflect how you have been feeling.",
          },
          {
            title: "Daily mood check-in",
            text: "One direct tap each day — from very low to great — so you can see your mood trend over time.",
          },
          {
            title: "Calming activities",
            text: "After harder results, try breathing, grounding, or stretch exercises. Optional, with no score and no fail.",
          },
        ].map((item) => (
          <article key={item.title} className={homeStyles.featureCard}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className={homeStyles.ctaBand}>
        <div>
          <h2>Ready to begin?</h2>
          <p>Create a free account to play stories and track your well-being journey.</p>
        </div>
        {!isLoggedIn ? (
          <Link href="/signup" className={homeStyles.btnPrimary}>
            Create account
          </Link>
        ) : (
          <Link href="/how-it-works" className={homeStyles.btnSecondary}>
            How it works
          </Link>
        )}
      </section>
    </div>
  );
}
