import { posts } from "../../blogData";
import LikeButton from "../../components/LikeButton";
import { notFound } from "next/navigation";

function getPost(id: string) {
  return posts.find((post) => post.id === id);
}

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 w-full"></div>
        <div className="p-8 md:p-12">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            Article
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="text-gray-700 text-lg leading-loose border-t border-gray-100 pt-6 whitespace-pre-wrap">
            <p>{post.body}</p>
            <p className="mt-4"></p>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
            <LikeButton />

            <a href="/" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}