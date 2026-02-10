import { client } from "@/libs/client";
import { POSTS_FETCH_LIMIT } from "@/libs/constants";
import { stripMarkdown } from "@/libs/utils";
import { Post } from "@/app/types";

const TAG_FALLBACK = "General";
const hasMicroCms = Boolean(
  process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY
);

const mockPosts: Post[] = [
  {
    id: "design-system",
    title: "読みやすいUIのためのデザインシステム整理",
    body: "## 余白と階層の設計\nUIの読みやすさは余白と見出し設計で決まります。\n\n## 実務で使えるルール\n- 8pxグリッド\n- セクション間余白\n",
    publishedAt: "2025-01-05T10:00:00Z",
    createdAt: "2025-01-05T10:00:00Z",
    updatedAt: "2025-01-05T10:00:00Z",
    revisedAt: "2025-01-05T10:00:00Z",
    tags: ["UI", "Design"],
    category: "Frontend",
  },
  {
    id: "next-app-router",
    title: "App Routerで作るブログ設計のポイント",
    body: "## ディレクトリ設計\nApp Routerはルート設計が重要です。\n\n## データ取得\nMicroCMSやローカルデータに対応できる設計が必要です。\n",
    publishedAt: "2025-01-10T10:00:00Z",
    createdAt: "2025-01-10T10:00:00Z",
    updatedAt: "2025-01-10T10:00:00Z",
    revisedAt: "2025-01-10T10:00:00Z",
    tags: ["Next.js", "Architecture"],
    category: "Web",
  },
  {
    id: "search-feature",
    title: "クライアント検索とタグ導線の作り方",
    body: "## 検索体験\nタイトル/タグでの検索導線を用意します。\n\n## タグページ\nタグ詳細ページで回遊性を高めます。\n",
    publishedAt: "2025-01-12T10:00:00Z",
    createdAt: "2025-01-12T10:00:00Z",
    updatedAt: "2025-01-12T10:00:00Z",
    revisedAt: "2025-01-12T10:00:00Z",
    tags: ["UX", "Search"],
    category: "Frontend",
  },
  {
    id: "portfolio-about",
    title: "Aboutページで信頼を作る構成",
    body: "## 自己紹介\n2〜4行で専門領域を明確に。\n\n## 実績\n代表的な制作物を出す。\n",
    publishedAt: "2025-01-15T10:00:00Z",
    createdAt: "2025-01-15T10:00:00Z",
    updatedAt: "2025-01-15T10:00:00Z",
    revisedAt: "2025-01-15T10:00:00Z",
    tags: ["Portfolio"],
    category: "Career",
  },
  {
    id: "dx-playbook",
    title: "業務DXのためのプロジェクト進行",
    body: "## 要件整理\n小さく試して改善する。\n\n## 運用設計\n運用担当が迷わない設計を。",
    publishedAt: "2025-01-18T10:00:00Z",
    createdAt: "2025-01-18T10:00:00Z",
    updatedAt: "2025-01-18T10:00:00Z",
    revisedAt: "2025-01-18T10:00:00Z",
    tags: ["DX", "PM"],
    category: "Business",
  },
];

export async function getAllPosts(): Promise<Post[]> {
  if (!hasMicroCms || !client) {
    return mockPosts;
  }
  const activeClient = client;

  const firstData = await activeClient.get({
    endpoint: "posts",
    queries: { limit: POSTS_FETCH_LIMIT },
  });

  let posts: Post[] = firstData.contents;
  const totalCount: number = firstData.totalCount;

  if (totalCount > POSTS_FETCH_LIMIT) {
    const remainingPages = Math.ceil(
      (totalCount - POSTS_FETCH_LIMIT) / POSTS_FETCH_LIMIT
    );
    const additionalRequests = Array.from({ length: remainingPages }, (_, i) =>
      activeClient.get({
        endpoint: "posts",
        queries: { limit: POSTS_FETCH_LIMIT, offset: (i + 1) * POSTS_FETCH_LIMIT },
      })
    );

    const additionalData = await Promise.all(additionalRequests);
    additionalData.forEach((data) => {
      posts = [...posts, ...data.contents];
    });
  }

  return posts;
}

export async function getPostById(
  id: string,
  draftKey?: string
): Promise<Post | null> {
  if (!hasMicroCms || !client) {
    return mockPosts.find((post) => post.id === id) ?? null;
  }
  const activeClient = client;
  const post = await activeClient
    .get<Post>({
      endpoint: "posts",
      contentId: id,
      queries: draftKey ? { draftKey } : undefined,
    })
    .catch(() => null);
  return post;
}

export async function getAdjacentPosts(post: Post): Promise<{
  prevPost: Post | null;
  nextPost: Post | null;
}> {
  if (!hasMicroCms || !client) {
    const sorted = [...mockPosts].sort(
      (a, b) =>
        new Date(b.publishedAt ?? 0).getTime() -
        new Date(a.publishedAt ?? 0).getTime()
    );
    const index = sorted.findIndex((item) => item.id === post.id);
    return {
      prevPost: sorted[index + 1] ?? null,
      nextPost: sorted[index - 1] ?? null,
    };
  }
  const activeClient = client;

  const [prevData, nextData] = await Promise.all([
    activeClient.get<{ contents: Post[] }>({
      endpoint: "posts",
      queries: {
        filters: `publishedAt[greater_than]${post.publishedAt}`,
        orders: "publishedAt",
        limit: 1,
        fields: "id, title, publishedAt",
      },
    }),
    activeClient.get<{ contents: Post[] }>({
      endpoint: "posts",
      queries: {
        filters: `publishedAt[less_than]${post.publishedAt}`,
        orders: "-publishedAt",
        limit: 1,
        fields: "id, title, publishedAt",
      },
    }),
  ]);

  return {
    prevPost: prevData.contents[0] || null,
    nextPost: nextData.contents[0] || null,
  };
}

export function getPostTags(post: Post): string[] {
  const tags: string[] = [];
  if (Array.isArray(post.tags)) {
    post.tags.forEach((tag) => {
      if (typeof tag === "string") {
        tags.push(tag);
      } else if (tag?.name) {
        tags.push(tag.name);
      }
    });
  }
  if (post.category) {
    if (typeof post.category === "string") {
      tags.push(post.category);
    } else if (post.category.name) {
      tags.push(post.category.name);
    }
  }
  return tags.length > 0 ? Array.from(new Set(tags)) : [TAG_FALLBACK];
}

export function getPostExcerpt(post: Post, length = 120): string {
  const text = stripMarkdown(post.body || "");
  if (text.length <= length) {
    return text;
  }
  return `${text.slice(0, length)}…`;
}

export function getTagCounts(posts: Post[]): Array<{ tag: string; count: number }> {
  const counts = new Map<string, number>();
  posts.forEach((post) => {
    getPostTags(post).forEach((tag) => {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    });
  });
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getRelatedPosts(
  posts: Post[],
  currentId: string,
  limit = 3
): Post[] {
  const current = posts.find((post) => post.id === currentId);
  if (!current) {
    return posts.filter((post) => post.id !== currentId).slice(0, limit);
  }
  const currentTags = new Set(getPostTags(current));
  const scored = posts
    .filter((post) => post.id !== currentId)
    .map((post) => {
      const tagMatches = getPostTags(post).filter((tag) => currentTags.has(tag))
        .length;
      return { post, score: tagMatches };
    })
    .sort((a, b) => b.score - a.score);
  const related = scored.filter((item) => item.score > 0).map((item) => item.post);
  if (related.length >= limit) {
    return related.slice(0, limit);
  }
  const fallback = scored.map((item) => item.post).slice(0, limit);
  return fallback;
}

export function getAllTags(posts: Post[]): string[] {
  const tags = new Set<string>();
  posts.forEach((post) => {
    getPostTags(post).forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}
