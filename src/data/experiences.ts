import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'digested-ai',
    company: 'Digested AI',
    role: 'Co-Founder & Full-Stack Developer',
    period: 'Oct 2025 - Present',
    location: 'Remote',
    description: [
      'Co-founded an AI-powered content curation platform that delivers personalised news digests to subscribers\' inboxes.',
      'Built the full-stack application using Next.js 16, React 19, and TypeScript with Supabase/PostgreSQL for data persistence.',
      'Architected a scalable backend service with Fastify, BullMQ job queues, and GCP Cloud Run for parallel digest generation.',
      'Integrated OpenAI GPT-4o-mini for intelligent article summarisation and Tavily/Exa APIs for content discovery.',
      'Implemented Stripe subscriptions, Clerk authentication, and Resend for transactional emails.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Fastify', 'OpenAI', 'Stripe', 'GCP', 'Docker'],
    achievements: [
      'Launched to production with paying subscribers',
      'Processing thousands of articles daily',
      'Built end-to-end from idea to revenue',
    ],
  },
  {
    id: 'airbus',
    company: 'Airbus Defence and Space',
    role: 'Full-Stack Developer',
    period: 'Jul 2025 - Present',
    location: 'Portsmouth, UK',
    description: [
      'Working on industrial placement developing full-stack applications for aerospace and defence systems.',
      'Building software solutions using C# and .NET Framework in a hybrid work environment.',
      'Contributing to cutting-edge technology and innovation in the aerospace industry.',
    ],
    technologies: ['C#', '.NET', 'Full-Stack Development'],
    achievements: [
      'Secured competitive placement at a global aerospace leader',
    ],
  },
  {
    id: 'stinger-motorsports',
    company: 'Manchester Stinger Motorsports',
    role: 'EV Software Engineer',
    period: 'Oct 2024 - Jun 2025',
    location: 'Manchester, UK',
    description: [
      'Collaborated with 80+ students to design and build a formula-style electric racecar for Formula Student, competing against universities worldwide.',
      'Worked closely with hardware teams to integrate software solutions for data logging, telemetry, and data visualization.',
      'Developed C firmware for microcontrollers, improving sensor integration and embedded system functionality.',
      'Implemented thorough testing and fault-handling mechanisms to ensure reliability and safety in high-performance racing environments.',
    ],
    technologies: ['C', 'Arduino', 'Embedded Systems', 'Telemetry'],
    achievements: [
      'Cross-disciplinary collaboration with 80+ team members',
      'Built reliable firmware for safety-critical racing systems',
    ],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: 'Web Developer',
    period: 'Jun 2024 - Oct 2024',
    location: 'Remote',
    description: [
      'Analysed client requirements and designed custom websites to improve client acquisition.',
      'Leveraged WordPress and Wix to streamline development while enhancing client-side editing capabilities for post-handover modifications.',
    ],
    technologies: ['WordPress', 'Wix', 'Web Design', 'Client Relations'],
    achievements: [
      'Delivered multiple client projects on time',
    ],
  },
  {
    id: 'vee-ai',
    company: 'Vee - AI For Good',
    role: 'Backend Development Intern',
    period: 'Aug 2023 - Sep 2023',
    location: 'Tel Aviv, Israel',
    description: [
      'Developed and tested ML-powered API with 7 endpoints for social media content generation.',
      'Architected scalable FastAPI interface processing 10,000+ daily requests with 99.9% uptime.',
      'Implemented OpenTelemetry tracing, decreasing issue resolution times by 30-50% and enhancing system monitoring.',
      'Optimised deployment via distroless dockerization, reducing container size by 60% and bolstering security.',
    ],
    technologies: ['Python', 'FastAPI', 'Docker', 'OpenTelemetry', 'Machine Learning'],
    achievements: [
      '10,000+ daily API requests with 99.9% uptime',
      '60% reduction in container size',
      '30-50% faster issue resolution',
    ],
  },
];
