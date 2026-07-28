import BackgroundScene from "@/components/auth/BackgroundScene";
import styles from "@/components/auth/login.module.css";

const GRADIENT =
  "linear-gradient(135deg, #d8d0f8 0%, #c4b5fd 30%, #b8a7f0 55%, #d4a5c9 75%, #e8b4b8 100%)";

export default function MarketingBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" style={{ background: GRADIENT }}>
      <BackgroundScene />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
}
