import Link from "next/link";
import { Post } from "./types";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if(!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="p-10">
      <h1 className="tect-3xl font-bold mb-8">ブログ記事一覧</h1>
      <div className="grid gap-4">
        {posts.slice(0.10).map((post) => (
          <div key={post.id} className="border p-4 rounded shadow hover:bg-gray-50">
            <h2 className="tet-xl font-bold">
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="tet-gray-600 mt-2">{post.body.substring(0, 50)}...</p>
          </div>
        ))}
      </div>
    </main>
  );
}