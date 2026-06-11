import { blogPosts } from '@/mocks/blog';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        message: 'Blogs fetched successfully',
        data: blogPosts,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch blogs',
        data: null,
      },
      { status: 500 },
    );
  }
}
