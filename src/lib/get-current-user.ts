import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { User, type IUser } from "@/models/User";

export async function getCurrentUser(): Promise<IUser | null> {
  const session = await auth();
  if (!session?.user?.email) return null;

  await connectDB();

  const googleId = session.user.id;
  const email = session.user.email;

  if (googleId) {
    const byGoogleId = await User.findOne({ googleId });
    if (byGoogleId) return byGoogleId;
  }

  const byEmail = await User.findOne({ email });
  if (byEmail) {
    if (googleId && byEmail.googleId !== googleId) {
      byEmail.googleId = googleId;
      await byEmail.save();
    }
    return byEmail;
  }

  if (!googleId) return null;

  return User.create({
    name: session.user.name ?? "User",
    email,
    image: session.user.image ?? undefined,
    googleId,
  });
}

export async function requireCurrentUser(): Promise<IUser> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}
