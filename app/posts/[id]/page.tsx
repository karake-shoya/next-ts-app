import LikeButton from "../../components/LikeButton";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/libs/client";
import { Post } from "../../types";
import { formatDate } from "@/libs/utils";

export const revalidate = false;

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await client.get<Post>({
    endpoint: "posts",
    contentId: id,
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
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-sm font-medium">記事一覧に戻る</span>
        </Link>

        {/* Article Card */}
        <article className="glass rounded-3xl overflow-hidden animate-fade-in-up">
          {/* Header Gradient */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-tertiary opacity-80" />
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
              <div className="text-text-muted text-lg leading-loose whitespace-pre-wrap border-l-2 border-accent-primary/30 pl-6">
                {post.body}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <LikeButton />
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-muted">Share:</span>
                <button className="p-2 rounded-lg glass glass-hover transition-all duration-300 hover:text-accent-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-lg glass glass-hover transition-all duration-300 hover:text-accent-secondary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
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
