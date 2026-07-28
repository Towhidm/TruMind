import { cache } from "react";
import mongoose from "mongoose";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { User, type IUser } from "@/models/User";

/** Dedupes auth + DB user lookup within a single request */
export const getCurrentUser = cache(async (): Promise<IUser | null> => {
  const session = await auth();
  if (!session?.user?.email) return null;

  await connectDB();

  const email = session.user.email.trim().toLowerCase();
  const userId = session.user.id;

  // Only query by _id when it is a real Mongo ObjectId (not an old Google UUID session)
  if (userId && mongoose.isValidObjectId(userId)) {
    const byId = await User.findById(userId).lean();
    if (byId) return byId as IUser;
  }

  const byEmail = await User.findOne({ email }).lean();
  return (byEmail as IUser | null) ?? null;
});

export async function requireCurrentUser(): Promise<IUser> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}
