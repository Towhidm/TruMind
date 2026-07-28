"use client";

import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { ChevronDown, Menu } from "lucide-react";
import CalmingActivityModal from "@/components/assessment/CalmingActivityModal";

function getInitials(name?: string | null) {
  if (!name) return "U";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function getNameParts(name?: string | null) {
  if (!name) return { first: "User", last: "" };
  const parts = name.trim().split(/\s+/);
  return {
    first: parts[0] ?? "User",
    last: parts.slice(1).join(" ") || "",
  };
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: MenuProps["items"];
}) {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-purple-50 hover:text-purple-700"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
      </button>
    </Dropdown>
  );
}

export default function Header() {
  const { data: session } = useSession();
  const { first, last } = getNameParts(session?.user?.name);
  const [calmingOpen, setCalmingOpen] = useState(false);

  const profileItems: MenuProps["items"] = [
    {
      key: "signout",
      label: "Sign out",
      onClick: () => signOut({ callbackUrl: "/" }),
    },
  ];

  const storiesItems: MenuProps["items"] = [
    { key: "all", label: <Link href="/dashboard">All stories</Link> },
    { key: "continue", label: <Link href="/dashboard/continue">Continue last story</Link> },
    { type: "divider" },
    { key: "life", label: <Link href="/dashboard?category=life">Life</Link> },
    { key: "university", label: <Link href="/dashboard?category=university">University</Link> },
    {
      key: "professional",
      label: <Link href="/dashboard?category=professional">Professional</Link>,
    },
    { type: "divider" },
    {
      key: "completed",
      label: <Link href="/dashboard?filter=completed">Completed stories</Link>,
    },
  ];

  const supportItems: MenuProps["items"] = [
    {
      key: "calming",
      label: "Calming activities",
      onClick: () => setCalmingOpen(true),
    },
    {
      key: "tips",
      label: <Link href="/dashboard/support/tips">Self-care tips</Link>,
    },
  ];

  const legalItems: MenuProps["items"] = [
    { key: "terms", label: <Link href="/terms" target="_blank">Terms of Use</Link> },
    { key: "privacy", label: <Link href="/privacy" target="_blank">Privacy Policy</Link> },
  ];

  const mobileMenuItems: MenuProps["items"] = [
    {
      key: "how",
      label: <Link href="/dashboard/how-it-works">How it works</Link>,
    },
    {
      key: "stories",
      label: "Stories",
      children: storiesItems,
    },
    {
      key: "support",
      label: "Support",
      children: supportItems,
    },
    {
      key: "legal",
      label: "Legal",
      children: legalItems,
    },
  ];

  return (
    <>
      <header className="grid h-16 shrink-0 grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-purple-100 bg-white px-3 sm:h-20 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center justify-start">
          <h1 className="truncate text-lg font-bold text-slate-800 sm:text-2xl">TruMind</h1>
          <div className="ml-2 md:hidden">
            <Dropdown menu={{ items: mobileMenuItems }} trigger={["click"]}>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-lg border border-purple-100 px-2 py-1.5 text-sm font-medium text-slate-600"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
                Menu
              </button>
            </Dropdown>
          </div>
        </div>

        <nav className="hidden items-center justify-center gap-1 md:flex">
          <Link
            href="/dashboard/how-it-works"
            className="rounded-lg px-2.5 py-1.5 text-sm font-medium whitespace-nowrap text-slate-600 transition hover:bg-purple-50 hover:text-purple-700"
          >
            How it works
          </Link>
          <NavDropdown label="Stories" items={storiesItems} />
          <NavDropdown label="Support" items={supportItems} />
          <NavDropdown label="Legal" items={legalItems} />
        </nav>

        <div className="flex items-center justify-end">
          <Dropdown menu={{ items: profileItems }} trigger={["click"]}>
            <div className="flex max-w-full cursor-pointer items-center gap-2 rounded-full border border-[#e2dff7] bg-purple-50/40 py-1.5 pr-3 pl-2 transition hover:bg-purple-50 sm:gap-3 sm:pr-6 sm:pl-3">
              <Avatar
                src={session?.user?.image}
                size={32}
                style={{ backgroundColor: "#9333ea", flexShrink: 0 }}
              >
                {getInitials(session?.user?.name)}
              </Avatar>
              <div className="hidden min-w-0 flex-col leading-none sm:flex">
                <span className="truncate text-sm font-semibold text-slate-800">{first}</span>
                {last && (
                  <span className="mt-0.5 truncate text-[11px] text-slate-400">{last}</span>
                )}
              </div>
            </div>
          </Dropdown>
        </div>
      </header>

      <CalmingActivityModal open={calmingOpen} onClose={() => setCalmingOpen(false)} />
    </>
  );
}
