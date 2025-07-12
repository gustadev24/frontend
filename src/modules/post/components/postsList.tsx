import type { Post } from '@/modules/post/types/post';
import { useAllPosts } from '@/modules/post/lib/usePosts';

function PostsListSkeleton() {
  return (
    <a
      href={'/dashboard/post/'}
      className="p-4 border rounded-md border-border"
    >
      <div className="h-8 w-1/2 bg-gray-300 animate-pulse mb-2 rounded-xs"></div>
      <div className="h-5 w-1/4 bg-gray-300 animate-pulse mb-4 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-3 rounded-xs"></div>
    </a>
  );
}

function PostItem({ post }: { post: Post }) {
  return (
    <a
      href={'/dashboard/post/' + post.id}
      key={post.id}
      className="p-4 border rounded-md border-border"
    >
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-sm text-gray-600">{post.module.title}</p>
      <p className="mt-2">{post.excerpt}</p>
    </a>
  );
}

export default function PostsList() {
  const { isLoading, posts } = useAllPosts();

  if (isLoading || !posts) {
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <PostsListSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
