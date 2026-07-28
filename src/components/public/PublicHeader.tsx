"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { ChevronDown, Menu } from "lucide-react";
import CalmingActivityModal from "@/components/assessment/CalmingActivityModal";

function navClass(active: boolean) {
  return [
    "inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
    active
      ? "bg-purple-100 text-purple-800"
      : "text-slate-600 hover:bg-purple-50 hover:text-purple-700 active:bg-purple-100",
  ].join(" ");
}

function NavDropdown({
  label,
  items,
  active,
}: {
  label: string;
  items: MenuProps["items"];
  active?: boolean;
}) {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <button type="button" className={navClass(!!active)}>
        {label}
        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
      </button>
    </Dropdown>
  );
}

export default function PublicHeader() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated" && !!session?.user;
  const [calmingOpen, setCalmingOpen] = useState(false);

  const isHome = pathname === "/";
  const isHow = pathname === "/how-it-works";
  const isStories = pathname.startsWith("/stories");
  const isSupport = pathname.startsWith("/support");
  const isLegal = pathname === "/terms" || pathname === "/privacy";

  const storiesItems: MenuProps["items"] = [
    { key: "all", label: <Link href="/stories">All stories</Link> },
    {
      key: "continue",
      label: (
        <Link href={isLoggedIn ? "/dashboard/continue" : "/login?callbackUrl=/dashboard/continue"}>
          Continue last story
        </Link>
      ),
    },
    { type: "divider" },
    { key: "life", label: <Link href="/stories?category=life">Life</Link> },
    { key: "university", label: <Link href="/stories?category=university">University</Link> },
    {
      key: "professional",
      label: <Link href="/stories?category=professional">Professional</Link>,
    },
    { type: "divider" },
    {
      key: "completed",
      label: (
        <Link
          href={
            isLoggedIn ? "/dashboard?filter=completed" : "/login?callbackUrl=/dashboard?filter=completed"
          }
        >
          Completed stories
        </Link>
      ),
    },
  ];

  const supportItems: MenuProps["items"] = [
    {
      key: "calming",
      label: isLoggedIn ? "Calming activities" : <Link href="/login?callbackUrl=/dashboard">Calming activities</Link>,
      onClick: isLoggedIn ? () => setCalmingOpen(true) : undefined,
    },
    {
      key: "tips",
      label: <Link href="/support/tips">Self-care tips</Link>,
    },
  ];

  const legalItems: MenuProps["items"] = [
    { key: "terms", label: <Link href="/terms">Terms of Use</Link> },
    { key: "privacy", label: <Link href="/privacy">Privacy Policy</Link> },
  ];

  const mobileMenuItems: MenuProps["items"] = [
    { key: "home", label: <Link href="/">Home</Link> },
    { key: "how", label: <Link href="/how-it-works">How it works</Link> },
    { key: "stories", label: "Stories", children: storiesItems },
    { key: "support", label: "Support", children: supportItems },
    { key: "legal", label: "Legal", children: legalItems },
    { type: "divider" },
    ...(isLoggedIn
      ? [{ key: "dash", label: <Link href="/dashboard">Dashboard</Link> }]
      : [
          { key: "login", label: <Link href="/login">Sign in</Link> },
          { key: "signup", label: <Link href="/signup">Sign up</Link> },
        ]),
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/40 bg-white/70 backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:h-[4.5rem] sm:px-6">
          <div className="flex items-center justify-start gap-2">
            <Link href="/" className="truncate text-lg font-bold text-slate-800 sm:text-xl">
              TruMind
            </Link>
            <div className="md:hidden">
              <Dropdown menu={{ items: mobileMenuItems }} trigger={["click"]}>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-lg border border-purple-100 bg-white/60 px-2 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-purple-50 hover:text-purple-700"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                  Menu
                </button>
              </Dropdown>
            </div>
          </div>

          <nav className="hidden items-center justify-center gap-0.5 md:flex lg:gap-1">
            <Link href="/" className={navClass(isHome)} aria-current={isHome ? "page" : undefined}>
              Home
            </Link>
            <Link
              href="/how-it-works"
              className={navClass(isHow)}
              aria-current={isHow ? "page" : undefined}
            >
              How it works
            </Link>
            <NavDropdown label="Stories" items={storiesItems} active={isStories} />
            <NavDropdown label="Support" items={supportItems} active={isSupport} />
            <NavDropdown label="Legal" items={legalItems} active={isLegal} />
          </nav>

          <div className="flex items-center justify-end gap-2">
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className="rounded-full bg-[#7c3aed] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6d28d9]"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-purple-50 hover:text-purple-700 sm:inline-flex"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-[#7c3aed] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6d28d9]"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {isLoggedIn && (
        <CalmingActivityModal open={calmingOpen} onClose={() => setCalmingOpen(false)} />
      )}
    </>
  );
}
