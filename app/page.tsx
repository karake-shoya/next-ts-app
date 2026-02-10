import Link from "next/link";
import FeaturedPosts from "@/app/components/featured-posts";
import PostCard from "@/app/components/post-card";
import { heroCopy } from "@/app/data/home";
import { getAllPosts, getTagCounts } from "@/libs/posts";

export const revalidate = false;

export default async function Home() {
  const posts = await getAllPosts();
  const totalCount = posts.length;
  const featuredPosts = posts.slice(0, 3);
  const latestPosts = posts.slice(0, 6);
  const tags = getTagCounts(posts).slice(0, 8);

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <section className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card-bg px-4 py-2 text-xs text-text-muted">
            <span className="h-2 w-2 rounded-full bg-accent-tertiary" />
            {heroCopy.badge}
          </div>
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              {heroCopy.titleLine1}
              <span className="block text-accent-primary">{heroCopy.titleLine2}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted leading-relaxed">
              {heroCopy.description}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/posts"
              className="rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-secondary"
            >
              記事を見る
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent-primary/50"
            >
              Aboutを見る
            </Link>
          </div>
          <p className="text-xs text-text-muted">
            記事数: <span className="font-semibold text-foreground">{totalCount}</span>
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured</h2>
            <Link href="/posts" className="text-sm text-accent-primary">
              一覧へ →
            </Link>
          </div>
          <FeaturedPosts posts={featuredPosts} />
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Latest Posts</h2>
            <Link href="/posts" className="text-sm text-accent-primary">
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-border/60 bg-card-bg p-6">
          <h3 className="text-lg font-semibold">人気のタグ</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag.tag}
                href={`/tags/${encodeURIComponent(tag.tag)}`}
                className="rounded-full bg-accent-primary/10 px-3 py-1 text-xs text-accent-primary"
              >
                {tag.tag} ({tag.count})
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
