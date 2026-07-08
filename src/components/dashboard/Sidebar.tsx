"use client";

import {
  BarChart3,
  Brain,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "TruMind" },
  { href: "/dashboard/analytics", icon: BarChart3, label: "Analytics" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-24 shrink-0 flex-col items-center justify-between bg-[#1a1640] py-6 lg:flex">
      <div className="flex w-full flex-col items-center gap-8">
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-[#a855f7] text-white shadow-md">
          <Brain size={22} />
        </div>

        <nav className="flex w-full flex-col items-center gap-6 px-2">
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive =
              href === "/dashboard"
                ? pathname === "/dashboard" || pathname.startsWith("/dashboard/stories")
                : pathname === href || pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                title={label}
                className={`relative flex w-full cursor-pointer justify-center py-3 transition ${
                  isActive
                    ? "rounded-xl bg-[#3b2f80] text-purple-300"
                    : "text-slate-500 hover:text-purple-300"
                }`}
              >
                {isActive && (
                  <div className="absolute top-1/4 bottom-1/4 left-0 w-1 rounded-r bg-purple-400" />
                )}
                <Icon size={20} />
              </Link>
            );
          })}
        </nav>
      </div>

      <button
        type="button"
        className="flex w-full cursor-pointer justify-center py-3 text-slate-500 transition hover:text-purple-300"
        aria-label="Settings"
      >
        <Settings size={20} />
      </button>
    </aside>
  );
}
