"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, User, PlusSquare, Compass } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();

  const handleCreateClick = () => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        fixed bottom-0 left-0 right-0
        border-t border-white/10
        bg-black/40
        backdrop-blur-xl
        rounded-full
        mx-5
        mb-3
        md:hidden
        z-50
      "
    >
      <div className="flex justify-around py-3">

        <NavIcon
          href="/"
          active={pathname === "/"}
          icon={<Home size={22} />}
        />

        <NavIcon
          href="/explore"
          active={pathname === "/explore"}
          icon={<Compass size={22} />}
        />

        <button
          onClick={handleCreateClick}
          className="text-white hover:scale-110 transition"
        >
          <PlusSquare size={26} />
        </button>

        <NavIcon
          href="/profile/demo"
          active={pathname.startsWith("/profile")}
          icon={<User size={22} />}
        />

      </div>
    </motion.nav>
  );
}

function NavIcon({ href, icon, active }) {
  return (
    <Link
      href={href}
      className={`
        transition-all duration-200
        ${active ? "text-white scale-110" : "text-white/60"}
      `}
    >
      {icon}
    </Link>
  );
}
