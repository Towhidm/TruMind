"use client";

import Link from "next/link";
import { Button, Card } from "antd";
import { getSeverityExplanation } from "@/lib/phq9/scoring";
import SeverityBadge from "./SeverityBadge";
import type { PhqSeverity } from "@/lib/phq9/types";

interface ResultScreenProps {
  storyTitle: string;
  storySlug: string;
  totalScore: number;
  severity: PhqSeverity;
  severityLabel: string;
  answers: {
    questionId: number;
    questionText: string;
    score: number;
    choiceLabel: string;
  }[];
  completedAt: string;
}

export default function ResultScreen({
  storyTitle,
  storySlug,
  totalScore,
  severity,
  severityLabel,
  answers,
  completedAt,
}: ResultScreenProps) {
  const explanation = getSeverityExplanation(severity);
  const date = new Date(completedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      <Card className="border-purple-100">
        <div className="text-center">
          <p className="text-sm text-slate-500">You finished</p>
          <h2 className="mt-1 text-xl font-bold text-slate-800 sm:text-2xl">{storyTitle}</h2>
          <p className="mt-1 text-xs text-slate-400">{date}</p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="text-5xl font-bold text-[#7c3aed]">{totalScore}</div>
          <p className="text-sm text-slate-500">Total Score (PHQ-9)</p>
          <SeverityBadge severity={severity} label={severityLabel} />
        </div>

        <p className="mt-6 rounded-xl bg-purple-50 p-4 text-sm leading-relaxed text-slate-600">
          {explanation}
        </p>

        <p className="mt-4 text-xs text-slate-400">
          This result is a self-assessment tool, not a medical diagnosis. It does not replace
          professional care. Please speak with a qualified healthcare provider for clinical
          guidance.
        </p>
      </Card>

      <Card title="Your Responses" className="border-purple-100">
        <ul className="divide-y divide-purple-50">
          {answers.map((item) => (
            <li key={item.questionId} className="py-3">
              <p className="text-xs text-slate-400">Question {item.questionId}</p>
              <p className="text-sm text-slate-700">{item.choiceLabel}</p>
            </li>
          ))}
        </ul>
      </Card>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href={`/dashboard/stories/${storySlug}`} className="flex-1">
          <Button block size="large">
            Play Again
          </Button>
        </Link>
        <Link href="/dashboard" className="flex-1">
          <Button type="primary" block size="large">
            Return to TruMind
          </Button>
        </Link>
      </div>
    </div>
  );
}
