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
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          Tech Blog
          <span className="block text-base font-normal text-gray-500 mt-2">
            Next.jsとTailwind CSSの学習デモ
          </span>
        </h1>
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 12).map((post) => (
            <Link
              href={`/posts/${post.id}`}
              key={post.id}
              className="block group"
            >
              <div className="bg-white h-full p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-800 group-hover::text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                  {post.body}
                </p>

                <div className="text-blue-500 text-sm font-medium group-hover:underline mt-auto">
                  Read More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}