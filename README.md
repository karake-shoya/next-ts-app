This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## UI/UX 改修内容

- 共通レイアウトを刷新（ヘッダー/フッター/最大幅/余白/タイポグラフィ）  
- HomeにHero・Featured・Latest・Tags導線を追加  
- Posts一覧に検索 + ページネーション付きカードUIを追加  
- 記事詳細に目次・タグ表示・関連記事を追加  
- Aboutをポートフォリオ用途で整理し、強み/実績/導線を明確化  

## 仮定（データ構造）

- 記事データに `tags`（文字列配列または `{ name }` 形式）と `category` が含まれる前提で表示  
- 画像は `eyecatch.url` を参照（無い場合はプレースホルダ表示）  
- 上記が存在しない場合でもUIが破綻しないようフォールバックを用意  
- MicroCMSの環境変数が未設定の場合は `libs/posts.ts` のモックデータを利用  

## shadcn/ui 導入手順（未導入の場合）

本プロジェクトはTailwind CSS v4を利用しています。shadcn/ui を採用する場合は、
Tailwindの設定に合わせてUIコンポーネントを生成/調整してください。

1. `npx shadcn@latest init` を実行  
2. `app/globals.css` と `@theme` の色設定に合わせて `components.json` を調整  
3. 必要なUI（Button, Card, Badge, Input など）を `npx shadcn@latest add <component>` で追加  
4. 既存コンポーネントを段階的に差し替え  

## 現在の全体構成（主要ディレクトリ）

- `app/`：App Routerのページ/レイアウト/共通UI  
  - `layout.tsx`：共通レイアウト（Header/Footer）  
  - `page.tsx`：Home  
  - `about/`, `posts/`, `tags/`, `contact/`, `privacy/`, `terms/`：各ページ  
  - `components/`：UIコンポーネント（card, toc, searchなど）  
  - `data/`：UI用コピー/サイト設定  
  - `globals.css`：Tailwindと全体スタイル  
- `libs/`：データ取得/ユーティリティ  
  - `client.ts`：MicroCMSクライアント  
  - `posts.ts`：記事取得/タグ/関連記事ロジック  
  - `toc.ts`：目次抽出  

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
