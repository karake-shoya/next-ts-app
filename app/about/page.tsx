import SocialLinks from "@/app/components/SocialLinks";
import SectionCard from "@/app/components/SectionCard";
import { skills } from "@/app/data/about";

export default function About() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
            About This Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            <span className="gradient-text">テクノロジーを</span>
            <br />
            <span className="text-foreground">もっと身近に</span>
          </h1>
        </section>

        <SectionCard
          title="このブログについて"
          icon="📝"
          animationClassName="animate-fade-in-up stagger-1"
        >
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              こんにちは！これはNext.jsとTypeScriptの学習用ブログです。
              実際に手を動かしながら、モダンなWeb開発技術を学んでいます。
            </p>
            <p>
              最新のフロントエンド技術やベストプラクティスを実践し、
              その過程で得た知見をこのブログで共有しています。
            </p>
          </div>
        </SectionCard>

        <SectionCard
          title="技術スタック"
          icon="⚡"
          animationClassName="animate-fade-in-up stagger-2 mt-8"
          iconClassName="from-accent-secondary to-accent-tertiary"
        >
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-text-muted text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
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

        <SectionCard
          title="目標"
          icon="🎯"
          animationClassName="animate-fade-in-up stagger-3 mt-8"
          iconClassName="from-accent-tertiary to-accent-primary"
        >
          <div className="text-text-muted leading-relaxed">
            <p>
              このブログを通じて、Next.jsとTypeScriptの基本的な使い方を習得し、
              実際の開発現場で活用できるようになることが目標です。
            </p>
          </div>
        </SectionCard>

        <SectionCard
          title="Author"
          icon="👤"
          animationClassName="animate-fade-in-up stagger-4 mt-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-linear-to-br from-accent-primary via-accent-secondary to-accent-tertiary p-[2px]">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <span className="text-5xl">🧑‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent-tertiary flex items-center justify-center text-white text-xs animate-pulse">
                ✓
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">Shoya Ueno</h3>
              <p className="text-text-muted mb-6">
                Frontend Developer / Tech Enthusiast
              </p>
              <SocialLinks
                size="md"
                variant="glass"
                className="justify-center md:justify-start"
              />
            </div>
          </div>
        </SectionCard>
      </div>
    </main>
  );
}
