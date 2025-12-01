import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCard3DProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard3D({ project, index, onOpenModal }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({
    rotateX: 0,
    rotateY: 0,
    translateZ: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    setTiltStyle({
      rotateX: -rotateX,
      rotateY: rotateY,
      translateZ: 30,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({ rotateX: 0, rotateY: 0, translateZ: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className="perspective-1000 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <motion.div
        className="transform-style-3d relative h-full overflow-hidden rounded-xl border border-non_photo_blue-400/20 bg-rich_black transition-shadow duration-300"
        style={{
          transform: `perspective(1000px) rotateX(${tiltStyle.rotateX}deg) rotateY(${tiltStyle.rotateY}deg) translateZ(${tiltStyle.translateZ}px)`,
          transition: 'transform 0.15s ease-out',
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(3, 221, 255, 0.25), 0 0 30px rgba(3, 221, 255, 0.1)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Image container with parallax effect */}
        <div className="relative h-52 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center"
            style={{
              transform: `translateX(${tiltStyle.rotateY * 2}px) translateY(${tiltStyle.rotateX * 2}px) scale(${isHovered ? 1.1 : 1})`,
              transition: 'transform 0.3s ease-out',
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-rich_black via-rich_black/50 to-transparent" />

          {/* Year badge */}
          <div className="absolute left-4 top-4 rounded-full bg-non_photo_blue-400/90 px-3 py-1 text-sm font-bold text-rich_black">
            {project.year}
          </div>

          {/* Hover overlay with actions */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4 bg-rich_black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {project.links.live && (
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-non_photo_blue-400 p-3 text-rich_black transition-colors hover:bg-non_photo_blue-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
            <motion.button
              onClick={() => onOpenModal(project)}
              className="rounded-full border border-non_photo_blue-400 bg-transparent p-3 text-non_photo_blue-400 transition-colors hover:bg-non_photo_blue-400/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Info className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Content with subtle parallax */}
        <motion.div
          className="p-6"
          style={{
            transform: `translateX(${tiltStyle.rotateY * -1}px) translateY(${tiltStyle.rotateX * -1}px)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          {/* Tags */}
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-non_photo_blue-400/10 px-2 py-0.5 text-xs text-non_photo_blue-400"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="rounded-full bg-rich_black-600 px-2 py-0.5 text-xs text-blue-100/70">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-bold text-blue-100">{project.title}</h3>

          {/* Description */}
          <p className="mb-4 line-clamp-2 text-sm text-blue-100/70">
            {project.shortDescription}
          </p>

          {/* Learn more */}
          <motion.button
            onClick={() => onOpenModal(project)}
            className="group flex items-center gap-1 text-sm text-non_photo_blue-400 transition-colors hover:text-non_photo_blue-300"
            whileHover={{ x: 5 }}
          >
            <span>Learn More</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
