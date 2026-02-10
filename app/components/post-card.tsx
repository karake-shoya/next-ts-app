import Link from "next/link";
import { Post } from "@/app/types";
import { formatDate } from "@/libs/utils";
import { getPostExcerpt, getPostTags } from "@/libs/posts";
import { ArrowRightIcon } from "@/app/components/icons";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  const tags = getPostTags(post).slice(0, 3);
  const excerpt = getPostExcerpt(post, 140);

  return (
    <article className="group rounded-2xl border border-border/70 bg-card-bg p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-accent-primary/20 via-accent-secondary/10 to-accent-tertiary/20">
        {post.eyecatch?.url ? (
          <img
            src={post.eyecatch.url}
            alt={post.title}
            className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-40 items-center justify-center text-sm text-text-muted">
            No Image
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
        <span>{formatDate(post.publishedAt || "")}</span>
        <span>•</span>
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent-primary/10 px-2 py-0.5 text-accent-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-foreground transition group-hover:text-accent-primary">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">{excerpt}</p>
      <Link
        href={`/posts/${post.id}`}
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-primary"
      >
        続きを読む <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </article>
  );
}
