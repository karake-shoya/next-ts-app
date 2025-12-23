import { Post } from "../../types";
import LikeButton from "../../components/LikeButton";

// 詳細データを取得する関数
async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

// Propsの型定義
type Props = {
  params: { id: string };
};

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  // paramsをawaitで解決
  const { id } = await params;
  const post = await getPost(id);

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 text-lg">{post.body}</p>

      <LikeButton />

      <div className="mt-8">
        <a href="/" className="tect-blue-500 hover:underline">← 一覧へ戻る</a>
      </div>
    </main>
  );
}