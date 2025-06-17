import { marked } from 'marked';

export default function Preview({ content }: { content: string }) {
  const mark = marked(content, { async: false });

  return (
    <div
      className="prose text-foreground w-full max-w-none"
      dangerouslySetInnerHTML={{ __html: mark }}
    ></div>
  );
}
