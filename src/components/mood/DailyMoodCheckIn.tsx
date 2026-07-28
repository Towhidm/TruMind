"use client";

import { useState, useTransition } from "react";
import { App } from "antd";
import { MOOD_OPTIONS } from "@/lib/mood";
import { saveMoodCheckIn } from "@/actions/mood.actions";
import type { MoodLevel } from "@/models/MoodCheckIn";

interface DailyMoodCheckInProps {
  initialMood: MoodLevel | null;
  dayKey: string;
}

function localDayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function DailyMoodCheckIn({ initialMood, dayKey }: DailyMoodCheckInProps) {
  const { message } = App.useApp();
  const [selected, setSelected] = useState<MoodLevel | null>(initialMood);
  const [savedMood, setSavedMood] = useState<MoodLevel | null>(initialMood);
  const [isPending, startTransition] = useTransition();

  const handleSelect = (mood: MoodLevel) => {
    setSelected(mood);
    startTransition(async () => {
      const key = dayKey || localDayKey();
      const result = await saveMoodCheckIn(mood, key);
      if (!result.ok) {
        message.error(result.error);
        setSelected(savedMood);
        return;
      }
      setSavedMood(mood);
      message.success("Mood saved for today");
    });
  };

  const savedLabel = MOOD_OPTIONS.find((o) => o.value === savedMood)?.label;

  return (
    <div className="mb-6 rounded-2xl border border-purple-100 bg-white p-4 shadow-sm sm:mb-8 sm:p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-wide text-purple-600 uppercase">
            Daily check-in
          </p>
          <h2 className="mt-0.5 text-base font-bold text-slate-800 sm:text-lg">
            How do you feel today?
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Tap once to save. You can change it anytime today. This is a direct self-check, not a
            diagnosis.
          </p>
        </div>
        {savedMood && (
          <p className="text-xs font-medium text-green-700 sm:text-right">
            Today: {savedLabel}
          </p>
        )}
      </div>

      <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
        {MOOD_OPTIONS.map((option) => {
          const isActive = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              disabled={isPending}
              onClick={() => handleSelect(option.value)}
              className={`flex flex-col items-center gap-1 rounded-xl border px-1 py-3 transition sm:px-2 ${
                isActive
                  ? "border-purple-400 bg-purple-50 shadow-sm ring-2 ring-purple-200"
                  : "border-slate-100 bg-slate-50/60 hover:border-purple-200 hover:bg-purple-50/50"
              } disabled:opacity-60`}
            >
              <span className="text-2xl sm:text-3xl" aria-hidden>
                {option.emoji}
              </span>
              <span
                className={`text-[10px] font-semibold sm:text-xs ${
                  isActive ? "text-purple-700" : "text-slate-500"
                }`}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
