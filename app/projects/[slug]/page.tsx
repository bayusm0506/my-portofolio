import { Container } from '@/components/common/Container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/projects';
import Link from 'next/link';

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="space-y-12 py-16">
      <Container>
        <Link href="/projects">← Back to Projects</Link>
        <div className="space-y-6 mt-6">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <p className="text-xl text-slate-700 dark:text-slate-300">{project.longDescription}</p>
          <div className="flex gap-4 pt-6">
            {project.link && (
              <Button>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </Button>
            )}
            {project.demo && (
              <Button variant="outline">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
