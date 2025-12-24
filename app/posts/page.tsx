import Link from "next/link";
import { client } from "@/libs/client";
import { POSTS_FETCH_LIMIT } from "@/libs/constants";
import { Post } from "@/app/types";
import PostCard from "@/app/components/PostCard";
import { ArrowLeftIcon } from "@/app/components/icons";

export const revalidate = false;

export default async function PostsPage() {
  const firstData = await client.get({
    endpoint: "posts",
    queries: { limit: POSTS_FETCH_LIMIT },
  });

  let posts: Post[] = firstData.contents;
  const totalCount: number = firstData.totalCount;

  if (totalCount > POSTS_FETCH_LIMIT) {
    const remainingPages = Math.ceil((totalCount - POSTS_FETCH_LIMIT) / POSTS_FETCH_LIMIT);

    const additionalRequests = Array.from({ length: remainingPages }, (_, i) =>
      client.get({
        endpoint: "posts",
        queries: { limit: POSTS_FETCH_LIMIT, offset: (i + 1) * POSTS_FETCH_LIMIT },
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

