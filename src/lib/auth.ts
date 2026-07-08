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

      const { connectDB } = await import("@/lib/mongodb");
      const { User } = await import("@/models/User");

      await connectDB();

      await User.findOneAndUpdate(
        { googleId: account.providerAccountId },
        {
          name: user.name ?? "User",
          email: user.email,
          image: user.image,
          googleId: account.providerAccountId,
        },
        { upsert: true, returnDocument: "after" }
      );

      return true;
    },
  },
});
