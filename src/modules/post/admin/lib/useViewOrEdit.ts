import { useState } from 'react';

export const useViewOrEdit = () => {
  const [viewOrEdit, setViewOrEdit] = useState<'preview' | 'edit'>('edit');

  const [content, setContent] = useState<string>('');

  return {
    viewOrEdit,
    setViewOrEdit,
    content,
    setContent,
  };
};
