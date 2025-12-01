import { Skill } from '../types';

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'language', proficiency: 95, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', category: 'language', proficiency: 90, url: 'https://www.typescriptlang.org/' },
  { name: 'Python', category: 'language', proficiency: 90, url: 'https://www.python.org/' },
  { name: 'C#', category: 'language', proficiency: 80, url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
  { name: 'C', category: 'language', proficiency: 75, url: 'https://en.cppreference.com/w/c' },
  { name: 'Java', category: 'language', proficiency: 80, url: 'https://www.java.com/' },

  // Frontend
  { name: 'React', category: 'frontend', proficiency: 95, url: 'https://react.dev/' },
  { name: 'Next.js', category: 'frontend', proficiency: 85, url: 'https://nextjs.org/' },
  { name: 'React Native', category: 'frontend', proficiency: 80, url: 'https://reactnative.dev/' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 90, url: 'https://tailwindcss.com/' },
  { name: 'Expo', category: 'frontend', proficiency: 80, url: 'https://expo.dev/' },

  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 90, url: 'https://nodejs.org/en' },
  { name: 'Fastify', category: 'backend', proficiency: 80, url: 'https://fastify.dev/' },
  { name: 'FastAPI', category: 'backend', proficiency: 80, url: 'https://fastapi.tiangolo.com/' },
  { name: '.NET', category: 'backend', proficiency: 75, url: 'https://dotnet.microsoft.com/' },
  { name: 'Express', category: 'backend', proficiency: 85, url: 'https://expressjs.com/' },
  { name: 'Nest.js', category: 'backend', proficiency: 80, url: 'https://nestjs.com/' },

  // Databases
  { name: 'PostgreSQL', category: 'database', proficiency: 85, url: 'https://www.postgresql.org/' },
  { name: 'Supabase', category: 'database', proficiency: 85, url: 'https://supabase.com/' },
  { name: 'MongoDB', category: 'database', proficiency: 85, url: 'https://www.mongodb.com/' },
  { name: 'MySQL', category: 'database', proficiency: 80, url: 'https://dev.mysql.com/doc/' },
  { name: 'Prisma', category: 'database', proficiency: 85, url: 'https://www.prisma.io/' },
  { name: 'Redis', category: 'database', proficiency: 75, url: 'https://redis.io/' },

  // DevOps & Cloud
  { name: 'Docker', category: 'devops', proficiency: 80, url: 'https://www.docker.com/' },
  { name: 'GCP', category: 'devops', proficiency: 75, url: 'https://cloud.google.com/' },
  { name: 'Vercel', category: 'devops', proficiency: 90, url: 'https://vercel.com/' },
  { name: 'Git', category: 'devops', proficiency: 95, url: 'https://git-scm.com/' },
  { name: 'Stripe', category: 'devops', proficiency: 80, url: 'https://stripe.com/' },
  { name: 'OpenAI API', category: 'devops', proficiency: 85, url: 'https://openai.com/' },
];

export const skillCategories = [
  { id: 'language', label: 'Languages', color: '#03DDFF' },
  { id: 'frontend', label: 'Frontend', color: '#6564db' },
  { id: 'backend', label: 'Backend', color: '#232ed1' },
  { id: 'database', label: 'Databases', color: '#9DDBFF' },
  { id: 'devops', label: 'DevOps & Cloud', color: '#00A8E8' },
];
