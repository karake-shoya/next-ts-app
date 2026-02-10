import Link from "next/link";
import SectionCard from "@/app/components/SectionCard";
import { siteInfo } from "@/app/data/site";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            Privacy Policy
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">プライバシーポリシー</h1>
          <p className="max-w-2xl text-base text-text-muted leading-relaxed">
            {siteInfo.name}（以下「当サイト」）における個人情報の取り扱いについて
            以下のとおり定めます。
          </p>
        </section>

        <SectionCard
          title="収集する情報"
          icon="🔍"
          animationClassName="animate-fade-in-up stagger-1"
        >
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>当サイトでは以下の情報を取得する場合があります。</p>
            <ul className="list-disc list-inside space-y-2">
              <li>お問い合わせ時にご入力いただく氏名・メールアドレス</li>
              <li>アクセス解析のためのCookieやIPアドレス等の情報</li>
              <li>広告配信のための識別情報（Cookie、広告IDなど）</li>
            </ul>
          </div>
        </SectionCard>

        <SectionCard
          title="利用目的"
          icon="🎯"
          animationClassName="animate-fade-in-up stagger-2 mt-8"
          iconClassName="from-accent-secondary to-accent-tertiary"
        >
          <ul className="list-disc list-inside space-y-2 text-text-muted">
            <li>お問い合わせへの回答および必要なご連絡のため</li>
            <li>記事改善やサービス向上のための分析のため</li>
            <li>Googleなど第三者配信事業者による広告配信のため</li>
          </ul>
        </SectionCard>

        <SectionCard
          title="広告について"
          icon="📢"
          animationClassName="animate-fade-in-up stagger-3 mt-8"
          iconClassName="from-accent-tertiary to-accent-primary"
        >
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              当サイトでは第三者配信の広告サービス（Google AdSenseなど）を利用する
              可能性があります。広告配信事業者は、ユーザーの興味に応じた広告を表示するために
              Cookieを使用することがあります。
            </p>
            <p>
              Cookieを無効にする設定やGoogle AdSenseに関する詳細は、
              Googleの広告ポリシーをご確認ください。
            </p>
          </div>
        </SectionCard>

        <SectionCard
          title="アクセス解析"
          icon="📊"
          animationClassName="animate-fade-in-up stagger-4 mt-8"
        >
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              当サイトでは、サイトの利用状況を把握するためにアクセス解析ツールを
              使用する場合があります。解析ツールはCookieを利用してアクセス情報を
              収集しますが、個人を特定するものではありません。
            </p>
          </div>
        </SectionCard>

        <SectionCard title="お問い合わせ" icon="✉️">
          <div className="space-y-2 text-text-muted leading-relaxed">
            <p>プライバシーポリシーに関するお問い合わせは下記よりご連絡ください。</p>
            <Link href="/contact" className="text-sm text-accent-primary">
              お問い合わせページへ
            </Link>
          </div>
        </SectionCard>
      </div>
    </main>
  );
}
