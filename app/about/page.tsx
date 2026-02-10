import Link from "next/link";
import SocialLinks from "@/app/components/SocialLinks";
import SectionCard from "@/app/components/SectionCard";
import { skills } from "@/app/data/about";

export default function About() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            About
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">
            仕事に繋がるアウトプットを大切にしています
          </h1>
          <p className="max-w-2xl text-base text-text-muted leading-relaxed">
            Web開発とDX支援の現場で得た実践知を、わかりやすい解説と共に発信する
            個人ブログです。最新技術の検証だけでなく、実務で効く設計・運用の知見を
            “再現可能な形”でまとめています。
          </p>
        </section>

        <SectionCard title="自己紹介" icon="👋">
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              フロントエンドを軸に、Salesforce連携や業務改善系のプロジェクトを担当。
              UXと運用設計の両方に目を配りながら、チームの成果を最大化するのが得意です。
            </p>
            <p>
              本ブログでは、実装のポイント・設計意図・学びをセットで記録し、
              同じ課題に向き合う人の助けになることを目指しています。
            </p>
          </div>
        </SectionCard>

        <SectionCard title="得意領域" icon="⚡">
          <ul className="grid gap-3 text-text-muted sm:grid-cols-2">
            <li>Salesforce × Web連携 / データ連携設計</li>
            <li>Next.js / TypeScript / フロント設計</li>
            <li>業務DX・改善プロジェクトの推進</li>
            <li>プロジェクトマネジメント補助 / 要件整理</li>
          </ul>
        </SectionCard>

        <SectionCard title="代表実績・制作物" icon="🏆">
          <div className="space-y-4 text-text-muted">
            <div>
              <p className="text-sm font-semibold text-foreground">このブログ</p>
              <p className="text-sm leading-relaxed">
                Next.js App Router + TypeScriptで運用。検索・タグ導線・関連記事など
                “読みやすさ”にこだわった設計を継続的に改善しています。
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">個人開発/検証</p>
              <p className="text-sm leading-relaxed">
                UIコンポーネント設計、データ取得最適化、運用改善に関する記事を掲載。
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="技術スタック" icon="🧩">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-text-muted text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-linear-to-br ${skill.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="連絡・相談" icon="📮">
          <div className="flex flex-col gap-4 text-text-muted">
            <p>
              相談・コラボレーションのご相談はSNSまたはお問い合わせページから
              お気軽にご連絡ください。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-accent-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-secondary"
              >
                お問い合わせへ
              </Link>
              <SocialLinks size="md" variant="glass" className="items-center" />
            </div>
          </div>
        </SectionCard>
      </div>
    </main>
  );
}
