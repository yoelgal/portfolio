import { motion } from 'framer-motion';
import Wave from 'react-wavify';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full">
      {/* Wave */}
      <div className="hidden sm:block">
        <Wave
          fill="url(#gradient)"
          paused={false}
          options={{
            height: 30,
            amplitude: 20,
            speed: 0.3,
            points: 5,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#03DDFF" />
              <stop offset="90%" stopColor="#6564db" />
            </linearGradient>
          </defs>
        </Wave>
      </div>

      {/* Content */}
      <div className="relative bg-gradient-to-b from-transparent to-rich_black-600/30 py-8">
        <div className="container mx-auto px-4">
          {/* Social links */}
          <motion.div
            className="mb-6 flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/yoelgal"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-non_photo_blue-400/30 p-3 text-non_photo_blue-400 transition-all duration-300 hover:border-non_photo_blue-400 hover:bg-non_photo_blue-400/10 hover:shadow-glow-sm"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yoel-gal"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-non_photo_blue-400/30 p-3 text-non_photo_blue-400 transition-all duration-300 hover:border-non_photo_blue-400 hover:bg-non_photo_blue-400/10 hover:shadow-glow-sm"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="mailto:yoelgal108@gmail.com"
              className="rounded-full border border-non_photo_blue-400/30 p-3 text-non_photo_blue-400 transition-all duration-300 hover:border-non_photo_blue-400 hover:bg-non_photo_blue-400/10 hover:shadow-glow-sm"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="flex items-center justify-center gap-1 text-sm text-blue-100/60">
              Made with <Heart className="h-4 w-4 text-non_photo_blue-400" /> by Yoel Gal
            </p>
            <p className="mt-1 text-xs text-blue-100/40">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
