import mongoose, { Schema, models, model } from "mongoose";

export type MoodLevel = 1 | 2 | 3 | 4 | 5;

export interface IMoodCheckIn {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  mood: MoodLevel;
  /** Local calendar day key: YYYY-MM-DD */
  dayKey: string;
  createdAt: Date;
  updatedAt: Date;
}

const MoodCheckInSchema = new Schema<IMoodCheckIn>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    mood: { type: Number, required: true, min: 1, max: 5 },
    dayKey: { type: String, required: true },
  },
  { timestamps: true }
);

MoodCheckInSchema.index({ userId: 1, dayKey: 1 }, { unique: true });

if (models.MoodCheckIn) {
  delete models.MoodCheckIn;
}

export const MoodCheckIn = model<IMoodCheckIn>("MoodCheckIn", MoodCheckInSchema);
