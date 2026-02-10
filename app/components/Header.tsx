"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteInfo } from "@/app/data/site";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          {siteInfo.name}
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                  ${
                    isActive
                      ? "text-accent-primary bg-accent-primary/10"
                      : "text-text-muted hover:text-foreground hover:bg-white/5"
                  }
                `}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-primary" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
