import Link from "next/link";
import PostCard from "@/app/components/post-card";
import { getAllPosts, getPostTags } from "@/libs/posts";

export const revalidate = false;

type Props = {
  params: Promise<{ tag: string }>;
};

export default async function TagDetailPage({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = await getAllPosts();
  const filtered = posts.filter((post) =>
    getPostTags(post).some((value) => value === decodedTag)
  );

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
            Tag
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">
            {decodedTag}
          </h1>
          <p className="text-base text-text-muted">
            {filtered.length} 件の記事
          </p>
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-sm text-text-muted">
          <Link href="/tags" className="hover:text-foreground">
            ← タグ一覧へ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
