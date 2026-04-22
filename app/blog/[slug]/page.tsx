import { Container } from '@/components/common/Container';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/blog';
import Link from 'next/link';

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="space-y-12 py-16">
      <Container>
        <Link href="/blog">← Back to Blog</Link>
        <div className="space-y-6 mt-6">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <p className="text-sm text-slate-500">{post.date}</p>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-slate-700 dark:text-slate-300">{post.content}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
