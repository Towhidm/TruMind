"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
  Eye,
  Hand,
  Leaf,
  RefreshCw,
  Wind,
} from "lucide-react";
import type { CalmingActivityId } from "@/lib/calming-activities";
import styles from "./calming-animations.module.css";

const SENSES = [
  { num: 5, name: "See" },
  { num: 4, name: "Touch" },
  { num: 3, name: "Hear" },
  { num: 2, name: "Smell" },
  { num: 1, name: "Taste" },
] as const;

const STRETCH_ICONS = [
  { icon: RefreshCw, label: "Shoulder rolls" },
  { icon: ArrowRightFromLine, label: "Tilt right" },
  { icon: ArrowLeftFromLine, label: "Tilt left" },
  { icon: Hand, label: "Hands & shake" },
  { icon: Wind, label: "Slow breath" },
] as const;

interface ActivityAnimationProps {
  activityId: CalmingActivityId;
  stepIndex: number;
}

export default function ActivityAnimation({ activityId, stepIndex }: ActivityAnimationProps) {
  if (activityId === "breathing") {
    return <BreathingAnimation />;
  }
  if (activityId === "grounding") {
    return <GroundingAnimation stepIndex={stepIndex} />;
  }
  return <StretchIcons stepIndex={stepIndex} />;
}

function BreathingAnimation() {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("out");
  const [count, setCount] = useState(4);

  useEffect(() => {
    const phases: Array<"in" | "hold" | "out"> = ["in", "hold", "out"];
    let phaseIdx = 0;

    // Start small, then grow so breathe-in size change is visible
    const start = window.setTimeout(() => {
      setPhase("in");
      setCount(4);
    }, 80);

    const countTimer = window.setInterval(() => {
      setCount((c) => (c <= 1 ? 4 : c - 1));
    }, 1000);

    const phaseTimer = window.setInterval(() => {
      phaseIdx = (phaseIdx + 1) % phases.length;
      setPhase(phases[phaseIdx]);
      setCount(4);
    }, 4000);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(countTimer);
      window.clearInterval(phaseTimer);
    };
  }, []);

  const sizeClass =
    phase === "in"
      ? styles.breathGrow
      : phase === "hold"
        ? styles.breathHold
        : styles.breathShrink;

  const label = phase === "in" ? "Breathe in" : phase === "hold" ? "Hold" : "Breathe out";

  return (
    <div className={styles.breathWrap} aria-live="polite">
      <div className={`${styles.breathOrb} ${sizeClass}`}>
        <span className={styles.breathLabel}>{label}</span>
        <span className={styles.breathCount}>{count}</span>
      </div>
    </div>
  );
}

function GroundingAnimation({ stepIndex }: { stepIndex: number }) {
  return (
    <div className={styles.groundWrap}>
      <div className={styles.groundOrb}>
        {stepIndex === 0 ? (
          <Eye className="h-7 w-7" />
        ) : stepIndex === 1 ? (
          <Hand className="h-7 w-7" />
        ) : stepIndex === 2 ? (
          <Wind className="h-7 w-7" />
        ) : (
          <Leaf className="h-7 w-7" />
        )}
      </div>
      <div className={styles.senseRow}>
        {SENSES.map((sense, i) => {
          const done = i < stepIndex;
          const active = i === stepIndex;
          return (
            <div
              key={sense.num}
              className={`${styles.senseChip} ${active ? styles.senseChipActive : ""} ${done ? styles.senseChipDone : ""}`}
            >
              <span className={styles.senseNum}>{sense.num}</span>
              <span className={styles.senseName}>{sense.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StretchIcons({ stepIndex }: { stepIndex: number }) {
  const current = STRETCH_ICONS[Math.min(stepIndex, STRETCH_ICONS.length - 1)];
  const Icon = current.icon;

  return (
    <div className={styles.stretchIconWrap}>
      <div className={styles.stretchIconBox}>
        <Icon className="h-14 w-14 text-teal-600" strokeWidth={1.5} />
      </div>
      <p className={styles.stretchIconLabel}>{current.label}</p>
      <div className={styles.stretchIconRow}>
        {STRETCH_ICONS.map((item, i) => {
          const StepIcon = item.icon;
          const active = i === stepIndex;
          const done = i < stepIndex;
          return (
            <div
              key={item.label}
              className={`${styles.stretchMini} ${active ? styles.stretchMiniActive : ""} ${done ? styles.stretchMiniDone : ""}`}
              title={item.label}
            >
              <StepIcon className="h-4 w-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
