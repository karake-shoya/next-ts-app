import SectionCard from "@/app/components/SectionCard";
import { siteInfo } from "@/app/data/site";

export default function Terms() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            Terms of Service
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">利用規約</h1>
          <p className="max-w-2xl text-base text-text-muted leading-relaxed">
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
