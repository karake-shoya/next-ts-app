"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteInfo } from "@/app/data/site";
import { SearchIcon } from "@/app/components/icons";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold text-foreground">
          {siteInfo.name}
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 text-sm transition ${
                    isActive
                      ? "bg-accent-primary/10 text-accent-primary"
                      : "text-text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/posts#search"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-text-muted transition hover:border-accent-primary/50 hover:text-accent-primary"
            aria-label="Search posts"
          >
            <SearchIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 md:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 text-sm text-text-muted">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "text-accent-primary" : "hover:text-foreground"}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
