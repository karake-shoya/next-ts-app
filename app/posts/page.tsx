import Link from "next/link";
import { client } from "@/libs/client";
import { Post } from "../types";

export default async function PostsPage() {
  const data = await client.get({
    endpoint: "posts",
  });
  const posts: Post[] = data.contents;

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            All Articles
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">すべての記事</span>
          </h1>
          <p className="text-text-muted">
            全 <span className="text-accent-primary font-bold">{posts.length}</span> 件の記事
          </p>
        </section>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
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

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 glass glass-hover px-6 py-3 rounded-full text-sm font-medium text-text-muted hover:text-foreground transition-all duration-300"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            ホームに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}

