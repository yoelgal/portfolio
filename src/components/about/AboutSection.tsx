import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Cpu, Rocket, GraduationCap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="w-full max-w-5xl px-4 py-24" ref={ref}>
      {/* Section Header */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="font-source-code text-lg text-non_photo_blue-400">0001</span>
        <h2 className="mt-2 bg-gradient-to-r from-non_photo_blue-400 to-blue-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          About Me
        </h2>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Bio Card */}
        <motion.div
          className="rounded-xl border border-non_photo_blue-400/20 bg-rich_black-600/30 p-8 backdrop-blur-sm"
          variants={itemVariants}
          whileHover={{ borderColor: 'rgba(3, 221, 255, 0.4)' }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-non_photo_blue-400/20 p-2">
              <Code className="h-5 w-5 text-non_photo_blue-400" />
            </div>
            <h3 className="text-xl font-bold text-blue-100">Who I Am</h3>
          </div>
          <p className="mb-4 text-blue-100/80">
            I'm Yoel, a Full-Stack Developer currently on industrial placement at{' '}
            <span className="font-semibold text-non_photo_blue-400">Airbus Defence and Space</span>.
            I'm studying Computer Science at the University of Manchester, on track for a First Class degree.
          </p>
          <p className="text-blue-100/80">
            Beyond coding, I'm into surfing and staying active. I enjoy the team dynamics
            that come with both sports and collaborative engineering projects.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          className="rounded-xl border border-non_photo_blue-400/20 bg-rich_black-600/30 p-8 backdrop-blur-sm"
          variants={itemVariants}
          whileHover={{ borderColor: 'rgba(3, 221, 255, 0.4)' }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-non_photo_blue-400/20 p-2">
              <GraduationCap className="h-5 w-5 text-non_photo_blue-400" />
            </div>
            <h3 className="text-xl font-bold text-blue-100">Education</h3>
          </div>
          <div>
            <p className="font-semibold text-blue-100">University of Manchester</p>
            <p className="text-blue-100/70">BSc Computer Science • 2023 - 2027</p>
            <p className="text-non_photo_blue-400">First Class (Expected)</p>
          </div>
        </motion.div>

        {/* Current Role Card */}
        <motion.div
          className="rounded-xl border border-non_photo_blue-400/20 bg-rich_black-600/30 p-8 backdrop-blur-sm"
          variants={itemVariants}
          whileHover={{ borderColor: 'rgba(3, 221, 255, 0.4)' }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-non_photo_blue-400/20 p-2">
              <Cpu className="h-5 w-5 text-non_photo_blue-400" />
            </div>
            <h3 className="text-xl font-bold text-blue-100">Current Role</h3>
          </div>
          <p className="mb-4 text-blue-100/80">
            Working as a Full-Stack Developer at{' '}
            <a
              href="https://www.airbus.com/en/products-services/defence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-non_photo_blue-400 transition-colors hover:underline"
            >
              Airbus Defence and Space
            </a>
            , building software solutions with C# and .NET for aerospace and defence applications.
          </p>
          <p className="text-blue-100/80">
            Previously worked on embedded systems for an electric racing car at Manchester Stinger
            Motorsports, writing C firmware for Formula Student competition.
          </p>
        </motion.div>

        {/* Highlights Card */}
        <motion.div
          className="rounded-xl border border-non_photo_blue-400/20 bg-rich_black-600/30 p-8 backdrop-blur-sm"
          variants={itemVariants}
          whileHover={{ borderColor: 'rgba(3, 221, 255, 0.4)' }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-non_photo_blue-400/20 p-2">
              <Rocket className="h-5 w-5 text-non_photo_blue-400" />
            </div>
            <h3 className="text-xl font-bold text-blue-100">Highlights</h3>
          </div>
          <ul className="space-y-3 text-blue-100/80">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-non_photo_blue-400">▹</span>
              Co-founded Digested AI - an AI content curation platform with paying subscribers
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-non_photo_blue-400">▹</span>
              Built ML-powered APIs processing 10,000+ daily requests at a Tel Aviv startup
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-non_photo_blue-400">▹</span>
              Collaborated with 80+ engineers on Formula Student electric racecar
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
