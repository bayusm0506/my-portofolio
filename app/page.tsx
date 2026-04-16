'use client';

import Link from 'next/link';

import { Container } from '@/components/common/Container';
import { MotionContainer } from '@/components/common/MotionContainer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'motion/react';

export default function Home() {
  const featuredProjects = [
    {
      description: 'A modern web application built with Next.js and TypeScript',
      href: '#',
      title: 'Project One',
    },
    {
      description: 'Full-stack solution with real-time features',
      href: '#',
      title: 'Project Two',
    },
    {
      description: 'Mobile-first responsive design showcase',
      href: '#',
      title: 'Project Three',
    },
  ];

  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
    'JavaScript',
    'REST APIs',
  ];

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
                Hi, I&apos;m Bayu Setra Maulana
              </motion.h1>
              <motion.p
                className="text-xl text-slate-600 dark:text-slate-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Full Stack Developer building modern web applications with JavaScript, React, and
                Node.js
              </motion.p>
            </div>

            <motion.p
              className="max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I specialize in creating seamless user experiences and robust backend solutions. With
              expertise in both frontend and backend technologies, I deliver scalable applications
              that solve real problems. Ask me about frontend and backend technologies, and how to
              leverage modern JavaScript frameworks.
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
            {featuredProjects.map((project) => (
              <Card key={project.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-start pl-0">
                    <Link href={project.href}>View Project →</Link>
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
      <Container className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Technologies I work with regularly
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              key={skill}
              className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 dark:bg-slate-800 dark:text-slate-100"
            >
              {skill}
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full sm:w-auto">
          <Link href="/skills">See Full Profile</Link>
        </Button>
      </Container>

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
      <Container className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Thoughts on web development and technology
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((item) => (
            <Card key={item} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Blog Post Title {item}</CardTitle>
                <CardDescription>Published on April {item}, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                  A brief excerpt of the blog post content goes here...
                </p>
                <Button variant="ghost" className="pl-0">
                  <Link href="/blog">Read More →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button variant="outline" className="w-full sm:w-auto">
          <Link href="/blog">Read All Articles</Link>
        </Button>
      </Container>
    </div>
  );
}
