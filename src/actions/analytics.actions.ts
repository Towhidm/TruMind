"use server";

import { connectDB } from "@/lib/mongodb";
import { requireCurrentUser } from "@/lib/get-current-user";
import { getSeverityExplanation } from "@/lib/phq9/scoring";
import { Assessment } from "@/models/Assessment";
import { MoodCheckIn, type MoodLevel } from "@/models/MoodCheckIn";
import type { PhqSeverity } from "@/lib/phq9/types";

export interface AnalyticsData {
  totalAssessments: number;
  completedStories: number;
  averageScore: number;
  recentResults: {
    id: string;
    storyTitle: string;
    storySlug: string;
    totalScore: number;
    severityLabel: string;
    completedAt: string;
  }[];
  scoreTrend: { date: string; score: number; storyTitle: string }[];
  categoryBreakdown: { category: string; count: number; avgScore: number }[];
  assessmentHistory: {
    id: string;
    storyTitle: string;
    storySlug: string;
    totalScore: number;
    severity: string;
    severityLabel: string;
    completedAt: string;
    answers: { questionId: number; score: number; choiceLabel: string }[];
  }[];
  moodTrend: { dayKey: string; mood: MoodLevel }[];
  averageMood: number | null;
  moodCheckInCount: number;
}

export async function getAnalytics(): Promise<AnalyticsData> {
  const user = await requireCurrentUser();
  await connectDB();

  const [assessments, moodEntries] = await Promise.all([
    Assessment.find({ userId: user._id })
      .populate({
        path: "storyId",
        select: "title slug categoryId",
        populate: { path: "categoryId", select: "name" },
      })
      .select("storyId totalScore severity severityLabel completedAt answers")
      .sort({ completedAt: -1 })
      .limit(50)
      .lean(),
    MoodCheckIn.find({ userId: user._id })
      .select("mood dayKey")
      .sort({ dayKey: -1 })
      .limit(14)
      .lean(),
  ]);

  const uniqueStoryIds = new Set(
    assessments.map((a) => {
      const sid = a.storyId as unknown as { _id?: { toString(): string } } | string;
      return typeof sid === "string" ? sid : (sid?._id?.toString() ?? String(sid));
    })
  );

  const totalScore = assessments.reduce((sum, a) => sum + a.totalScore, 0);
  const averageScore =
    assessments.length > 0 ? Math.round((totalScore / assessments.length) * 10) / 10 : 0;

  const recentResults = assessments.slice(0, 5).map((a) => {
    const story = a.storyId as unknown as { title: string; slug: string };
    return {
      id: a._id.toString(),
      storyTitle: story?.title ?? "Unknown",
      storySlug: story?.slug ?? "",
      totalScore: a.totalScore,
      severityLabel: a.severityLabel,
      completedAt: a.completedAt.toISOString(),
    };
  });

  const catBreakdown = new Map<string, { count: number; total: number }>();
  assessments.forEach((a) => {
    const story = a.storyId as unknown as { categoryId?: { name: string } };
    const catName = story?.categoryId?.name ?? "Other";
    const ex = catBreakdown.get(catName) ?? { count: 0, total: 0 };
    catBreakdown.set(catName, { count: ex.count + 1, total: ex.total + a.totalScore });
  });

  const categoryBreakdown = Array.from(catBreakdown.entries()).map(([category, data]) => ({
    category,
    count: data.count,
    avgScore: data.count > 0 ? Math.round((data.total / data.count) * 10) / 10 : 0,
  }));

  const scoreTrend = [...assessments].reverse().map((a) => {
    const story = a.storyId as unknown as { title: string };
    return {
      date: a.completedAt.toISOString().split("T")[0],
      score: a.totalScore,
      storyTitle: story?.title ?? "Unknown",
    };
  });

  const assessmentHistory = assessments.map((a) => {
    const story = a.storyId as unknown as { title: string; slug: string };
    return {
      id: a._id.toString(),
      storyTitle: story?.title ?? "Unknown",
      storySlug: story?.slug ?? "",
      totalScore: a.totalScore,
      severity: a.severity,
      severityLabel: a.severityLabel,
      completedAt: a.completedAt.toISOString(),
      answers: a.answers.map((ans: { questionId: number; score: number; choiceLabel: string }) => ({
        questionId: ans.questionId,
        score: ans.score,
        choiceLabel: ans.choiceLabel,
      })),
    };
  });

  const moodTrend = [...moodEntries]
    .reverse()
    .map((e) => ({ dayKey: e.dayKey, mood: e.mood as MoodLevel }));

  const moodCheckInCount = moodEntries.length;
  const averageMood =
    moodCheckInCount > 0
      ? Math.round(
          (moodEntries.reduce((sum, e) => sum + e.mood, 0) / moodCheckInCount) * 10
        ) / 10
      : null;

  return {
    totalAssessments: assessments.length,
    completedStories: uniqueStoryIds.size,
    averageScore,
    recentResults,
    scoreTrend,
    categoryBreakdown,
    assessmentHistory,
    moodTrend,
    averageMood,
    moodCheckInCount,
  };
}

export async function getSeverityExplanationAction(severity: PhqSeverity) {
  return getSeverityExplanation(severity);
}
