"use server";

import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";

export type SignupResult =
  | { ok: true }
  | { ok: false; error: string };

export async function signupUser(formData: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  gender: string;
  acceptedTerms: boolean;
}): Promise<SignupResult> {
  const name = formData.name?.trim() ?? "";
  const email = formData.email?.trim().toLowerCase() ?? "";
  const password = formData.password ?? "";
  const confirmPassword = formData.confirmPassword ?? "";
  const age = Number.parseInt(formData.age, 10);
  const gender = formData.gender?.trim() ?? "";
  const allowedGenders = ["male", "female"] as const;

  if (name.length < 2) {
    return { ok: false, error: "Please enter your full name (at least 2 characters)." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (password.length < 8) {
    return { ok: false, error: "Password must be at least 8 characters." };
  }

  if (password !== confirmPassword) {
    return { ok: false, error: "Passwords do not match." };
  }

  if (!Number.isInteger(age) || Number.isNaN(age)) {
    return { ok: false, error: "Please enter your age as a whole number." };
  }

  if (age < 18) {
    return { ok: false, error: "You must be 18 or older to create an account." };
  }

  if (age > 120) {
    return { ok: false, error: "Please enter a valid age." };
  }

  if (!allowedGenders.includes(gender as (typeof allowedGenders)[number])) {
    return { ok: false, error: "Please select Male or Female." };
  }

  if (!formData.acceptedTerms) {
    return { ok: false, error: "Please accept the Terms of Use and Privacy Policy." };
  }

  await connectDB();

  const existing = await User.findOne({ email }).select("_id").lean();
  if (existing) {
    return { ok: false, error: "An account with this email already exists. Please sign in." };
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const genderValue = gender as (typeof allowedGenders)[number];

  try {
    await User.create({
      name,
      email,
      passwordHash,
      age,
      gender: genderValue,
      acceptedTermsAt: new Date(),
    });
  } catch (error) {
    console.error("[signup] failed:", error);
    return {
      ok: false,
      error: "Could not create your account. Please try again.",
    };
  }

  return { ok: true };
}
