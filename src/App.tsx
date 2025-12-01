import { Analytics } from '@vercel/analytics/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import AboutSection from './components/about/AboutSection';
import ExperienceSection from './components/experience/ExperienceSection';
import SkillsSection from './components/skills/SkillsSection';
import ProjectsSection from './components/projects/ProjectsSection';
import ContactSection from './components/contact/ContactSection';
import './index.css';

function App() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-rich_black font-sans text-blue-100">
      {/* Background gradient effects */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-non_photo_blue-400/5 to-transparent blur-3xl" />
        <div className="absolute -right-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-slate_blue/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-t from-palatinate_blue/5 to-transparent blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(3, 221, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(3, 221, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Header */}
      <Header onScrollToSection={handleScrollToSection} />

      {/* Main content */}
      <main className="flex flex-col items-center">
        <Hero onScrollToSection={handleScrollToSection} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
