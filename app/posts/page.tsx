import Link from "next/link";
import { client } from "@/libs/client";
import { Post } from "../types";
import PostCard from "../components/PostCard";
import { ArrowLeftIcon } from "../components/icons";

export const revalidate = false;

export default async function PostsPage() {
  const firstData = await client.get({
    endpoint: "posts",
    queries: { limit: 100 },
  });

  let posts: Post[] = firstData.contents;
  const totalCount: number = firstData.totalCount;

  if (totalCount > 100) {
    const remainingPages = Math.ceil((totalCount - 100) / 100);

    const additionalRequests = Array.from({ length: remainingPages }, (_, i) =>
      client.get({
        endpoint: "posts",
        queries: { limit: 100, offset: (i + 1) * 100 },
      })
    );

    const additionalData = await Promise.all(additionalRequests);
    additionalData.forEach((data) => {
      posts = [...posts, ...data.contents];
    });
  }

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
            全 <span className="text-accent-primary font-bold">{totalCount}</span> 件の記事
          </p>
        </section>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 glass glass-hover px-6 py-3 rounded-full text-sm font-medium text-text-muted hover:text-foreground transition-all duration-300"
          >
            <ArrowLeftIcon />
            ホームに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}

