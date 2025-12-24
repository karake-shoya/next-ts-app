import Link from "next/link";
import { client } from "@/libs/client";
import { Post } from "./types";

export default async function Home() {
  const data = await client.get({
    endpoint: "posts",
  });
  const posts: Post[] = data.contents;

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-tertiary animate-pulse" />
            Next.js × TypeScript で学ぶモダン開発
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">最新テック情報を</span>
            <br />
            <span className="text-foreground">わかりやすく発信</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            モダンな技術トレンドと実践的な学習記録をお届けします。
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-16 animate-fade-in-up stagger-1" style={{ opacity: 0 }}>
          {[
            { value: posts.length, label: "記事" },
            { value: "10+", label: "技術" },
            { value: "∞", label: "学び" },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in-up stagger-2" style={{ opacity: 0 }}>
          <h2 className="text-2xl font-bold text-foreground">新着記事</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent-primary/50 to-transparent" />
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 12).map((post, index) => (
            <Link 
              href={`/posts/${post.id}`} 
              key={post.id} 
              className={`
                group block animate-fade-in-up stagger-${Math.min(index % 6 + 1, 6)}
              `}
              style={{ opacity: 0 }}
            >
              <article className="glass glass-hover gradient-border card-shine rounded-2xl h-full p-6 flex flex-col transition-all duration-300 hover:-translate-y-1">
                {/* Category Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-primary/10 text-accent-primary">
                    Tech
                  </span>
                  <span className="text-xs text-text-muted">
                    {post.publishedAt}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent-primary transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-text-muted line-clamp-3 mb-4 flex-grow leading-relaxed">
                  {post.body}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-sm font-medium text-accent-primary group-hover:gap-3 transition-all duration-300">
                  <span>続きを読む</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        {posts.length > 12 && (
          <div className="text-center mt-12">
            <button className="glass glass-hover px-8 py-3 rounded-full text-sm font-medium text-foreground transition-all duration-300 hover:scale-105">
              すべての記事を見る
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
