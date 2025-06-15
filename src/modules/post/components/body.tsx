import { marked } from 'marked';
import { useOnePost } from '../hooks/usePosts';

function BodySkeleton() {
  return (
    <article>
      <div className="h-11 w-1/2 bg-gray-300 animate-pulse mb-4 rounded-xs"></div>
      <div className="h-6 w-1/4 bg-gray-300 animate-pulse mb-10 rounded-xs"></div>
      <div className="h-8 w-2/3 bg-gray-300 animate-pulse mb-8 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-3 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-3 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-3 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-3 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-3 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-8 rounded-xs"></div>
      <div className="h-96 w-full bg-gray-300 animate-pulse mb-10 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-3 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-3 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-3 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-3 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-3 rounded-xs"></div>
      <div className="h-5 w-full bg-gray-300 animate-pulse mb-8 rounded-xs"></div>
    </article>
  );
}

export default function Body({ postId }: { postId: string }) {
  const { post, isLoading } = useOnePost({ postId });

  if (isLoading || !post) {
    return <BodySkeleton />;
  }

  const mark = marked(post.content, { async: false });

  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">{post.module.title}</h1>
      <span className="text-sm text-foreground/80">
        {post.chapter}: {post.title} by {post.author}
      </span>
      <div
        className="prose text-foreground mt-10 w-full max-w-none"
        dangerouslySetInnerHTML={{ __html: mark }}
      ></div>
    </article>
  );
}
