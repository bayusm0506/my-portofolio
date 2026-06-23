'use client';

import ReactMarkdown, { Options } from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

interface MarkdownProps extends Options {
  children: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ children, ...props }) => {
  return (
    <div className="space-y-4">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          h2: ({ node, ...props }) => (
            <h2 className="mt-8 mb-4 font-bold text-xl uppercase" {...props} />
          ),
          h3: ({ node, ...props }) => <h3 className="mt-6 mb-3 font-bold text-lg" {...props} />,
          p: ({ node, ...props }) => <p className="mb-4" {...props} />,
          ul: ({ node, ...props }) => <ul className="mb-4 ml-5 list-disc space-y-2" {...props} />,
          li: ({ node, ...props }) => <li className="ml-4" {...props} />,
        }}
        {...props}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
