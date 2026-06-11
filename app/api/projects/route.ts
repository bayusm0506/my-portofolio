import { projects } from '@/mocks/projects';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        message: 'Projects fetched successfully',
        data: projects,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch projects',
        data: null,
      },
      { status: 500 },
    );
  }
}
