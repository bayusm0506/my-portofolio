import { skillsByCategory } from '@/lib/skills';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(skillsByCategory);
}
