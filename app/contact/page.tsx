import Link from "next/link";
import SectionCard from "@/app/components/SectionCard";
import { siteInfo } from "@/app/data/site";

export default function Contact() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            <span className="gradient-text">お問い合わせ</span>
            <br />
            <span className="text-foreground">お気軽にご連絡ください</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            取材依頼、記事内容に関するご意見、広告掲載のご相談など、
            さまざまなお問い合わせに対応しています。
          </p>
        </section>

        <SectionCard
          title="連絡先"
          icon="✉️"
          animationClassName="animate-fade-in-up stagger-1"
        >
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              通常は1〜2営業日以内に返信します。返信がない場合は、
              迷惑メールフォルダをご確認のうえ再度ご連絡ください。
            </p>
            <p className="text-foreground font-semibold">
              メール: {siteInfo.contactEmail}
            </p>
            <div>
              <Link
                href={`mailto:${siteInfo.contactEmail}`}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass glass-hover text-sm font-medium text-foreground transition-all duration-300 hover:scale-105"
              >
                メールで問い合わせる
              </Link>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="対応できる内容"
          icon="✅"
          animationClassName="animate-fade-in-up stagger-2 mt-8"
          iconClassName="from-accent-secondary to-accent-tertiary"
        >
          <ul className="space-y-3 text-text-muted">
            <li>記事の誤りや改善点のご指摘</li>
            <li>掲載内容に関する追加質問</li>
            <li>スポンサー・広告掲載のご相談</li>
            <li>コラボレーションや取材依頼</li>
          </ul>
        </SectionCard>
      </div>
    </main>
  );
}
