import Link from "next/link";
import { formatDate } from "@/libs/utils";
import { Post } from "@/app/types";
import { ArrowRightIcon } from "@/app/components/icons";
import { stripMarkdown } from "@/libs/utils";

type Props = {
  post: Post;
  index: number;
};

export default function PostCard({ post, index }: Props) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className={`
        group block animate-fade-in-up stagger-${Math.min((index % 6) + 1, 6)}
      `}
      style={{ opacity: 0 }}
    >
      <article className="glass glass-hover gradient-border card-shine rounded-2xl h-full p-6 flex flex-col transition-all duration-300 hover:-translate-y-1">
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-primary/10 text-accent-primary">
            Tech
          </span>
          <span className="text-xs text-text-muted">
            {formatDate(post.publishedAt || "")}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent-primary transition-colors duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-text-muted line-clamp-3 mb-4 flex-grow leading-relaxed">
          {stripMarkdown(post.body)}
        </p>

        {/* Read More */}
        <div className="flex items-center gap-2 text-sm font-medium text-accent-primary group-hover:gap-3 transition-all duration-300">
          <span>続きを読む</span>
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </article>
    </Link>
  );
}

