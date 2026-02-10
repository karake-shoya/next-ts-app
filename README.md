## 概要

Next.js App Router + TypeScript で構成したテックブログです。MicroCMS が有効な場合は
CMSのコンテンツを取得し、未設定の場合はモックデータでUIを確認できます。ブログとして
必要な導線・記事検索・タグ回遊・記事詳細の目次を一式揃えています。

## 主な機能

- Home: Hero / Featured / Latest / 人気タグの導線
- Posts: タイトル・タグ検索 + ページネーション付き一覧
- Tags: タグ一覧とタグ別記事ページ
- Post Detail: タグ表示 / 目次 / Markdown + シンタックスハイライト / 関連記事 / 前後記事
- About / Contact / Terms / Privacy の静的ページ
- MicroCMS Preview / Revalidate 用のAPIルート

## データソース

- MicroCMS (`MICROCMS_SERVICE_DOMAIN`, `MICROCMS_API_KEY`) があればAPIを使用
- 未設定の場合は `libs/posts.ts` のモックデータを利用
- `tags` は文字列配列または `{ name }` 形式、`category` は文字列または `{ name }` を想定
- `publishedAt` を基準に記事の前後関係を算出

## 環境変数

`.env.local` に以下を設定するとMicroCMS/プレビュー/再検証が有効になります。

```bash
MICROCMS_SERVICE_DOMAIN=your-service
MICROCMS_API_KEY=your-api-key
MICROCMS_PREVIEW_SECRET=your-preview-secret
REVALIDATE_SECRET=your-revalidate-secret
```

## 開発コマンド

開発サーバーを起動:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Lint:

```bash
npm run lint
```

## 主要ディレクトリ

- `app/`: ルーティング・ページ・UIコンポーネント
- `app/data/`: Home/About などの静的コピー
- `libs/`: MicroCMS クライアント / 記事取得 / ユーティリティ

## 補足

- 本プロジェクトは Tailwind CSS v4 を利用しています。
- `@tailwindcss/typography` を使用して Markdown の表示を調整しています。

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
