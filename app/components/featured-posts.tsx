import PostCard from "@/app/components/post-card";
import { Post } from "@/app/types";

type Props = {
  posts: Post[];
};

export default function FeaturedPosts({ posts }: Props) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
