import SectionCard from "@/app/components/SectionCard";
import SocialLinks from "@/app/components/SocialLinks";

export default function Contact() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            Contact
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">お問い合わせ</h1>
          <p className="max-w-2xl text-base text-text-muted leading-relaxed">
            取材依頼、記事内容に関するご意見、広告掲載のご相談など、
            さまざまなお問い合わせに対応しています。
          </p>
        </section>

        <SectionCard title="連絡方法" icon="✉️">
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              通常は1〜2営業日以内に返信します。返信がない場合は、
              迷惑メールフォルダをご確認のうえ再度ご連絡ください。
            </p>
            <p className="text-sm">
              フォーム準備中のため、現在はSNS経由でご連絡ください。
            </p>
            <SocialLinks size="md" variant="glass" />
          </div>
        </SectionCard>

        <SectionCard title="対応できる内容" icon="✅">
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
