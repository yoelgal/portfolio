import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

const navItems = [
  { id: 'about', label: 'About', number: '0001' },
  { id: 'experience', label: 'Experience', number: '0010' },
  { id: 'skills', label: 'Skills', number: '0011' },
  { id: 'portfolio', label: 'Projects', number: '0100' },
  { id: 'contact', label: 'Contact', number: '0101' },
];

export default function Header({ onScrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-non_photo_blue-400 to-slate_blue"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <motion.header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-rich_black/90 shadow-lg backdrop-blur-md'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('main')}
            className="bg-gradient-to-r from-non_photo_blue-400 to-slate_blue bg-clip-text font-anton text-4xl text-transparent transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            YG
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 font-source-code md:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm text-blue-100 transition-colors duration-300 hover:text-non_photo_blue-400"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span className="text-non_photo_blue-400">{item.number}. </span>
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 rounded-full p-2 text-non_photo_blue-400 transition-colors hover:bg-non_photo_blue-400/10 md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed right-0 top-0 z-40 h-full w-3/4 border-l border-non_photo_blue-400/20 bg-rich_black/95 backdrop-blur-md sm:w-2/3 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Decorative gradient */}
              <div className="absolute left-10 top-1/3 h-48 w-48 rounded-full bg-gradient-to-br from-non_photo_blue-400/5 to-blue-500/5 blur-3xl" />

              <nav className="flex h-full flex-col items-center justify-center space-y-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="font-source-code text-sm text-non_photo_blue-400">
                      {item.number}
                    </span>
                    <span className="text-xl text-blue-100 transition-colors hover:text-non_photo_blue-400">
                      {item.label}
                    </span>
                  </motion.button>
                ))}

                {/* Social Links */}
                <motion.div
                  className="mt-8 flex gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="https://github.com/yoelgal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-non_photo_blue-400 transition-colors hover:text-non_photo_blue-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yoel-gal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-non_photo_blue-400 transition-colors hover:text-non_photo_blue-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:yoelgal108@gmail.com"
                    className="text-non_photo_blue-400 transition-colors hover:text-non_photo_blue-300"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
