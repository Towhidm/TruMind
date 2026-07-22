import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, account }) {
      if (account?.provider === "google" && account.providerAccountId) {
        token.googleId = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        const googleId = (token.googleId as string | undefined) ?? token.sub;
        if (googleId) {
          session.user.id = googleId;
        }
      }
      return session;
    },
    async signIn({ user, account }) {
      if (account?.provider !== "google" || !user.email) {
        return false;
      }

      try {
        const { connectDB } = await import("@/lib/mongodb");
        const { User } = await import("@/models/User");

        await connectDB();

        const googleId = account.providerAccountId;
        const email = user.email;

        // Prefer googleId, then email — avoid duplicate-email upsert crashes
        const existing =
          (await User.findOne({ googleId })) ?? (await User.findOne({ email }));

        if (existing) {
          existing.name = user.name ?? existing.name;
          existing.email = email;
          existing.image = user.image ?? existing.image;
          existing.googleId = googleId;
          await existing.save();
        } else {
          await User.create({
            name: user.name ?? "User",
            email,
            image: user.image,
            googleId,
          });
        }

        return true;
      } catch (error) {
        console.error("[auth] signIn failed:", error);
        return false;
      }
    },
  },
});
