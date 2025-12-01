import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { Experience } from '../../types';
import { useRef, useState } from 'react';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLeft: boolean;
}

export default function ExperienceCard({ experience, index, isLeft }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTiltStyle({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTiltStyle({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative flex w-full items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline node */}
      <motion.div
        className="absolute inset-x-0 top-8 z-10 mx-auto hidden h-4 w-4 md:block"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
      >
        <div className="h-4 w-4 rounded-full border-2 border-non_photo_blue-400 bg-rich_black">
          <motion.div
            className="h-full w-full rounded-full bg-non_photo_blue-400"
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        className={`perspective-1000 w-full md:w-[45%] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tiltStyle.rotateX}deg) rotateY(${tiltStyle.rotateY}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <motion.div
          className="group relative overflow-hidden rounded-xl border border-non_photo_blue-400/20 bg-rich_black-600/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-non_photo_blue-400/40 hover:shadow-glow"
          whileHover={{ y: -5 }}
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-non_photo_blue-400/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Content */}
          <div className="relative z-10">
            {/* Company & Role */}
            <div className="mb-4">
              <h3 className="mb-1 text-xl font-bold text-non_photo_blue-400">
                {experience.company}
              </h3>
              <div className="flex items-center gap-2 text-lg text-blue-100">
                <Briefcase className="h-4 w-4" />
                <span>{experience.role}</span>
              </div>
            </div>

            {/* Meta info */}
            <div className="mb-4 flex flex-wrap gap-4 text-sm text-blue-100/70">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
            </div>

            {/* Description */}
            <ul className="mb-4 space-y-2">
              {experience.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-blue-100/80">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-non_photo_blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-non_photo_blue-400/10 px-3 py-1 text-xs text-non_photo_blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Achievements */}
            {experience.achievements && experience.achievements.length > 0 && (
              <div className="mt-4 border-t border-non_photo_blue-400/10 pt-4">
                <p className="mb-2 text-sm font-semibold text-non_photo_blue-400">
                  Key Achievements:
                </p>
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-blue-100/70">
                      <span className="text-non_photo_blue-400">→</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
