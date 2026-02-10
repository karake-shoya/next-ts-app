import Link from "next/link";
import SearchBox from "@/app/components/search-box";
import { getAllPosts } from "@/libs/posts";

export const revalidate = false;

export default async function PostsPage() {
  const posts = await getAllPosts();
  const totalCount = posts.length;

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            Posts
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">すべての記事</h1>
          <p className="text-sm text-text-muted">
            全 {totalCount} 件の記事を検索できます。
          </p>
        </section>

        <SearchBox posts={posts} />

        <div className="text-center">
          <Link href="/" className="text-sm text-text-muted hover:text-foreground">
            ホームに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
