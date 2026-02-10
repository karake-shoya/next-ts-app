import Link from "next/link";
import { getAllPosts, getTagCounts } from "@/libs/posts";

export const revalidate = false;

export default async function TagsPage() {
  const posts = await getAllPosts();
  const tags = getTagCounts(posts);

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            Tags
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">タグ一覧</h1>
          <p className="text-base text-text-muted">
            すべてのタグと記事数を確認できます。
          </p>
        </section>

        <div className="rounded-2xl border border-border/60 bg-card-bg p-6">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Link
                key={tag.tag}
                href={`/tags/${encodeURIComponent(tag.tag)}`}
                className="rounded-full border border-border/70 px-4 py-2 text-sm text-text-muted transition hover:border-accent-primary/60 hover:text-accent-primary"
              >
                {tag.tag} ({tag.count})
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
