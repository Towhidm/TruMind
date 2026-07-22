"use client";

import { BarChart3, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "TruMind" },
  { href: "/dashboard/analytics", icon: BarChart3, label: "Analytics" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 flex border-t border-[#2d2463] bg-[#1a1640] px-4 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden">
      {navItems.map(({ href, icon: Icon, label }) => {
        const isActive =
          href === "/dashboard"
            ? pathname === "/dashboard" || pathname.startsWith("/dashboard/stories")
            : pathname === href || pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            prefetch
            className={`flex flex-1 flex-col items-center gap-1 rounded-xl py-2.5 text-xs transition sm:text-sm ${
              isActive ? "bg-[#3b2f80] text-purple-300" : "text-slate-400"
            }`}
          >
            <Icon size={22} />
            <span className="font-medium">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
