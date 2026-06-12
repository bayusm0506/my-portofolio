import { BlogPost, ProjectsData, Skill } from '@/interfaces/global-interfaces';

export async function fetchProjects(): Promise<ProjectsData[]> {
  const res = await fetch('/api/projects');
  const response = await res.json();

  if (!response.success) throw new Error(response.message);

  return response.data;
}

export async function fetchBlogs(): Promise<BlogPost[]> {
  const res = await fetch('/api/blog');
  const response = await res.json();

  if (!response.success) throw new Error(response.message);

  return response.data;
}

export async function fetchSkills(): Promise<Skill[]> {
  const res = await fetch('/api/skills');
  const response = await res.json();

  if (!response.success) throw new Error(response.message);

  return response.data;
}
