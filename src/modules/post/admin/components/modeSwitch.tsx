import { Button } from '@/modules/core/ui/button';
import { useState } from 'react';
import Editor from './editor';

export default function ModeSwitch() {
  const [viewOrEdit, setViewOrEdit] = useState<'view' | 'edit'>('view');

  const [content, setContent] = useState<string>('');

  return (
    <div>
      <div>
        <Button onClick={() => setViewOrEdit('view')}>View</Button>
        <Button onClick={() => setViewOrEdit('edit')}>Edit</Button>
      </div>
      {viewOrEdit === 'view' ? (
        <div>
          <h2>View Mode</h2>
          <p>{content || 'No content available.'}</p>
        </div>
      ) : (
        <Editor content={content} onChange={(value) => setContent(value)} />
      )}
    </div>
  );
}
