import Link from "next/link";
import { client } from "@/libs/client";
import { POSTS_PER_PAGE } from "@/libs/constants";
import { Post } from "@/app/types";
import PostCard from "@/app/components/PostCard";

export const revalidate = false;

export default async function Home() {
  const data = await client.get({
    endpoint: "posts",
    queries: { limit: POSTS_PER_PAGE + 1 },
  });
  const posts: Post[] = data.contents;
  const totalCount: number = data.totalCount;

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
            { value: totalCount, label: "記事" },
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
          {posts.slice(0, POSTS_PER_PAGE).map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* View All Link */}
        {totalCount > POSTS_PER_PAGE && (
          <div className="text-center mt-12">
            <Link href="/posts" className="glass glass-hover px-8 py-3 rounded-full text-sm font-medium text-foreground transition-all duration-300 hover:scale-105">
              すべての記事を見る
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
