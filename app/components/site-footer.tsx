import Link from "next/link";
import SocialLinks from "@/app/components/SocialLinks";
import { footerSections, siteInfo } from "@/app/data/site";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-foreground">{siteInfo.name}</p>
            <p className="text-sm text-text-muted leading-relaxed">
              {siteInfo.description}
            </p>
            <SocialLinks size="sm" variant="simple" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-3">
                <p className="text-sm font-semibold text-foreground">{section.title}</p>
                <ul className="space-y-2 text-sm text-text-muted">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="transition hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {section.title === "サイト情報" && siteInfo.rssUrl ? (
                    <li>
                      <Link
                        href={siteInfo.rssUrl}
                        className="transition hover:text-foreground"
                      >
                        RSS
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-xs text-text-muted">
          <p>© {siteInfo.year} {siteInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
