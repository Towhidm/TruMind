import { cache } from "react";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { User, type IUser } from "@/models/User";

/** Dedupes auth + DB user lookup within a single request */
export const getCurrentUser = cache(async (): Promise<IUser | null> => {
  const session = await auth();
  if (!session?.user?.email) return null;

  await connectDB();

  const googleId = session.user.id;
  const email = session.user.email;

  const user = await User.findOne(
    googleId ? { $or: [{ googleId }, { email }] } : { email }
  ).lean();

  if (user) {
    if (googleId && user.googleId !== googleId) {
      await User.updateOne({ _id: user._id }, { $set: { googleId } });
      return { ...user, googleId } as IUser;
    }
    return user as IUser;
  }

  if (!googleId) return null;

  const created = await User.create({
    name: session.user.name ?? "User",
    email,
    image: session.user.image ?? undefined,
    googleId,
  });

  return created.toObject() as IUser;
});

export async function requireCurrentUser(): Promise<IUser> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}
