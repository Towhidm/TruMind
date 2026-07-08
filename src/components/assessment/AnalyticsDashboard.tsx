"use client";

import { Progress, Tag } from "antd";
import {
  Activity,
  BarChart3,
  BookOpen,
  Calendar,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import type { AnalyticsData } from "@/actions/analytics.actions";

interface AnalyticsDashboardProps {
  data: AnalyticsData;
}

const SEVERITY_STYLES: Record<string, { color: string; bg: string; border: string }> = {
  Minimal: { color: "#16a34a", bg: "bg-green-50", border: "border-green-200" },
  Mild: { color: "#2563eb", bg: "bg-blue-50", border: "border-blue-200" },
  Moderate: { color: "#ea580c", bg: "bg-orange-50", border: "border-orange-200" },
  "Moderately Severe": { color: "#dc2626", bg: "bg-red-50", border: "border-red-200" },
  Severe: { color: "#7f1d1d", bg: "bg-red-100", border: "border-red-300" },
};

const CATEGORY_COLORS = [
  "#7c3aed",
  "#2563eb",
  "#059669",
  "#ea580c",
  "#db2777",
  "#0891b2",
  "#ca8a04",
  "#4f46e5",
];

function getSeverityStyle(label: string) {
  return SEVERITY_STYLES[label] ?? SEVERITY_STYLES.Minimal;
}

function StatCard({
  title,
  value,
  suffix,
  icon: Icon,
  gradient,
}: {
  title: string;
  value: number | string;
  suffix?: string;
  icon: React.ElementType;
  gradient: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/60 p-5 shadow-sm ${gradient}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-white/80">{title}</p>
          <p className="mt-2 text-3xl font-bold text-white">
            {value}
            {suffix && <span className="ml-1 text-lg font-medium text-white/80">{suffix}</span>}
          </p>
        </div>
        <div className="rounded-xl bg-white/20 p-2.5">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
}

export default function AnalyticsDashboard({ data }: AnalyticsDashboardProps) {
  const maxTrendScore = Math.max(...data.scoreTrend.map((t) => t.score), 1);
  const maxCategoryCount = Math.max(...data.categoryBreakdown.map((c) => c.count), 1);

  const trendDirection =
    data.scoreTrend.length >= 2
      ? data.scoreTrend[data.scoreTrend.length - 1].score -
        data.scoreTrend[data.scoreTrend.length - 2].score
      : 0;

  if (data.totalAssessments === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-purple-100 bg-white py-16 text-center">
        <div className="mb-4 rounded-full bg-purple-50 p-5">
          <BookOpen className="h-10 w-10 text-purple-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-700">No assessments yet</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-500">
          Complete a story on TruMind to see your colorful journey map here.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Summary stats */}
      <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Assessments"
          value={data.totalAssessments}
          icon={BarChart3}
          gradient="bg-gradient-to-br from-violet-600 to-purple-500"
        />
        <StatCard
          title="Stories Completed"
          value={data.completedStories}
          icon={BookOpen}
          gradient="bg-gradient-to-br from-blue-600 to-cyan-500"
        />
        <StatCard
          title="Average Score"
          value={data.averageScore}
          suffix="/ 27"
          icon={Activity}
          gradient="bg-gradient-to-br from-emerald-600 to-teal-500"
        />
        <StatCard
          title="Latest Trend"
          value={trendDirection === 0 ? "Stable" : trendDirection > 0 ? "Higher" : "Lower"}
          icon={trendDirection > 0 ? TrendingUp : TrendingDown}
          gradient={
            trendDirection > 0
              ? "bg-gradient-to-br from-orange-500 to-amber-500"
              : "bg-gradient-to-br from-indigo-600 to-violet-500"
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent results cards */}
        {data.recentResults.length > 0 && (
          <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-slate-800">
              <Calendar className="h-5 w-5 text-purple-500" />
              Recent Results
            </h3>
            <div className="space-y-3">
              {data.recentResults.map((item) => {
                const style = getSeverityStyle(item.severityLabel);
                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-4 rounded-xl border p-4 ${style.bg} ${style.border}`}
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
                      style={{ backgroundColor: style.color }}
                    >
                      {item.totalScore}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-slate-800">{item.storyTitle}</p>
                      <p className="text-xs text-slate-500">
                        {new Date(item.completedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <Tag color="purple" className="m-0 shrink-0">
                      {item.severityLabel}
                    </Tag>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Score trend bars */}
        {data.scoreTrend.length > 0 && (
          <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-slate-800">
              <BarChart3 className="h-5 w-5 text-purple-500" />
              Score Trend
            </h3>
            <div className="space-y-4">
              {data.scoreTrend.map((item, i) => (
                <div key={`${item.date}-${item.storyTitle}-${i}`}>
                  <div className="mb-1 flex justify-between text-xs text-slate-500">
                    <span className="truncate pr-2">{item.storyTitle}</span>
                    <span className="shrink-0 font-semibold text-purple-600">{item.score}/27</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-purple-50">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-violet-400 transition-all"
                      style={{ width: `${(item.score / maxTrendScore) * 100}%` }}
                    />
                  </div>
                  <p className="mt-0.5 text-[11px] text-slate-400">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Category breakdown */}
      {data.categoryBreakdown.length > 0 && (
        <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-base font-bold text-slate-800">Category Breakdown</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.categoryBreakdown.map((cat, i) => (
              <div
                key={cat.category}
                className="rounded-xl border border-purple-50 bg-purple-50/30 p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-slate-700">{cat.category}</span>
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-bold text-white"
                    style={{ backgroundColor: CATEGORY_COLORS[i % CATEGORY_COLORS.length] }}
                  >
                    {cat.count} done
                  </span>
                </div>
                <p className="mb-2 text-sm text-slate-500">
                  Avg score: <strong className="text-purple-600">{cat.avgScore}</strong> / 27
                </p>
                <Progress
                  percent={Math.round((cat.count / maxCategoryCount) * 100)}
                  showInfo={false}
                  strokeColor={CATEGORY_COLORS[i % CATEGORY_COLORS.length]}
                  size="small"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Timeline history */}
      {data.assessmentHistory.length > 0 && (
        <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
          <h3 className="mb-5 text-base font-bold text-slate-800">Your Journey Timeline</h3>
          <div className="relative space-y-0">
            {data.assessmentHistory.map((item, index) => {
              const style = getSeverityStyle(item.severityLabel);
              const isLast = index === data.assessmentHistory.length - 1;
              return (
                <div key={item.id} className="relative flex gap-4 pb-8">
                  {!isLast && (
                    <div className="absolute top-8 left-[15px] h-full w-0.5 bg-purple-100" />
                  )}
                  <div
                    className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: style.color }}
                  >
                    {item.totalScore}
                  </div>
                  <div className={`flex-1 rounded-xl border p-4 ${style.bg} ${style.border}`}>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-slate-800">{item.storyTitle}</p>
                        <p className="text-xs text-slate-500">
                          {new Date(item.completedAt).toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <Tag style={{ color: style.color, borderColor: style.color }}>
                        {item.severityLabel}
                      </Tag>
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {item.answers.map((a) => (
                        <div
                          key={a.questionId}
                          className="rounded-lg bg-white/60 px-3 py-2 text-xs text-slate-600"
                        >
                          <span className="font-medium text-purple-500">Ch.{a.questionId}</span>{" "}
                          {a.choiceLabel}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
