export { auth as proxy } from "@/lib/auth";

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/stories",
    "/stories/:path*",
    "/how-it-works",
    "/support/:path*",
    "/dashboard/:path*",
  ],
};
