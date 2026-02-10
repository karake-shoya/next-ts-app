"use client";

import { useMemo, useState } from "react";
import { Post } from "@/app/types";
import PostCard from "@/app/components/post-card";
import { getPostTags } from "@/libs/posts";

type Props = {
  posts: Post[];
  postsPerPage?: number;
};

export default function SearchBox({ posts, postsPerPage = 9 }: Props) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(() => {
    if (!query) return posts;
    const lower = query.toLowerCase();
    return posts.filter((post) => {
      const tags = getPostTags(post).join(" ").toLowerCase();
      return (
        post.title.toLowerCase().includes(lower) ||
        tags.includes(lower)
      );
    });
  }, [posts, query]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const pagePosts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  const handleChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  return (
    <div className="space-y-6" id="search">
      <div className="rounded-2xl border border-border/60 bg-card-bg p-4">
        <label className="text-xs font-semibold uppercase tracking-wide text-text-muted">
          記事検索
        </label>
        <input
          value={query}
          onChange={(event) => handleChange(event.target.value)}
          placeholder="タイトルやタグで検索"
          className="mt-2 w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent-primary"
        />
      </div>

      {pagePosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {pagePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-border/60 bg-card-bg p-6 text-sm text-text-muted">
          該当する記事が見つかりませんでした。
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-text-muted">
        <span>
          {filteredPosts.length}件中 {pagePosts.length}件を表示
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className="rounded-full border border-border/70 px-3 py-1 text-xs transition hover:text-foreground disabled:opacity-40"
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="text-xs">
            {page} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            className="rounded-full border border-border/70 px-3 py-1 text-xs transition hover:text-foreground disabled:opacity-40"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
