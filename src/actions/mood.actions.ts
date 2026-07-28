"use server";

import { revalidatePath } from "next/cache";
import { requireCurrentUser } from "@/lib/get-current-user";
import { connectDB } from "@/lib/mongodb";
import { MoodCheckIn, type MoodLevel } from "@/models/MoodCheckIn";

function todayKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export async function getTodayMoodCheckIn(dayKey?: string) {
  const user = await requireCurrentUser();
  await connectDB();

  const key = dayKey && /^\d{4}-\d{2}-\d{2}$/.test(dayKey) ? dayKey : todayKey();
  const entry = await MoodCheckIn.findOne({ userId: user._id, dayKey: key })
    .select("mood dayKey updatedAt")
    .lean();

  if (!entry) return null;

  return {
    mood: entry.mood as MoodLevel,
    dayKey: entry.dayKey,
    updatedAt: entry.updatedAt.toISOString(),
  };
}

export async function saveMoodCheckIn(mood: number, dayKey?: string) {
  if (![1, 2, 3, 4, 5].includes(mood)) {
    return { ok: false as const, error: "Please choose a mood from 1 to 5." };
  }

  const user = await requireCurrentUser();
  await connectDB();

  const key = dayKey && /^\d{4}-\d{2}-\d{2}$/.test(dayKey) ? dayKey : todayKey();

  await MoodCheckIn.findOneAndUpdate(
    { userId: user._id, dayKey: key },
    {
      userId: user._id,
      dayKey: key,
      mood: mood as MoodLevel,
    },
    { upsert: true, returnDocument: "after" }
  );

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/analytics");

  return { ok: true as const };
}

export async function getMoodHistory(limit = 14) {
  const user = await requireCurrentUser();
  await connectDB();

  const entries = await MoodCheckIn.find({ userId: user._id })
    .select("mood dayKey updatedAt")
    .sort({ dayKey: -1 })
    .limit(limit)
    .lean();

  return entries
    .map((e) => ({
      mood: e.mood as MoodLevel,
      dayKey: e.dayKey,
      updatedAt: e.updatedAt.toISOString(),
    }))
    .reverse();
}
