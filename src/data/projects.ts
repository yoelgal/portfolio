import { Project } from '../types';

// Import images
import DigestedImage from '../assets/digested.png';
import StoryTimeImage from '../assets/storytime.png';
import SkillSwapImage from '../assets/skillswap.png';
import SpaceExploreImage from '../assets/space-explore.png';
import CSWizardImage from '../assets/cswizard.png';

export const projects: Project[] = [
  {
    id: 'digested-ai',
    title: 'Digested AI',
    year: 2025,
    shortDescription: 'AI-powered content curation platform delivering personalised news digests to your inbox.',
    fullDescription: [
      'Digested is an AI-powered platform that transforms information overload into personalised, digestible summaries. Users can create custom digests on any topic and receive AI-curated content delivered to their email daily, weekly, or monthly.',
      'Built the entire platform from scratch including a Next.js 16 frontend with React 19, a Fastify backend service with BullMQ job queues, and deployed on GCP Cloud Run for scalable parallel processing.',
      'Integrated OpenAI GPT-4o-mini for intelligent article summarisation, Tavily and Exa APIs for content discovery, Stripe for subscriptions, and Clerk for authentication.',
    ],
    image: DigestedImage,
    technologies: ['Next.js', 'React', 'TypeScript', 'Fastify', 'Supabase', 'OpenAI', 'Stripe', 'GCP', 'Docker'],
    challenges: [
      'Building a reliable job queue system for processing thousands of articles',
      'Designing an AI pipeline that avoids content repetition across digest editions',
      'Optimising costs while maintaining quality summarisation',
    ],
    impact: [
      'Launched to production with paying subscribers',
      'Processing thousands of articles daily',
      'Built end-to-end from idea to revenue as co-founder',
    ],
    links: {
      live: 'https://digestedai.com',
    },
    tags: ['AI', 'SaaS', 'Next.js', 'OpenAI', 'Stripe', 'TypeScript'],
  },
  {
    id: 'storytime',
    title: 'StoryTime',
    year: 2025,
    shortDescription: 'AI-powered platform for generating personalized stories for children.',
    fullDescription: [
      "StoryTime is an innovative platform that uses advanced AI language models to create unique, personalized stories for children. Each story is tailored to the child's interests, preferences, and learning goals.",
      "The application features an intuitive interface where parents can input their child's details and preferences, while the AI works behind the scenes to craft engaging, age-appropriate narratives that spark imagination and promote learning.",
    ],
    image: StoryTimeImage,
    technologies: ['React-Native', 'Next.js', 'Supabase', 'Stripe', 'TypeScript', 'Node.js', 'OpenAI API', 'Expo'],
    challenges: [
      'Ensuring AI-generated content is always age-appropriate and safe',
      'Optimizing response times for real-time story generation',
      'Building a seamless cross-platform mobile experience',
    ],
    impact: [
      'Successfully launched to production with paying users',
      'Generates hundreds of unique stories weekly',
      'Positive feedback from parents on educational value',
    ],
    links: {
      live: 'https://storytime.parentwiseai.com',
    },
    tags: ['AI', 'React-Native', 'Expo', 'Next.js', 'Supabase', 'Stripe', 'TypeScript'],
  },
  {
    id: 'skillswap',
    title: 'SkillSwap',
    year: 2024,
    shortDescription: 'A platform for university students to teach others and learn new skills.',
    fullDescription: [
      'SkillSwap is a platform that allows university students to teach others and learn new skills. Driven by a powerful and secure Nest.js backend, the platform features a user-friendly interface that allows users to easily navigate the site and find the skills they are looking for.',
      'The platform implements secure authentication, real-time messaging, and a sophisticated matching algorithm to connect students with complementary skills.',
    ],
    image: SkillSwapImage,
    technologies: ['Nest.js', 'React', 'TypeScript', 'MySQL', 'Docker', 'Git'],
    challenges: [
      'Designing a fair skill-exchange matching algorithm',
      'Implementing real-time communication features',
      'Ensuring data security for student information',
    ],
    impact: [
      'Facilitated 100+ skill exchanges during university pilot',
      'Received positive feedback from student union',
    ],
    links: {},
    tags: ['Nest.js', 'React', 'TypeScript'],
  },
  {
    id: 'space-explorer',
    title: 'Space Explorer',
    year: 2024,
    shortDescription: 'An app that lets you explore the Milky Way from the comfort of your home.',
    fullDescription: [
      'This app was built using the Three.js library. It allows users to explore the universe and learn about the different planets in our solar system.',
      'The app features accurate 3D models of celestial bodies, orbital animations, and plays ambient music to create an immersive space exploration experience.',
    ],
    image: SpaceExploreImage,
    technologies: ['Three.js', 'JavaScript', 'React', 'CSS'],
    challenges: [
      'Creating accurate orbital mechanics simulations',
      'Optimizing 3D rendering for smooth performance',
      'Designing intuitive camera controls for 3D navigation',
    ],
    impact: [
      'Featured in university graphics showcase',
      'Demonstrates advanced 3D web development skills',
    ],
    links: {
      live: 'https://explore.yoelgal.com',
    },
    tags: ['Three.js', 'JavaScript', 'Interactive', 'React'],
  },
  {
    id: 'cs-wizard',
    title: 'CS Wizard',
    year: 2022,
    shortDescription: 'A site providing topic-specific practice papers for A-Level Computer Science.',
    fullDescription: [
      'CS Wizard is a site that provides topic-specific practice papers for A-Level Computer Science. The site features a user-friendly interface that allows students to easily navigate and find the papers they are looking for.',
      'Built to help students prepare more effectively by organizing past papers by topic rather than exam session.',
    ],
    image: CSWizardImage,
    technologies: ['Next.js', 'JavaScript', 'CSS', 'Vercel'],
    challenges: [
      'Organizing and categorizing hundreds of past papers',
      'Creating an intuitive search and filter system',
      'Ensuring fast page loads with many PDF assets',
    ],
    impact: [
      'Attracted significant engagement globally',
      'Helped countless students prepare for exams',
      'Still actively used by students today',
    ],
    links: {
      live: 'https://cswizard.yoelgal.com',
    },
    tags: ['Next.js', 'Education', 'JavaScript'],
  },
];
