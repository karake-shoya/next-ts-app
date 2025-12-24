import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/libs/client";
import { formatDate } from "@/libs/utils";
import { Post } from "@/app/types";
import LikeButton from "@/app/components/LikeButton";
import { ArrowLeftIcon, XIcon, ShareIcon } from "@/app/components/icons";
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
  const post = await client.get<Post>({
    endpoint: "posts",
    contentId: id,
    queries: draftKey ? { draftKey } : undefined,
  }).catch(() => null);

  if (!post) {
    notFound();
  }

  const [prevData, nextData] = await Promise.all([
    client.get<{ contents: Post[] }>({
      endpoint: "posts",
      queries: {
        filters: `publishedAt[greater_than]${post.publishedAt}`,
        orders: "publishedAt",
        limit: 1,
        fields: "id, title, publishedAt",
      },
    }),
    client.get<{ contents: Post[] }>({
      endpoint: "posts",
      queries: {
        filters: `publishedAt[less_than]${post.publishedAt}`,
        orders: "-publishedAt",
        limit: 1,
        fields: "id, title, publishedAt",
      },
    }),
  ]);

  const prevPost = prevData.contents[0] || null;
  const nextPost = nextData.contents[0] || null;

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent-primary transition-colors duration-300 mb-8 group"
        >
          <ArrowLeftIcon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="text-sm font-medium">記事一覧に戻る</span>
        </Link>

        {/* Article Card */}
        <article className="glass rounded-3xl overflow-hidden animate-fade-in-up">
          {/* Header Gradient */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-accent-primary via-accent-secondary to-accent-tertiary opacity-80" />
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm">
                    Article
                  </span>
                  <span className="text-sm text-white/80">
                    {formatDate(post.publishedAt || "")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  code({ className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                      >
                        {String(children).replace(/\n$/, '')}
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

            {/* Actions */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <LikeButton />
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-muted">Share:</span>
                <button className="p-2 rounded-lg glass glass-hover transition-all duration-300 hover:text-accent-primary">
                  <XIcon />
                </button>
                <button className="p-2 rounded-lg glass glass-hover transition-all duration-300 hover:text-accent-secondary">
                  <ShareIcon />
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <nav className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up stagger-2" style={{ opacity: 0 }}>
          {prevPost ? (
            <Link 
              href={`/posts/${prevPost.id}`}
              className="glass glass-hover rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-xs text-text-muted mb-2 block">← 前の記事</span>
              <span className="text-foreground font-medium line-clamp-1 group-hover:text-accent-primary transition-colors">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextPost && (
            <Link 
              href={`/posts/${nextPost.id}`}
              className="glass glass-hover rounded-2xl p-6 text-right group transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-xs text-text-muted mb-2 block">次の記事 →</span>
              <span className="text-foreground font-medium line-clamp-1 group-hover:text-accent-primary transition-colors">
                {nextPost.title}
              </span>
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}
