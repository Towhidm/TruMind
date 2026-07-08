export type PhqScore = 0 | 1 | 2 | 3;

export type PhqSeverity =
  | "minimal"
  | "mild"
  | "moderate"
  | "moderately_severe"
  | "severe";

export interface PhqAnswer {
  questionId: number;
  questionText: string;
  score: PhqScore;
  choiceLabel: string;
  answeredAt: Date;
}

export interface PhqQuestion {
  id: number;
  text: string;
}
