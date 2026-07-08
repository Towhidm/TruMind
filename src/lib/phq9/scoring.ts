import { PHQ9_QUESTIONS, SEVERITY_RANGES } from "./constants";
import type { PhqAnswer, PhqScore, PhqSeverity } from "./types";

export function getPhqQuestion(id: number) {
  return PHQ9_QUESTIONS.find((q) => q.id === id);
}

export function calculateTotalScore(answers: PhqAnswer[]): number {
  return answers.reduce((sum, a) => sum + a.score, 0);
}

export function scoreToSeverity(total: number): {
  key: PhqSeverity;
  label: string;
} {
  const range = SEVERITY_RANGES.find((r) => total >= r.min && total <= r.max);
  return range
    ? { key: range.key, label: range.label }
    : { key: "severe", label: "Severe" };
}

export function shouldShowQ9Support(questionId: number, score: PhqScore): boolean {
  return questionId === 9 && score > 0;
}

export function getSeverityExplanation(key: PhqSeverity): string {
  const explanations: Record<PhqSeverity, string> = {
    minimal: "Your responses suggest minimal symptoms right now. Keep taking care of yourself and check in with how you feel over time.",
    mild: "Your responses suggest mild symptoms. It may help to talk with someone you trust and pay attention to your daily habits.",
    moderate: "Your responses suggest moderate symptoms. Consider speaking with a counselor or healthcare provider for support.",
    moderately_severe: "Your responses suggest moderately severe symptoms. We encourage you to reach out to a mental health professional soon.",
    severe: "Your responses suggest severe symptoms. Please consider contacting a mental health professional or crisis support as soon as possible.",
  };
  return explanations[key];
}
