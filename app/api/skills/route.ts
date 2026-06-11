import { skillsByCategory } from '@/mocks/skills';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        message: 'Skills fetched successfully',
        data: skillsByCategory,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch skills',
        data: null,
      },
      { status: 500 },
    );
  }
}
