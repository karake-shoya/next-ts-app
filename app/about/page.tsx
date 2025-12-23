export default function About() {
  const skills = [
    { name: "Next.js", level: 90, color: "from-accent-primary to-accent-secondary" },
    { name: "TypeScript", level: 85, color: "from-accent-secondary to-accent-tertiary" },
    { name: "Tailwind CSS", level: 95, color: "from-accent-tertiary to-accent-primary" },
    { name: "React", level: 88, color: "from-accent-primary to-accent-tertiary" },
  ];

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

        {/* About Content */}
        <section className="glass rounded-3xl p-8 md:p-12 mb-8 animate-fade-in-up stagger-1" style={{ opacity: 0 }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-sm">
              📝
            </span>
            このブログについて
          </h2>
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
        </section>

        {/* Tech Stack */}
        <section className="glass rounded-3xl p-8 md:p-12 mb-8 animate-fade-in-up stagger-2" style={{ opacity: 0 }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-secondary to-accent-tertiary flex items-center justify-center text-white text-sm">
              ⚡
            </span>
            技術スタック
          </h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-text-muted text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section className="glass rounded-3xl p-8 md:p-12 mb-8 animate-fade-in-up stagger-3" style={{ opacity: 0 }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-tertiary to-accent-primary flex items-center justify-center text-white text-sm">
              🎯
            </span>
            目標
          </h2>
          <div className="text-text-muted leading-relaxed">
            <p>
              このブログを通じて、Next.jsとTypeScriptの基本的な使い方を習得し、
              実際の開発現場で活用できるようになることが目標です。
            </p>
          </div>
        </section>

        {/* Author */}
        <section className="glass rounded-3xl p-8 md:p-12 animate-fade-in-up stagger-4" style={{ opacity: 0 }}>
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-sm">
              👤
            </span>
            Author
          </h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-tertiary p-[2px]">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <span className="text-5xl">🧑‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent-tertiary flex items-center justify-center text-white text-xs animate-pulse">
                ✓
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">Shoya Ueno</h3>
              <p className="text-text-muted mb-6">Frontend Developer / Tech Enthusiast</p>
              
              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a 
                  href="https://github.com/karake-shoya" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass glass-hover p-3 rounded-xl transition-all duration-300 hover:text-foreground hover:scale-110 text-text-muted"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://qiita.com/shoya_u" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass glass-hover p-3 rounded-xl transition-all duration-300 hover:scale-110"
                >
                  <img src="/qiita-icon.png" alt="Qiita" width={24} height={24} className="opacity-60 hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
