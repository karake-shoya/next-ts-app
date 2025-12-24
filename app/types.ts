import { MicroCMSDate } from "microcms-js-sdk";

// 記事データの型定義
export type Post = {
  id: string;
  title: string;
  body: string;
} & MicroCMSDate;