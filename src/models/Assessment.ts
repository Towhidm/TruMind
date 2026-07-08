import mongoose, { Schema, models, model } from "mongoose";
import type { PhqScore, PhqSeverity } from "@/lib/phq9/types";

export interface IAssessmentAnswer {
  questionId: number;
  questionText: string;
  score: PhqScore;
  choiceLabel: string;
  answeredAt: Date;
}

export interface IAssessment {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  storyId: mongoose.Types.ObjectId;
  answers: IAssessmentAnswer[];
  totalScore: number;
  severity: PhqSeverity;
  severityLabel: string;
  completedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AssessmentAnswerSchema = new Schema<IAssessmentAnswer>(
  {
    questionId: { type: Number, required: true },
    questionText: { type: String, required: true },
    score: { type: Number, required: true, min: 0, max: 3 },
    choiceLabel: { type: String, required: true },
    answeredAt: { type: Date, required: true },
  },
  { _id: false }
);

const AssessmentSchema = new Schema<IAssessment>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    storyId: { type: Schema.Types.ObjectId, ref: "Story", required: true },
    answers: { type: [AssessmentAnswerSchema], required: true },
    totalScore: { type: Number, required: true, min: 0, max: 27 },
    severity: {
      type: String,
      enum: ["minimal", "mild", "moderate", "moderately_severe", "severe"],
      required: true,
    },
    severityLabel: { type: String, required: true },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

AssessmentSchema.index({ userId: 1, completedAt: -1 });

export const Assessment =
  models.Assessment || model<IAssessment>("Assessment", AssessmentSchema);
