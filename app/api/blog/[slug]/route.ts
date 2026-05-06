import { blogPosts } from '@/lib/blog';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}
