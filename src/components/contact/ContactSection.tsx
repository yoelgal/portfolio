import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    url: 'mailto:yoelgal108@gmail.com',
    icon: Mail,
    label: 'yoelgal108@gmail.com',
    color: '#03DDFF',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yoelgal',
    icon: Github,
    label: 'yoelgal',
    color: '#6564db',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yoel-gal',
    icon: Linkedin,
    label: 'yoel-gal',
    color: '#0077B5',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-4xl px-4 py-24">
      {/* Section Header */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-source-code text-lg text-non_photo_blue-400">0101</span>
        <h2 className="mt-2 bg-gradient-to-r from-non_photo_blue-400 to-blue-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Get In Touch
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-blue-100/70">
          I'm always open to new opportunities and interesting projects.
          Feel free to reach out!
        </p>
      </motion.div>

      {/* Location */}
      <motion.div
        className="mb-8 flex items-center justify-center gap-2 text-blue-100/60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <MapPin className="h-4 w-4" />
        <span>London, England</span>
      </motion.div>

      {/* Contact Links */}
      <motion.div
        className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target={link.name !== 'Email' ? '_blank' : undefined}
            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
            className="group relative flex w-full items-center gap-4 overflow-hidden rounded-xl border border-non_photo_blue-400/20 bg-rich_black-600/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-non_photo_blue-400/40 sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Hover gradient */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, ${link.color}10, transparent)`,
              }}
            />

            {/* Icon */}
            <div
              className="relative rounded-full p-3 transition-colors duration-300"
              style={{ backgroundColor: `${link.color}20` }}
            >
              <link.icon
                className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                style={{ color: link.color }}
              />
            </div>

            {/* Text */}
            <div className="relative">
              <p className="text-sm font-medium text-blue-100/60">{link.name}</p>
              <p className="text-blue-100 transition-colors duration-300 group-hover:text-non_photo_blue-400">
                {link.label}
              </p>
            </div>

            {/* External link icon for non-email */}
            {link.name !== 'Email' && (
              <ExternalLink className="absolute right-4 top-4 h-4 w-4 text-blue-100/30 opacity-0 transition-opacity group-hover:opacity-100" />
            )}
          </motion.a>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <motion.a
          href="mailto:yoelgal108@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg border border-non_photo_blue-400 bg-non_photo_blue-400/10 px-8 py-4 text-lg font-medium text-non_photo_blue-400 transition-all duration-300 hover:bg-non_photo_blue-400 hover:text-rich_black hover:shadow-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="h-5 w-5" />
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  );
}
