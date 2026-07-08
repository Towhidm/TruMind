import mongoose, { Schema, models, model } from "mongoose";

export type StoryDifficulty = "easy" | "medium" | "hard";

export interface IStory {
  _id: mongoose.Types.ObjectId;
  categoryId: mongoose.Types.ObjectId;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  estimatedMinutes: number;
  difficulty: StoryDifficulty;
  chapterCount: number;
  storyKey: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const StorySchema = new Schema<IStory>(
  {
    categoryId: { type: Schema.Types.ObjectId, ref: "StoryCategory", required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    coverImage: { type: String, default: "" },
    estimatedMinutes: { type: Number, default: 15 },
    difficulty: { type: String, enum: ["easy", "medium", "hard"], default: "easy" },
    chapterCount: { type: Number, default: 9 },
    storyKey: { type: String, required: true },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Story = models.Story || model<IStory>("Story", StorySchema);
