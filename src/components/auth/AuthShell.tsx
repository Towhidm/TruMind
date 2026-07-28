import type { ReactNode } from "react";
import BackgroundScene from "./BackgroundScene";
import styles from "./login.module.css";

function HeartIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
      <path
        d="M18 30s-13-8.5-13-17a8 8 0 0116 0 8 8 0 0116 0c0 8.5-13 17-13 17z"
        fill="url(#heartGrad)"
        stroke="#7c3aed"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient id="heartGrad" x1="5" y1="5" x2="31" y2="31" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #d8d0f8 0%, #c4b5fd 30%, #b8a7f0 55%, #d4a5c9 75%, #e8b4b8 100%)",
      }}
    >
      <BackgroundScene />

      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />

      <div className={styles.page}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🧠</span>
            Mental Health Welfare
          </div>

          <h1 className={styles.headline}>
            Your Mental
            <br />
            Well-being
            <br />
            <span className={styles.accent}>Matters</span>
          </h1>
          <div className={styles.underlineBar} />

          <p className={styles.tagline}>
            Take a step towards better mental health. Play guided stories and understand your
            emotional well-being over time.
          </p>

          <div className={styles.birds}>〜 ✦ 〜</div>

          <div className={styles.privacyCard}>
            <div className={styles.privacyIcon}>🛡️</div>
            <div className={styles.privacyText}>
              <strong>Your privacy is our priority</strong>
              <span>Your story answers and scores stay confidential in your account.</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIconWrap}>
            <div className={styles.cardIcon}>
              <HeartIcon />
            </div>
          </div>

          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardSub}>{subtitle}</p>

          {children}
        </div>
      </div>
    </div>
  );
}
