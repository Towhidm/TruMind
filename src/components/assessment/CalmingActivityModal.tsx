"use client";

import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { CheckCircle2, Hand, Leaf, Wind } from "lucide-react";
import {
  CALMING_ACTIVITIES,
  getCalmingActivity,
  type CalmingActivityId,
} from "@/lib/calming-activities";
import ActivityAnimation from "./ActivityAnimation";
import styles from "./calming-animations.module.css";

const ICONS: Record<CalmingActivityId, typeof Wind> = {
  breathing: Wind,
  grounding: Leaf,
  stretch: Hand,
};

type Phase = "pick" | "active" | "done";

interface CalmingActivityModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CalmingActivityModal({ open, onClose }: CalmingActivityModalProps) {
  const [phase, setPhase] = useState<Phase>("pick");
  const [selectedId, setSelectedId] = useState<CalmingActivityId | null>(null);
  const [stepIndex, setStepIndex] = useState(0);

  const activity = selectedId ? getCalmingActivity(selectedId) : null;

  useEffect(() => {
    if (!open) {
      setPhase("pick");
      setSelectedId(null);
      setStepIndex(0);
    }
  }, [open]);

  const startActivity = (id: CalmingActivityId) => {
    setSelectedId(id);
    setStepIndex(0);
    setPhase("active");
  };

  const nextStep = () => {
    if (!activity) return;
    if (stepIndex >= activity.steps.length - 1) {
      setPhase("done");
      return;
    }
    setStepIndex((s) => s + 1);
  };

  const resetToPick = () => {
    setPhase("pick");
    setSelectedId(null);
    setStepIndex(0);
  };

  const title =
    phase === "pick"
      ? "Choose an activity"
      : phase === "done"
        ? "Nice work"
        : (activity?.title ?? "Calming activity");

  return (
    <Modal
      title={title}
      open={open}
      onCancel={onClose}
      footer={null}
      destroyOnHidden
      centered
      width={520}
    >
      {phase === "pick" && (
        <div className="space-y-4">
          <p className="text-sm text-slate-500">
            Pick one gentle activity. No score. No fail. You can close anytime.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {CALMING_ACTIVITIES.map((item) => {
              const Icon = ICONS[item.id];
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => startActivity(item.id)}
                  className={`${styles.pickCard} rounded-xl border border-teal-100 bg-teal-50/40 p-4 text-left transition hover:border-teal-300 hover:bg-teal-50`}
                >
                  <Icon className="h-5 w-5 text-teal-600" />
                  <p className="mt-2 text-sm font-semibold text-slate-800">{item.shortLabel}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.durationLabel}</p>
                </button>
              );
            })}
          </div>
          <div className="flex justify-end">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      )}

      {phase === "active" && activity && selectedId && (
        <div className="space-y-4">
          <div>
            <p className="text-xs font-medium text-teal-700">
              Step {stepIndex + 1} of {activity.steps.length}
            </p>
            <p className="mt-1 text-sm text-slate-500">{activity.description}</p>
          </div>

          <ActivityAnimation activityId={selectedId} stepIndex={stepIndex} />

          <p
            key={stepIndex}
            className={`${styles.stepText} rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700`}
          >
            {activity.steps[stepIndex]}
          </p>

          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button onClick={resetToPick}>Choose another</Button>
            <Button type="primary" onClick={nextStep}>
              {stepIndex >= activity.steps.length - 1 ? "Finish" : "Next step"}
            </Button>
          </div>
        </div>
      )}

      {phase === "done" && activity && (
        <div className={`${styles.donePop} space-y-4 text-center`}>
          <CheckCircle2 className="mx-auto h-10 w-10 text-teal-600" />
          <p className="text-sm text-slate-500">
            You took a moment for yourself with {activity.title.toLowerCase()}. That counts.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Button onClick={resetToPick}>Try another</Button>
            <Button type="primary" onClick={onClose}>
              Done
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
