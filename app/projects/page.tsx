'use client';

import { Container } from '@/components/common/Container';
import { MotionCard } from '@/components/common/MotionCard';
import { MotionContainer } from '@/components/common/MotionContainer';
import { MotionGrid } from '@/components/common/MotionGrid';
import { ProjectSkeleton } from '@/components/common/ProjectSkeleton';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface ProjectsData {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link: string;
  demo: string;
}

export default function Projects() {
  const [projectsData, setProjectsData] = useState<ProjectsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch projects data from API
  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          setProjectsData(response.data);
        } else {
          console.error(response.message);
        }
      })
      .catch((err) => console.error('Fetch failed:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="space-y-12 py-16">
        <MotionContainer variant="fadeInUp">
          <Container>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Projects</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Exploring my latest work and experiments
              </p>
            </div>
          </Container>
        </MotionContainer>

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProjectSkeleton key={index} />
            ))}
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="space-y-12 py-16">
      <MotionContainer variant="fadeInUp">
        <Container>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Projects</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Exploring my latest work and experiments
            </p>
          </div>
        </Container>
      </MotionContainer>

      <Container>
        <MotionGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <MotionCard key={project.slug} delay={index * 0.1}>
              <Link href={`/projects/${project.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
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
