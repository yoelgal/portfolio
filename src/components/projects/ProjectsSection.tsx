import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import ProjectCard3D from './ProjectCard3D';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Get all unique tags
  const allTags = ['All', ...new Set(projects.flatMap((p) => p.tags))];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.tags.includes(activeFilter)));
    }
  }, [activeFilter]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="portfolio" className="w-full max-w-5xl px-4 py-24">
      {/* Section Header */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-source-code text-lg text-non_photo_blue-400">0100</span>
        <h2 className="mt-2 bg-gradient-to-r from-non_photo_blue-400 to-blue-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Featured Projects
        </h2>
        <p className="mt-4 text-lg text-blue-100/70">
          Explore my recent work and personal creations
        </p>
      </motion.div>

      {/* Filter tags */}
      <motion.div
        className="mb-10 flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {allTags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
              activeFilter === tag
                ? 'border border-non_photo_blue-400 bg-non_photo_blue-400/20 text-non_photo_blue-400 shadow-glow-sm'
                : 'border border-transparent bg-rich_black-600/50 text-blue-100/70 hover:border-non_photo_blue-400/30 hover:text-non_photo_blue-400'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard3D
                project={project}
                index={index}
                onOpenModal={openModal}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
