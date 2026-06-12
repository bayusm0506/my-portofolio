'use client';

import { Container } from '@/components/common/Container';
import { MotionCard } from '@/components/common/MotionCard';
import { MotionContainer } from '@/components/common/MotionContainer';
import { MotionGrid } from '@/components/common/MotionGrid';
import { SkillSkeleton } from '@/components/common/SkillSkeleton';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchSkills } from '@/lib/services';
import { useQuery } from '@tanstack/react-query';

export default function Skills() {
  const { data: skillsData = [], isLoading } = useQuery({
    queryKey: ['skills'],
    queryFn: fetchSkills,
  });

  if (isLoading) {
    return (
      <div className="space-y-12 py-16">
        <MotionContainer variant="fadeInUp">
          <Container>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Skills</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Technologies and tools I work with
              </p>
            </div>
          </Container>
        </MotionContainer>

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkillSkeleton key={index} />
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
            <h1 className="text-4xl font-bold">Skills</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Technologies and tools I work with
            </p>
          </div>
        </Container>
      </MotionContainer>

      <Container>
        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <div key={category.name} className="space-y-4">
              <h2 className="text-2xl font-bold">{category.name}</h2>
              <MotionGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <MotionCard key={skill.name} delay={categoryIndex * 0.1 + skillIndex * 0.05}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary">{skill.level}</Badge>
                      </CardContent>
                    </Card>
                  </MotionCard>
                ))}
              </MotionGrid>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
