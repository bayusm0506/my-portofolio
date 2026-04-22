'use client';

import { Container } from '@/components/common/Container';
import { MotionCard } from '@/components/common/MotionCard';
import { MotionContainer } from '@/components/common/MotionContainer';
import { MotionGrid } from '@/components/common/MotionGrid';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog';
import Link from 'next/link';

export default function Blog() {
  return (
    <div className="space-y-12 py-16">
      <MotionContainer variant="fadeInUp">
        <Container>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Blog</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Thoughts, insights, and experiences
            </p>
          </div>
        </Container>
      </MotionContainer>

      <Container>
        <MotionGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <MotionCard key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-500">{post.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </MotionCard>
          ))}
        </MotionGrid>
      </Container>
    </div>
  );
}
