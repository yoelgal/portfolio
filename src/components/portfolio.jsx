import { React, useEffect, useState } from 'react';
import CSWizard from '../assets/cswizard.png';
import SkillSwap from '../assets/skillswap.png';
import SpaceExplore from '../assets/space-explore.png';
// Using an existing image as a placeholder for StoryTime
import { AnimatePresence, motion } from 'framer-motion';
import StoryTimeImage from '../assets/storytime.png';

const projects = [
  {
    title: '2025 - StoryTime',
    description: 'AI-powered platform for generating personalized stories for children.',
    image: StoryTimeImage, // Using placeholder image for now
    details: [
      "StoryTime is an innovative platform that uses advanced AI language models to create unique, personalized stories for children. Each story is tailored to the child's interests, preferences, and learning goals.",
      "The application features an intuitive interface where parents can input their child's details and preferences, while the AI works behind the scenes to craft engaging, age-appropriate narratives that spark imagination and promote learning.",
      'Technologies used: React-Native, Next.js, Supabase, Stripe, TypeScript, Node.js, OpenAI API, Expo, Git, GitHub, Vercel',
    ],
    link: 'https://storytime.parentwiseai.com',
    tags: ['AI', 'React-Native', 'Expo', 'Next.js', 'Supabase', 'Stripe', 'TypeScript'],
  },
  {
    title: '2024 - SkillSwap',
    description: 'A platform for university students to teach others and learn new skills.',
    image: SkillSwap,
    details: [
      'SkillSwap is a platform that allows university students to teach others and learn new skills. Driven by a powerful and secure Nest.js backend, the platform features a user-friendly interface that allows users to easily navigate the site and find the skills they are looking for.',
      'Technologies used: Nest.js, React, TypeScript, MySQL, Git, GitLab, Docker, JavaScript, CSS',
    ],
    link: null,
    tags: ['Nest.js', 'React', 'TypeScript'],
  },
  {
    title: '2024 - Space Explorer',
    description: 'An app that lets you explore the Milky Way from the comfort of your home.',
    image: SpaceExplore,
    details: [
      'This app was built using the 3js library. It allows users to explore the universe and learn about the different planets in our solar system. The app also plays ambient music to create a calming experience for users.',
      'Technologies used: 3js, CSS, HTML, JavaScript, Git, GitHub, Vercel',
    ],
    link: 'https://explore.yoelgal.com',
    tags: ['3js', 'JavaScript', 'Interactive', 'React'],
  },
  {
    title: '2022 - CS Wizard',
    description: 'A site providing topic-specific practice papers for A-Level Computer Science.',
    image: CSWizard,
    details: [
      'CS Wizard is a site that provides topic-specific practice papers for A-Level Computer Science. The site features a user-friendly interface that allows students to easily navigate the site and find the papers they are looking for.',
      'Technologies used: Next.js, Git, GitHub, Vercel, JavaScript, CSS',
    ],
    link: 'https://cswizard.yoelgal.com',
    tags: ['Next.js', 'Education', 'JavaScript'],
  },
  // Add more projects as needed
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.tags.includes(filter)));
    }
  }, [filter]);

  const handleImageClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener noreferrer');
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Get all unique tags
  const allTags = ['All', ...new Set(projects.flatMap((project) => project.tags))];

  return (
    <section id="portfolio" className="mx-auto w-full max-w-4xl p-4 pt-24 text-left text-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-4xl font-bold">
          <span className="font-source-code text-xl font-normal text-non_photo_blue-400">0010</span>{' '}
          <span className="bg-gradient-to-r from-non_photo_blue-400 to-blue-300 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h2>
        <p className="mb-8 text-lg">Explore my recent projects and creations:</p>

        <div className="mb-8 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`rounded px-3 py-1 text-sm transition-all duration-300 ${
                filter === tag
                  ? 'border border-non_photo_blue-400 bg-transparent font-bold text-non_photo_blue-400 shadow-glow'
                  : 'bg-rich_black text-blue-100 hover:text-non_photo_blue-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-lg bg-rich_black shadow-md transition-all hover:shadow-lg ${
                hoveredCard === index ? 'shadow-glow ring-2 ring-non_photo_blue-400' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-52 w-full object-cover object-center transition-all duration-500 group-hover:scale-105 ${project.link ? 'cursor-pointer' : ''}`}
                  onClick={() => project.link && handleImageClick(project.link)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rich_black to-transparent opacity-80"></div>

                {project.link && (
                  <motion.div
                    className="absolute bottom-4 right-4 cursor-pointer rounded-full bg-non_photo_blue-400 p-2 text-rich_black opacity-0 transition-all duration-300 group-hover:opacity-100"
                    onClick={() => handleImageClick(project.link)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-2 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded bg-rich_black-600 px-2 py-1 text-xs text-non_photo_blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-block rounded bg-rich_black-600 px-2 py-1 text-xs text-blue-100">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                <p className="mb-4 text-lg">{project.description}</p>

                <motion.button
                  onClick={() => openModal(project)}
                  className="flex items-center text-non_photo_blue-400 transition-colors duration-300 hover:text-non_photo_blue-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-non_photo_blue-400/20 bg-rich_black p-0 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject && (
                <>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rich_black via-rich_black/80 to-transparent"></div>
                    <motion.button
                      onClick={closeModal}
                      className="absolute right-4 top-4 rounded-full bg-rich_black-600 p-2 text-white transition-colors duration-300 hover:text-non_photo_blue-400"
                      aria-label="Close modal"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </motion.button>
                  </div>

                  <div className="p-8">
                    <h3 className="mb-2 bg-gradient-to-r from-non_photo_blue-400 to-blue-300 bg-clip-text text-3xl font-bold text-transparent">
                      {selectedProject.title}
                    </h3>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="rounded bg-rich_black-600 px-3 py-1 text-sm text-non_photo_blue-400"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="space-y-4">
                      {selectedProject.details.map((detail, idx) => (
                        <p key={idx} className="text-blue-100">
                          {detail}
                        </p>
                      ))}
                    </div>

                    {selectedProject.link && (
                      <motion.a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center rounded border border-non_photo_blue-400 px-6 py-3 text-non_photo_blue-400 transition-colors duration-300 hover:bg-non_photo_blue-400 hover:text-rich_black hover:shadow-glow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Visit Project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
