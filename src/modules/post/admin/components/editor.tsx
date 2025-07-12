import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

export default function Editor({
  content,
  onChange,
}: {
  content: string;
  onChange: (value: string) => void;
}) {
  return <SimpleMDE spellCheck={false} value={content} onChange={onChange} />;
}
