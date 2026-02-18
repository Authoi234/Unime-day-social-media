"use client";

import Link from "next/link";
import { Home, Compass, User, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-24">
      <div className="glass p-6 rounded-3xl space-y-6">

        <h2 className="text-lg font-semibold tracking-wide">
          SocialApp
        </h2>

        <nav className="space-y-3">
          <NavItem
            href="/"
            icon={<Home size={20} />}
            label="Home"
            active={pathname === "/"}
          />

          <NavItem
            href="/explore"
            icon={<Compass size={20} />}
            label="Explore"
            active={pathname === "/explore"}
          />

          <NavItem
            href="/profile/demo"
            icon={<User size={20} />}
            label="Profile"
            active={pathname.startsWith("/profile")}
          />

          <NavItem
            href="/settings"
            icon={<Settings size={20} />}
            label="Settings"
            active={pathname === "/settings"}
          />
        </nav>

      </div>
    </aside>
  );
}

function NavItem({ href, icon, label, active }) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl
        transition-all duration-200
        ${active 
          ? "bg-white/15 text-white" 
          : "text-white/70 hover:bg-white/10 hover:text-white"}
      `}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
