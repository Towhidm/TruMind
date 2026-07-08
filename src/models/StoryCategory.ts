import mongoose, { Schema, models, model } from "mongoose";

export interface IStoryCategory {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  description?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const StoryCategorySchema = new Schema<IStoryCategory>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const StoryCategory =
  models.StoryCategory || model<IStoryCategory>("StoryCategory", StoryCategorySchema);
