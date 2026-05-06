import { blogPosts } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(blogPosts);
}
