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

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
  author: string;
}

export interface Skill {
  name: string;
  skills: Array<{
    name: string;
    level: string;
    icon: string;
  }>;
}
