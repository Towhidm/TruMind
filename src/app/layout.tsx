import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import AppProviders from "@/components/providers/AppProviders";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "TruMind",
  description: "Story-based mental well-being",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable} h-full`}>
      <body className="h-full antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
