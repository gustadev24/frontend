import type { Post } from '@/modules/post/types/post';
import { useAllPosts } from '../lib/usePosts';
import { Link } from '@/modules/core/ui/link';

function PostsListSkeleton() {
  return (
    <div className="p-4 border rounded-md border-border">
      <div className="h-8 w-1/2 bg-gray-300 animate-pulse mb-2 rounded-xs"></div>
      <div className="h-5 w-1/4 bg-gray-300 animate-pulse mb-4 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-3 rounded-xs"></div>
    </div>
  );
}

function PostItem({ post }: { post: Post }) {
  return (
    <div
      // href={'/dashboard/post/' + post.id}
      key={post.id}
      className="p-4 border rounded-md border-border flex justify-between items-center"
    >
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p className="text-sm text-gray-600">{post.module.title}</p>
        <p className="mt-2">{post.excerpt}</p>
      </div>
      <div className="flex flex-col gap-4">
        <Link href={`/dashboard/post/${post.id}`}>View Post</Link>
        <Link href={`/teacher/post/${post.id}/edit`} variant={'secondary'}>
          Edit Post
        </Link>
        <Link href={`/teacher/post/${post.id}/delete`} variant={'destructive'}>
          Delete Post
        </Link>
      </div>
    </div>
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
