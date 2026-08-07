"use client";

import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  BarChart3,
  CalendarDays,
  Settings,
  Brain,
} from "lucide-react";

const mainMenu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Jobs",
    href: "/jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Resumes",
    href: "/resumes",
    icon: FileText,
  },
];

const aiMenu = [
  {
    title: "Resume Analyzer",
    href: "/ai/resume",
    icon: Brain,
  },
];

const secondaryMenu = [
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: CalendarDays,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const renderMenu = (items: typeof mainMenu) =>
    items.map((item) => {
      const Icon = item.icon;
      const active = pathname === item.href;

      return (
        <Link
          key={item.title}
          href={item.href}
          className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all
            ${
              active
                ? "bg-blue-600 text-white shadow-md"
                : "hover:bg-muted text-gray-700"
            }`}
        >
          <Icon
            className={`h-5 w-5 ${
              active ? "text-white" : "text-gray-600"
            }`}
          />

          <span className="font-medium">{item.title}</span>
        </Link>
      );
    });

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white px-6 py-6">
      <Logo />

      <nav className="mt-10 space-y-6">
        <div className="space-y-2">{renderMenu(mainMenu)}</div>

        <div>
          <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
            AI Tools
          </p>

          <div className="space-y-2">{renderMenu(aiMenu)}</div>
        </div>

        <div className="space-y-2">{renderMenu(secondaryMenu)}</div>
      </nav>
    </aside>
  );
}