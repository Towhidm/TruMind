"use server";

import { connectDB } from "@/lib/mongodb";
import { requireCurrentUser } from "@/lib/get-current-user";
import { getSeverityExplanation } from "@/lib/phq9/scoring";
import { Assessment } from "@/models/Assessment";
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
}

export async function getAnalytics(): Promise<AnalyticsData> {
  const user = await requireCurrentUser();
  await connectDB();

  const assessments = await Assessment.find({ userId: user._id })
    .populate({ path: "storyId", populate: { path: "categoryId" } })
    .sort({ completedAt: -1 })
    .lean();

  const uniqueStoryIds = new Set(assessments.map((a) => a.storyId.toString()));

  const totalScore = assessments.reduce((sum, a) => sum + a.totalScore, 0);
  const averageScore = assessments.length > 0 ? Math.round((totalScore / assessments.length) * 10) / 10 : 0;

  const categoryMap = new Map<string, { count: number; total: number }>();

  const recentResults = assessments.slice(0, 5).map((a) => {
    const story = a.storyId as unknown as {
      title: string;
      slug: string;
      categoryId?: { name: string };
    };
    const catName = story?.categoryId?.name ?? "Other";
    const existing = categoryMap.get(catName) ?? { count: 0, total: 0 };
    categoryMap.set(catName, {
      count: existing.count + 1,
      total: existing.total + a.totalScore,
    });

    return {
      id: a._id.toString(),
      storyTitle: story?.title ?? "Unknown",
      storySlug: story?.slug ?? "",
      totalScore: a.totalScore,
      severityLabel: a.severityLabel,
      completedAt: a.completedAt.toISOString(),
    };
  });

  assessments.forEach((a) => {
    const story = a.storyId as unknown as { categoryId?: { name: string } };
    const catName = story?.categoryId?.name ?? "Other";
    if (!recentResults.find((r) => r.id === a._id.toString())) {
      const existing = categoryMap.get(catName) ?? { count: 0, total: 0 };
      if (!categoryMap.has(catName) || existing.count === 0) {
        categoryMap.set(catName, {
          count: existing.count + 1,
          total: existing.total + a.totalScore,
        });
      }
    }
  });

  // Rebuild category breakdown from all assessments
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

  const scoreTrend = [...assessments]
    .reverse()
    .map((a) => {
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

  return {
    totalAssessments: assessments.length,
    completedStories: uniqueStoryIds.size,
    averageScore,
    recentResults,
    scoreTrend,
    categoryBreakdown,
    assessmentHistory,
  };
}

export async function getSeverityExplanationAction(severity: PhqSeverity) {
  return getSeverityExplanation(severity);
}
