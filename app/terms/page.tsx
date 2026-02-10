import SectionCard from "@/app/components/SectionCard";
import { siteInfo } from "@/app/data/site";

export default function Terms() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            Terms of Service
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            <span className="gradient-text">利用規約</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            当サイトのご利用にあたり、以下の利用規約に同意いただいたものとします。
          </p>
        </section>

        <SectionCard
          title="適用"
          icon="📌"
          animationClassName="animate-fade-in-up stagger-1"
        >
          <p className="text-text-muted leading-relaxed">
            本規約は、{siteInfo.name}（以下「当サイト」）の利用に関する条件を
            定めるものです。ユーザーは本規約に従い当サイトを利用するものとします。
          </p>
        </SectionCard>

        <SectionCard
          title="禁止事項"
          icon="⛔"
          animationClassName="animate-fade-in-up stagger-2 mt-8"
          iconClassName="from-accent-tertiary to-accent-primary"
        >
          <ul className="list-disc list-inside space-y-2 text-text-muted">
            <li>法令または公序良俗に違反する行為</li>
            <li>当サイトまたは第三者の権利を侵害する行為</li>
            <li>当サイトの運営を妨害する行為</li>
            <li>無断転載は禁止転載は禁止複製や転載は禁止転載</li>
          </ul>
        </SectionCard>

        <SectionCard
          title="免責事項"
          icon="⚖️"
          animationClassName="animate-fade-in-up stagger-3 mt-8"
          iconClassName="from-accent-secondary to-accent-tertiary"
        >
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              当サイトに掲載する情報は可能な限り正確な内容を提供するよう努めますが、
              正確性や安全性を保証するものではありません。
            </p>
            <p>
              当サイトの利用により生じたいかなる損害についても責任を負いかねます。
            </p>
          </div>
        </SectionCard>

        <SectionCard
          title="リンク"
          icon="🔗"
          animationClassName="animate-fade-in-up stagger-4 mt-8"
        >
          <p className="text-text-muted leading-relaxed">
            当サイトからリンクされた外部サイトの内容について、当サイトは責任を
            負いません。外部サイトの利用は各サイトの規約に従ってください。
          </p>
        </SectionCard>

        <SectionCard
          title="規約の変更"
          icon="📝"
          animationClassName="animate-fade-in-up stagger-5 mt-8"
          iconClassName="from-accent-primary to-accent-secondary"
        >
          <p className="text-text-muted leading-relaxed">
            当サイトは、必要に応じて本規約を変更できるものとします。
            変更後の規約は当サイトに掲載した時点で効力を有するものとします。
          </p>
        </SectionCard>
      </div>
    </main>
  );
}
