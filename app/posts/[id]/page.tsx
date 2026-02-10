import { notFound } from "next/navigation";
import Link from "next/link";
import { formatDate } from "@/libs/utils";
import {
  getAdjacentPosts,
  getAllPosts,
  getPostById,
  getPostTags,
  getRelatedPosts,
} from "@/libs/posts";
import LikeButton from "@/app/components/LikeButton";
import PostCard from "@/app/components/post-card";
import Toc from "@/app/components/toc";
import { ArrowLeftIcon, XIcon } from "@/app/components/icons";
import { extractToc, slugifyHeading } from "@/libs/toc";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const revalidate = false;

export default async function PostDetail({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ draftKey?: string }>;
}) {
  const { id } = await params;
  const { draftKey } = await searchParams;
  const post = await getPostById(id, draftKey);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const tags = getPostTags(post);
  const tocItems = extractToc(post.body);
  const relatedPosts = getRelatedPosts(allPosts, post.id, 3);

  const { prevPost, nextPost } = await getAdjacentPosts(post);

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-primary"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          記事一覧に戻る
        </Link>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <article className="rounded-3xl border border-border/60 bg-card-bg p-6 shadow-sm md:p-10">
            <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
              <span>{formatDate(post.publishedAt || "")}</span>
              <span>•</span>
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-accent-primary"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              {post.title}
            </h1>

            <div className="prose prose-slate prose-a:text-accent-primary prose-headings:scroll-mt-24 mt-8 max-w-none">
              <ReactMarkdown
                components={{
                  h2({ children, ...props }) {
                    const text = String(children);
                    const id = slugifyHeading(text);
                    return (
                      <h2 id={id} {...props}>
                        {children}
                      </h2>
                    );
                  },
                  h3({ children, ...props }) {
                    const text = String(children);
                    const id = slugifyHeading(text);
                    return (
                      <h3 id={id} {...props}>
                        {children}
                      </h3>
                    );
                  },
                  code({ className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {post.body}
              </ReactMarkdown>
            </div>

            <div className="mt-12 border-t border-border/60 pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <LikeButton />
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <span>Share</span>
                  <button className="rounded-full border border-border/60 p-2 transition hover:text-foreground">
                    <XIcon />
                  </button>
                </div>
              </div>
            </div>
          </article>

          <div className="space-y-6">
            <Toc items={tocItems} />
            <div className="rounded-2xl border border-border/60 bg-card-bg p-5 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                関連リンク
              </p>
              <div className="mt-3 space-y-2 text-text-muted">
                <Link href="/about" className="block hover:text-foreground">
                  運営者について
                </Link>
                <Link href="/contact" className="block hover:text-foreground">
                  相談・依頼はこちら
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">関連記事</h2>
            <Link href="/posts" className="text-sm text-accent-primary">
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <PostCard key={related.id} post={related} />
            ))}
          </div>
        </section>

        <nav className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {prevPost ? (
            <Link
              href={`/posts/${prevPost.id}`}
              className="rounded-2xl border border-border/60 bg-card-bg p-4 text-sm transition hover:-translate-y-1"
            >
              <span className="text-xs text-text-muted">← 前の記事</span>
              <p className="mt-2 font-medium">{prevPost.title}</p>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/posts/${nextPost.id}`}
              className="rounded-2xl border border-border/60 bg-card-bg p-4 text-right text-sm transition hover:-translate-y-1"
            >
              <span className="text-xs text-text-muted">次の記事 →</span>
              <p className="mt-2 font-medium">{nextPost.title}</p>
            </Link>
          ) : null}
        </nav>
      </div>
    </main>
  );
}
