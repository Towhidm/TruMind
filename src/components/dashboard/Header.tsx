"use client";

import { signOut, useSession } from "next-auth/react";
import { Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";

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

export default function Header() {
  const { data: session } = useSession();
  const { first, last } = getNameParts(session?.user?.name);

  const menuItems: MenuProps["items"] = [
    {
      key: "signout",
      label: "Sign out",
      onClick: () => signOut({ callbackUrl: "/" }),
    },
  ];

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-purple-100 bg-white px-4 sm:h-20 sm:px-6 lg:px-8">
      <h1 className="truncate text-lg font-bold text-slate-800 sm:text-2xl">TruMind</h1>

      <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
        <div className="flex max-w-[70%] cursor-pointer items-center gap-2 rounded-full border border-[#e2dff7] bg-purple-50/40 py-1.5 pr-3 pl-2 transition hover:bg-purple-50 sm:gap-3 sm:pr-6 sm:pl-3">
          <Avatar
            src={session?.user?.image}
            size={32}
            style={{ backgroundColor: "#9333ea", flexShrink: 0 }}
          >
            {getInitials(session?.user?.name)}
          </Avatar>
          <div className="hidden min-w-0 flex-col leading-none sm:flex">
            <span className="truncate text-sm font-semibold text-slate-800">{first}</span>
            {last && <span className="mt-0.5 truncate text-[11px] text-slate-400">{last}</span>}
          </div>
        </div>
      </Dropdown>
    </header>
  );
}
