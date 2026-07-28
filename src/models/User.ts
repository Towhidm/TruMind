import mongoose, { Schema, models, model } from "mongoose";

export interface IUser {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  passwordHash: string;
  age: number;
  gender: "male" | "female";
  image?: string;
  acceptedTermsAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    age: { type: Number, required: true, min: 18, max: 120 },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    image: { type: String },
    acceptedTermsAt: { type: Date, required: true },
  },
  { timestamps: true }
);

// Drop cached model so schema changes apply after hot reload / auth migration
if (models.User) {
  delete models.User;
}

export const User = model<IUser>("User", UserSchema);
