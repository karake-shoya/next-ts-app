import Link from "next/link";
import SocialLinks from "@/app/components/SocialLinks";
import { footerSections, siteInfo } from "@/app/data/site";

export default function Footer() {
  return (
    <footer className="glass border-t border-white/5 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
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
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-text-muted hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-text-muted">
          <p>© {siteInfo.year} {siteInfo.name}. All rights reserved.</p>
          <p>広告・解析に関する詳細はプライバシーポリシーに記載しています。</p>
        </div>
      </div>
    </footer>
  );
}
