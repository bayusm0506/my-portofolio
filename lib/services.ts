import { ProjectsData } from '@/interfaces/global-interfaces';

export async function fetchProjects(): Promise<ProjectsData[]> {
  const res = await fetch('/api/projects');
  const response = await res.json();

  if (!response.success) throw new Error(response.message);

  return response.data;
}
