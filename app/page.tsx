'use client';

import Link from 'next/link';

import { BlogSkeleton } from '@/components/common/BlogSkeleton';
import { Container } from '@/components/common/Container';
import { MotionContainer } from '@/components/common/MotionContainer';
import { FeaturedProjectSkeleton } from '@/components/common/ProjectSkeleton';
import { SkillSkeleton } from '@/components/common/SkillSkeleton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchBlogs, fetchProjects, fetchSkills } from '@/lib/services';
import { truncateText } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'motion/react';
import { getIcon } from './skills/page';

export default function Home() {
  const { data: projectsData = [], isLoading: isLoadingProjects } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  const { data: skillsData = [], isLoading: isLoadingSkills } = useQuery({
    queryKey: ['skills'],
    queryFn: fetchSkills,
  });

  const { data: blogsData = [], isLoading: isLoadingBlogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  return (
    <div className="space-y-20 py-16">
      {/* Hero Section */}
      <MotionContainer variant="fadeInUp">
        <Container className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Hi, I&apos;m Bayu
              </motion.h1>
              <motion.p
                className="text-xl text-slate-600 dark:text-slate-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Software Engineer (React, Next.js, TypeScript) | Full-Stack | Open to Remote
              </motion.p>
            </div>

            <motion.p
              className="max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I am a software engineer with 3 years of frontend experience and 2 years of backend
              experience. Skilled in React.js, Next.js, TypeScript, Node.js (Fastify/Express),
              MongoDB, and PostgreSQL. I enjoy building solutions that improve performance and
              scalability. I&apos;m seeking global opportunities to collaborate with diverse teams
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </MotionContainer>

      {/* Featured Projects */}
      <MotionContainer variant="fadeInUp">
        <Container className="space-y-8">
          <div>
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className="mt-2 text-slate-600 dark:text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A selection of my recent work and side projects
            </motion.p>
          </div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {isLoadingProjects
              ? Array.from({ length: 3 }).map((_, index) => <FeaturedProjectSkeleton key={index} />)
              : projectsData.map((project) => (
                  <Card key={project.title} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{truncateText(project.description, 80)}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full justify-start pl-0">
                        <Link href={project.link}>View Project →</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
          </motion.div>
          <Button variant="outline" className="w-full sm:w-auto">
            <Link href="/projects">See All Projects</Link>
          </Button>
        </Container>
      </MotionContainer>

      {/* Skills Section */}
      <MotionContainer variant="fadeInUp">
        <Container className="space-y-8">
          <div>
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.p
              className="mt-2 text-slate-600 dark:text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Technologies I work with regularly
            </motion.p>
          </div>

          {isLoadingSkills ? (
            <SkillSkeleton />
          ) : (
            <div className="flex flex-wrap gap-2">
              {skillsData.map((category) => (
                <Card key={category.name} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="flex items-center justify-center">
                    <div className="flex items-center gap-3">
                      <div className="text-slate-600 dark:text-slate-400">
                        {getIcon(category.icon)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{category.name}</CardTitle>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <Button variant="outline" className="w-full sm:w-auto">
            <Link href="/skills">See Full Skills</Link>
          </Button>
        </Container>
      </MotionContainer>

      {/* CTA Section */}
      <Container className="space-y-8 rounded-lg border border-slate-200 bg-slate-50 p-12 dark:border-slate-800 dark:bg-slate-900">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400">
            I&apos;m always interested in exciting projects and collaborations. Feel free to reach
            out and let&apos;s discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg">
            <Link href="/contact">Start a Project</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="mailto:your.email@example.com">Email Me</Link>
          </Button>
        </div>
      </Container>

      {/* Blog Preview */}
      <MotionContainer variant="fadeInUp">
        <Container className="space-y-8">
          <div>
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Latest Articles
            </motion.h2>
            <motion.p
              className="mt-2 text-slate-600 dark:text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Thoughts on web development and technology
            </motion.p>
          </div>

          {isLoadingBlogs ? (
            <BlogSkeleton />
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {blogsData.map((blog) => (
                <Card key={blog.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{blog.title}</CardTitle>
                    <CardDescription>Published on {blog.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                      {blog.description}
                    </p>
                    <Button variant="ghost" className="pl-0">
                      <Link href="/blog">Read More →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <Button variant="outline" className="w-full sm:w-auto">
            <Link href="/blog">Read All Articles</Link>
          </Button>
        </Container>
      </MotionContainer>
    </div>
  );
}
