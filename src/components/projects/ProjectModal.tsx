import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Zap, Target, Code } from 'lucide-react';
import { Project } from '../../types';
import { useState } from 'react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

type Tab = 'overview' | 'technical' | 'impact';

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  if (!project) return null;

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <Target className="h-4 w-4" /> },
    { id: 'technical', label: 'Technical', icon: <Code className="h-4 w-4" /> },
    { id: 'impact', label: 'Impact', icon: <Zap className="h-4 w-4" /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-non_photo_blue-400/20 bg-rich_black shadow-2xl"
            initial={{ scale: 0.9, y: 50, rotateX: -10 }}
            animate={{ scale: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich_black via-rich_black/60 to-transparent" />

              {/* Close button */}
              <motion.button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full bg-rich_black/80 p-2 text-blue-100 backdrop-blur-sm transition-colors hover:bg-rich_black hover:text-non_photo_blue-400"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="rounded-full bg-non_photo_blue-400 px-3 py-1 text-sm font-bold text-rich_black">
                    {project.year}
                  </span>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-non_photo_blue-400 hover:text-non_photo_blue-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-non_photo_blue-400 hover:text-non_photo_blue-300"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  )}
                </div>
                <h2 className="bg-gradient-to-r from-non_photo_blue-400 to-blue-300 bg-clip-text text-3xl font-bold text-transparent">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-non_photo_blue-400/20 px-6">
              <div className="flex gap-1">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-non_photo_blue-400 text-non_photo_blue-400'
                        : 'border-transparent text-blue-100/60 hover:text-blue-100'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {tab.icon}
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="max-h-[40vh] overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      {project.fullDescription.map((paragraph, i) => (
                        <p key={i} className="text-blue-100/80">
                          {paragraph}
                        </p>
                      ))}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-non_photo_blue-400/10 px-3 py-1 text-sm text-non_photo_blue-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'technical' && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-3 text-lg font-semibold text-non_photo_blue-400">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg border border-non_photo_blue-400/30 bg-non_photo_blue-400/5 px-3 py-1.5 text-sm text-blue-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.challenges && project.challenges.length > 0 && (
                        <div>
                          <h4 className="mb-3 text-lg font-semibold text-non_photo_blue-400">
                            Technical Challenges
                          </h4>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, i) => (
                              <li key={i} className="flex items-start gap-2 text-blue-100/80">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-non_photo_blue-400" />
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'impact' && (
                    <div className="space-y-6">
                      {project.impact && project.impact.length > 0 ? (
                        <div>
                          <h4 className="mb-3 text-lg font-semibold text-non_photo_blue-400">
                            Project Impact
                          </h4>
                          <ul className="space-y-3">
                            {project.impact.map((item, i) => (
                              <motion.li
                                key={i}
                                className="flex items-center gap-3 rounded-lg border border-non_photo_blue-400/20 bg-non_photo_blue-400/5 p-4 text-blue-100"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <Zap className="h-5 w-5 flex-shrink-0 text-non_photo_blue-400" />
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="text-blue-100/60">
                          Impact metrics are being tracked. Check back later!
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            {project.links.live && (
              <div className="border-t border-non_photo_blue-400/20 p-6">
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-non_photo_blue-400 bg-non_photo_blue-400/10 px-6 py-3 text-non_photo_blue-400 transition-all hover:bg-non_photo_blue-400 hover:text-rich_black hover:shadow-glow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="h-5 w-5" />
                  Visit Live Project
                </motion.a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
