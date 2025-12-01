export interface Project {
  id: string;
  title: string;
  year: number;
  shortDescription: string;
  fullDescription: string[];
  image: string;
  technologies: string[];
  challenges?: string[];
  impact?: string[];
  links: {
    live?: string;
    github?: string;
  };
  tags: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Skill {
  name: string;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'devops';
  proficiency: number; // 1-100
  icon?: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
