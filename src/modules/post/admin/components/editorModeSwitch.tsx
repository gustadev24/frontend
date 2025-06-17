import { useEffect, useState } from 'react';
import { useOnePost } from '../lib/usePosts';
import { cn } from '@/modules/core/lib/utils';
import Preview from './preview';
import Editor from './editor';
import { Button } from '@/modules/core/ui/button';

export default function ModeSwitch({ postId }: { postId: string }) {
  const [viewOrEdit, setViewOrEdit] = useState<'preview' | 'edit'>('edit');

  const [content, setContent] = useState<string>('');

  const { isLoading, post } = useOnePost({ postId });

  if (isLoading || !post) {
    return <div className="p-4">Loading...</div>;
  }

  useEffect(() => {
    if (!isLoading && post && post.content) {
      setContent(post.content);
    }
  }, [isLoading, post]);

  return (
    <div className="w-full flex-col gap-8 flex">
      <div className="w-full border-border border-b">
        <button
          className={cn(
            'font-bold text-sm text-foreground/60 px-6 py-3 cursor-pointer',
            {
              'text-foreground': viewOrEdit === 'edit',
            },
          )}
          onClick={() => setViewOrEdit('edit')}
        >
          Edit
        </button>
        <button
          className={cn(
            'font-bold text-sm text-foreground/60 px-6 py-3 cursor-pointer',
            {
              'text-foreground': viewOrEdit === 'preview',
            },
          )}
          onClick={() => setViewOrEdit('preview')}
        >
          Preview
        </button>
      </div>
      {viewOrEdit === 'preview' ? (
        <Preview content={content} />
      ) : (
        <Editor content={content} onChange={(value) => setContent(value)} />
      )}
      <div className="w-full flex justify-end items-center">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
