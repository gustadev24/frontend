import { useEffect } from 'react';
import { useViewOrEdit } from '../lib/useViewOrEdit';
import ModeSwitch, { ModeSwitchSkeleton } from './modeSwitch';
import { useOnePost } from '../lib/usePosts';

export default function EditPost({ postId }: { postId: string }) {
  const { content, setContent, setViewOrEdit, viewOrEdit } = useViewOrEdit();
  const { isLoading, post } = useOnePost({ postId });

  useEffect(() => {
    if (!isLoading && post && post.content) {
      setContent(post.content);
    }
  }, [isLoading, post]);

  if (isLoading || !post) {
    return <ModeSwitchSkeleton />;
  }

  return (
    <ModeSwitch
      viewOrEdit={viewOrEdit}
      setViewOrEdit={setViewOrEdit}
      content={content}
      setContent={setContent}
    />
  );
}
