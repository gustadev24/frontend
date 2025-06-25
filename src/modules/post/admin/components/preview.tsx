import { marked } from 'marked';
import markedShiki from 'marked-shiki';
import '@/modules/post/lib/setupCopy.css';
import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';
import { setupCopy } from '@/modules/post/lib/setupCopy';

export default function Preview({ content }: { content: string }) {
  const [parsedContent, setParsedContent] = useState<string>('');

  const parse = async () => {
    const mark = await marked
      .setOptions({
        async: true,
      })
      .use(
        markedShiki({
          async highlight(code, lang) {
            return await codeToHtml(code, {
              lang,
              theme: 'github-dark',
            });
          },
          container: `<figure class="highlighted-code">
      <button class="btn-copy">Copy</button>
      %s
      </figure>`,
        }),
      )
      .parse(content);
    setParsedContent(mark);
  };

  useEffect(() => {
    parse().catch((err) => console.log(err));
  }, [content]);

  useEffect(() => {
    setupCopy();
  }, [parsedContent]);

  return (
    <div
      className="prose text-foreground w-full max-w-none"
      dangerouslySetInnerHTML={{ __html: parsedContent }}
    ></div>
  );
}
