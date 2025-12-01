import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experiences } from '../../data/experiences';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full max-w-5xl px-4 py-24"
    >
      {/* Section Header */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-source-code text-lg text-non_photo_blue-400">0010</span>
        <h2 className="mt-2 bg-gradient-to-r from-non_photo_blue-400 to-blue-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Experience
        </h2>
        <p className="mt-4 text-lg text-blue-100/70">
          My professional journey and the roles that shaped my skills
        </p>
      </motion.div>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical timeline line (desktop only) */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-non_photo_blue-400/20 md:block">
          {/* Animated progress line */}
          <motion.div
            className="absolute left-0 top-0 w-full bg-gradient-to-b from-non_photo_blue-400 to-slate_blue"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Experience cards */}
        <div className="space-y-12 md:space-y-16">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
