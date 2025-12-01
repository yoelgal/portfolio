import { motion } from 'framer-motion';
import { skills, skillCategories } from '../../data/skills';
import { Skill } from '../../types';

interface SkillItemProps {
  skill: Skill;
  index: number;
}

function SkillItem({ skill, index }: SkillItemProps) {
  return (
    <motion.a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 rounded-lg border border-non_photo_blue-400/10 bg-rich_black-600/20 px-4 py-3 transition-all duration-300 hover:border-non_photo_blue-400/40 hover:bg-non_photo_blue-400/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-non_photo_blue-400 transition-transform duration-300 group-hover:scale-110">
        ▹
      </span>
      <span className="text-blue-100 transition-colors duration-300 group-hover:text-non_photo_blue-400">
        {skill.name}
      </span>
    </motion.a>
  );
}

interface SkillCategoryProps {
  label: string;
  color: string;
  skills: Skill[];
  index: number;
}

function SkillCategory({ label, color, skills, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
        />
        <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-100/60">
          {label}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <SkillItem key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  // Group skills by category
  const groupedSkills = skillCategories.map((category) => ({
    ...category,
    skills: skills.filter((s) => s.category === category.id),
  }));

  return (
    <section id="skills" className="w-full max-w-5xl px-4 py-24">
      {/* Section Header */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-source-code text-lg text-non_photo_blue-400">0011</span>
        <h2 className="mt-2 bg-gradient-to-r from-non_photo_blue-400 to-blue-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Skills & Technologies
        </h2>
        <p className="mt-4 text-lg text-blue-100/70">
          Technologies I've worked with
        </p>
      </motion.div>

      {/* Skills by Category */}
      <div className="space-y-10">
        {groupedSkills.map((category, index) => (
          <SkillCategory
            key={category.id}
            label={category.label}
            color={category.color}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
