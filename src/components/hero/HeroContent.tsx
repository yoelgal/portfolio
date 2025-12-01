import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

interface HeroContentProps {
  onScrollToSection: (sectionId: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function HeroContent({ onScrollToSection }: HeroContentProps) {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Glass card container */}
      <motion.div
        className="rounded-2xl border border-non_photo_blue-400/20 bg-rich_black/40 p-8 backdrop-blur-md md:p-12"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Greeting */}
        <motion.p
          className="mb-4 font-source-code text-lg text-non_photo_blue-400 md:text-xl"
          variants={itemVariants}
        >
          <span className="inline-block animate-pulse">{'>'}</span> Hello, World! I'm
        </motion.p>

        {/* Name with gradient */}
        <motion.h1
          className="mb-4 bg-gradient-to-r from-non_photo_blue-400 via-blue-300 to-slate_blue bg-200% bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
          variants={itemVariants}
          style={{
            animation: 'gradientShift 4s ease infinite',
            backgroundSize: '200% auto',
          }}
        >
          Yoel Gal
        </motion.h1>

        {/* Role */}
        <motion.p
          className="mb-2 text-xl text-blue-100 md:text-2xl"
          variants={itemVariants}
        >
          Full-Stack Developer @ <span className="text-non_photo_blue-400">Airbus Defence and Space</span>
        </motion.p>

        {/* Education */}
        <motion.p
          className="mb-6 text-lg text-blue-100/70"
          variants={itemVariants}
        >
          Computer Science @ University of Manchester
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="mb-8 max-w-md text-lg text-blue-100/80"
          variants={itemVariants}
        >
          Building scalable systems and crafting great user experiences
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="mailto:yoelgal108@gmail.com"
            className="group flex items-center gap-2 rounded-lg border border-non_photo_blue-400 bg-non_photo_blue-400/10 px-6 py-3 text-non_photo_blue-400 transition-all duration-300 hover:bg-non_photo_blue-400 hover:text-rich_black hover:shadow-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-5 w-5" />
            <span>Get in Touch</span>
          </motion.a>

          <motion.a
            href="https://github.com/yoelgal"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-non_photo_blue-400/30 p-3 text-non_photo_blue-400 transition-all duration-300 hover:border-non_photo_blue-400 hover:bg-non_photo_blue-400/10 hover:shadow-glow-sm"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-6 w-6" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/yoel-gal"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-non_photo_blue-400/30 p-3 text-non_photo_blue-400 transition-all duration-300 hover:border-non_photo_blue-400 hover:bg-non_photo_blue-400/10 hover:shadow-glow-sm"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-non_photo_blue-400"
        onClick={() => onScrollToSection('about')}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
