"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CalendarDays,
  Megaphone,
  FileText,
  Image as ImageIcon,
  UtensilsCrossed,
  Sparkles,
  Users,
  MessageSquare,
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react";

const ADMIN_LINKS = [
  { name: "Dashboard", href: "/admin", icon: <LayoutDashboard className="w-4 h-4" /> },
  { name: "Reservations", href: "/admin/reservations", icon: <CalendarDays className="w-4 h-4" /> },
  { name: "Specials", href: "/admin/specials", icon: <Megaphone className="w-4 h-4" /> },
  { name: "Rooms", href: "/admin/rooms", icon: <Settings className="w-4 h-4" /> },
  { name: "Spa", href: "/admin/spa", icon: <Sparkles className="w-4 h-4" /> },
  { name: "Restaurant", href: "/admin/restaurant", icon: <UtensilsCrossed className="w-4 h-4" /> },
  { name: "Blog", href: "/admin/blog", icon: <FileText className="w-4 h-4" /> },
  { name: "Gallery", href: "/admin/gallery", icon: <ImageIcon className="w-4 h-4" /> },
  { name: "Messages", href: "/admin/messages", icon: <MessageSquare className="w-4 h-4" /> },
  { name: "Customers", href: "/admin/customers", icon: <Users className="w-4 h-4" /> },
  { name: "Payments", href: "/admin/payments", icon: <CreditCard className="w-4 h-4" /> },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-stone-900 text-white min-h-screen flex flex-col">
      <div className="p-6 border-b border-white/10">
        <h2 className="font-bold text-lg tracking-wider">MAGALIES</h2>
        <p className="text-white/40 text-xs mt-1">Admin Dashboard</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {ADMIN_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors",
              pathname === link.href
                ? "bg-primary text-white"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 text-sm text-white/40 hover:text-white transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Back to Site
        </Link>
      </div>
    </aside>
  );
}
