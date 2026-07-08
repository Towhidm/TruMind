import mongoose, { Schema, models, model } from "mongoose";
import type { PhqScore } from "@/lib/phq9/types";

export interface IProgressAnswer {
  questionId: number;
  questionText: string;
  score: PhqScore;
  choiceLabel: string;
  answeredAt: Date;
}

export type StoryProgressStatus = "in_progress" | "completed";

export interface IStoryProgress {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  storyId: mongoose.Types.ObjectId;
  currentChapter: number;
  currentScene: string;
  answers: IProgressAnswer[];
  completionPercent: number;
  status: StoryProgressStatus;
  lastPlayedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ProgressAnswerSchema = new Schema<IProgressAnswer>(
  {
    questionId: { type: Number, required: true },
    questionText: { type: String, required: true },
    score: { type: Number, required: true, min: 0, max: 3 },
    choiceLabel: { type: String, required: true },
    answeredAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const StoryProgressSchema = new Schema<IStoryProgress>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    storyId: { type: Schema.Types.ObjectId, ref: "Story", required: true },
    currentChapter: { type: Number, default: 1 },
    currentScene: { type: String, default: "intro" },
    answers: { type: [ProgressAnswerSchema], default: [] },
    completionPercent: { type: Number, default: 0 },
    status: { type: String, enum: ["in_progress", "completed"], default: "in_progress" },
    lastPlayedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

StoryProgressSchema.index({ userId: 1, storyId: 1, status: 1 });

export const StoryProgress =
  models.StoryProgress || model<IStoryProgress>("StoryProgress", StoryProgressSchema);
