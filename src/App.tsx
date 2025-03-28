import { Analytics } from '@vercel/analytics/react';
import React, { useEffect, useRef, useState } from 'react';
import Wave from 'react-wavify';
import BinaryRain from './components/BinaryRain';
import './index.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error - No type definitions for portfolio component
import Portfolio from './components/portfolio';

// import Blob from "./components/blob.tsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const aboutMeRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Calculate scroll progress for indicator
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-from-left');
          }
        });
      },
      {
        threshold: 0.01,
      }
    );

    if (aboutMeRef.current) {
      const paragraphs = aboutMeRef.current.querySelectorAll('p');
      paragraphs.forEach((p) => observer.observe(p));
    }

    return () => {
      if (aboutMeRef.current) {
        const paragraphs = aboutMeRef.current.querySelectorAll('p');
        paragraphs.forEach((p) => observer.unobserve(p));
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <div className="bg-grid-pattern relative flex min-h-screen flex-col bg-rich_black font-sans text-blue-100">
      {/* Binary Rain Background Effect */}
      <BinaryRain />

      {/* Scroll progress indicator */}
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-non_photo_blue-400"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <header
        className={`text-md fixed top-0 z-20 w-full transition-all duration-300 ${isScrolled ? 'opacity-90 shadow-lg' : 'opacity-100'} ${isMenuOpen ? 'bg-transparent opacity-100 shadow-transparent' : `${isScrolled ? 'bg-rich_black opacity-90 shadow-lg' : 'bg-rich_black opacity-100'}`}`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <p
            className="cursor-pointer bg-transparent font-anton text-4xl text-non_photo_blue-400 duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            onClick={() => handleScrollToSection('main')}
          >
            YG
          </p>
          <nav className="hidden space-x-4 font-source-code md:flex">
            <button
              onClick={() => handleScrollToSection('about')}
              className="transition-colors duration-300 hover:text-non_photo_blue-400"
            >
              <span className="text-non_photo_blue-400">0001. </span>
              About Me
            </button>
            <button
              onClick={() => handleScrollToSection('portfolio')}
              className="transition-colors duration-300 hover:text-non_photo_blue-400"
            >
              <span className="text-non_photo_blue-400">0010. </span>
              Portfolio
            </button>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative z-40 rounded-full p-1.5 transition-all duration-300 hover:bg-non_photo_blue-400/10"
              aria-label="Toggle menu"
            >
              <div className="flex h-6 w-6 flex-col items-center justify-center space-y-1.5">
                <span
                  className={`block h-0.5 w-5 origin-center rounded-full bg-non_photo_blue-400 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-y-2 rotate-45' : 'group-hover:w-6'
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 origin-center rounded-full bg-non_photo_blue-400 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-4 origin-center rounded-full bg-non_photo_blue-400 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'w-5 -translate-y-2 -rotate-45' : 'group-hover:w-6'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      <main
        className={`flex flex-grow flex-col items-center justify-center p-4 transition-all duration-300 ${isMenuOpen ? 'blur-lg' : ''}`}
      >
        <section
          id="main"
          className="relative flex h-screen w-full max-w-4xl flex-col items-center justify-center text-center"
        >
          {/* Decorative gradient spheres */}
          <div className="absolute left-10 top-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"></div>

          <div className="z-10 rounded-lg border border-non_photo_blue-400/20 p-8 backdrop-blur-sm">
            <p className="wave-text space-x-0.5 p-3 font-source-code text-xl text-non_photo_blue-400">
              {Array.from('Hello.World!.I.am').map((char, index) => (
                <span
                  className={`${char === '.' ? 'text-rich_black' : ''}`}
                  key={index}
                  style={{ '--animation-delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  {char}
                </span>
              ))}
            </p>
            <h1 className="mb-4 bg-gradient-to-r from-non_photo_blue-400 to-blue-300 bg-clip-text text-6xl font-bold text-transparent">
              Yoel Gal
            </h1>
            <p className="pb-3 text-xl">A software engineer from London, England.</p>
            <p className="mb-4 pb-3 text-xl">
              I develop robust backend systems and user-friendly web applications.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:yoelgal108@gmail.com"
                className="rounded border border-non_photo_blue-400 px-4 py-2 text-non_photo_blue-400 transition-colors duration-300 hover:bg-non_photo_blue-400 hover:text-rich_black-600 hover:shadow-glow"
              >
                Email Me
              </a>
              <a
                href="https://github.com/yoelgal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-non_photo_blue-400 transition-all duration-300 hover:scale-110 hover:text-non_photo_blue-300"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 17.828 3.633 17.5 3.633 17.5c-1.087-.744.083-.729.083-.729 1.202.085 1.835 1.234 1.234 1.234 1.068 1.831 2.803 1.302 3.487.995.108-.774.417-1.302.76-1.602-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.527.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.005.404 2.291-1.553 3.297-1.23 3.297-1.23.654 1.649.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.624-5.476 5.922.43.371.812 1.102.812 2.222 0 1.606-.014 2.898-.014 3.291 0 .321.216.696.825.578C20.565 21.796 24 17.299 24 12c0-6.629-5.371-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/yoel-gal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-non_photo_blue-400 transition-all duration-300 hover:scale-110 hover:text-non_photo_blue-300"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Scroll down indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-non_photo_blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => handleScrollToSection('about')}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>
        <section
          id="about"
          ref={aboutMeRef}
          className="flex h-full w-full max-w-4xl flex-col items-start justify-center p-5 pb-10 pt-24 md:flex-row"
        >
          <div className="md:w-2/3 md:pr-8">
            <h2 className="mb-4 text-4xl font-bold ">
              <span className="font-source-code text-xl font-normal text-non_photo_blue-400">
                0001
              </span>{' '}
              <span className="bg-gradient-to-r from-non_photo_blue-400 to-blue-300 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="relative mb-4 border-l-2 border-non_photo_blue-400/30 pl-4 text-lg">
              Hi there! 👋 I'm Yoel, a full-stack software engineer from London, England. I'm
              passionate about developing efficient and scalable systems and have hands-on
              experience with a variety of technologies.
            </p>
            <p className="relative mb-4 border-l-2 border-non_photo_blue-400/30 pl-4 text-lg">
              In my current role as a Software Engineer @{' '}
              <a
                href="https://formulastudentuom.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-non_photo_blue-400 transition-colors duration-300 hover:underline"
              >
                Manchester Stinger Motorsports
              </a>
              , I've been building C-based firmware for the VCU of our electric vehicle, aiming to
              be ready for competition at Formula Student 2025.
            </p>
            <p className="relative mb-4 border-l-2 border-non_photo_blue-400/30 pl-4 text-lg">
              My latest project is{' '}
              <span className="font-semibold text-non_photo_blue-400">StoryTime</span>, an
              AI-powered website that generates personalized stories for children. By combining
              modern web technologies with advanced language models, I've created an interactive
              platform that crafts unique, age-appropriate narratives tailored to each child's
              interests, preferences, and learning goals.
            </p>
            <p className="relative mb-4 border-l-2 border-non_photo_blue-400/30 pl-4 text-lg">
              Other notable projects include{' '}
              <span className="font-semibold text-non_photo_blue-400">SkillSwap</span>, a platform
              for university students to exchange skills, and{' '}
              <span className="font-semibold text-non_photo_blue-400">CS Wizard</span>, a site
              providing topic-specific practice papers for A-Level Computer Science, which attracted
              significant engagement globally.
            </p>
            <p className="relative border-l-2 border-non_photo_blue-400/30 pl-4 text-lg">
              In addition to my technical skills, I enjoy surfing and weightlifting.
            </p>
          </div>
          <div className="mt-8 rounded-lg border border-non_photo_blue-400/20 bg-rich_black-600/30 p-6 pt-8 backdrop-blur-sm md:mt-0 md:w-1/3 md:pl-8">
            <h2 className="mb-4 bg-gradient-to-r from-non_photo_blue-400 to-blue-300 bg-clip-text text-3xl font-bold text-transparent">
              Technologies:
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> Python
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://en.cppreference.com/w/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> C/C++
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://www.java.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> Java
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> JavaScript
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> TypeScript
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> React
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://expo.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> Expo
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> Next.js
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://nodejs.org/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> Node.js
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> Express
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://spring.io/projects/spring-boot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> Spring Boot
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> MongoDB
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://supabase.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> Supabase
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://nestjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> Nest.js
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://dev.mysql.com/doc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> MySQL
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> Docker
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://git-scm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> Git
                </a>
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-non_photo_blue-400">
                <a
                  href="https://vercel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-2 text-non_photo_blue-400">▹</span> Vercel
                </a>
              </li>
            </ul>
          </div>
        </section>
        <Portfolio />
      </main>

      <div
        className={`fixed right-0 top-0 h-full transform bg-rich_black-600 text-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-10 w-3/4 sm:w-3/4 md:w-1/2 lg:w-1/3`}
      >
        <nav className="flex h-full flex-col items-center justify-center">
          <button
            onClick={() => {
              handleScrollToSection('about');
              setIsMenuOpen(false);
            }}
            className="block w-full py-4 text-center font-source-code transition-colors duration-300 hover:text-non_photo_blue-400"
          >
            <span className="text-non_photo_blue-400">0001.</span>
            About Me
          </button>
          <button
            onClick={() => {
              handleScrollToSection('portfolio');
              setIsMenuOpen(false);
            }}
            className="block w-full py-4 text-center font-source-code transition-colors duration-300 hover:text-non_photo_blue-400"
          >
            <span className="text-non_photo_blue-400">0010.</span>
            Portfolio
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed right-0 top-0 h-full transform border-l border-non_photo_blue-400/20 bg-rich_black-600/90 text-white backdrop-blur-md transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0 shadow-lg' : 'translate-x-full'
        } z-30 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3`}
      >
        <div className="absolute left-10 top-1/3 h-48 w-48 rounded-full bg-gradient-to-br from-non_photo_blue-400/5 to-blue-500/5 blur-3xl"></div>

        <div className="border-b border-non_photo_blue-400/10 p-4">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full p-2 text-non_photo_blue-400 transition-all duration-300 hover:bg-rich_black-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <nav className="flex h-full flex-col items-center justify-start p-4 pt-24">
          <button
            onClick={() => {
              handleScrollToSection('about');
              setIsMenuOpen(false);
            }}
            className="my-3 w-full text-center"
          >
            <div className="flex flex-col items-center p-2">
              <span className="font-source-code text-sm text-non_photo_blue-400">0001</span>
              <span className="text-lg transition-colors duration-300 hover:text-non_photo_blue-400">
                About Me
              </span>
            </div>
          </button>

          <button
            onClick={() => {
              handleScrollToSection('portfolio');
              setIsMenuOpen(false);
            }}
            className="my-3 w-full text-center"
          >
            <div className="flex flex-col items-center p-2">
              <span className="font-source-code text-sm text-non_photo_blue-400">0010</span>
              <span className="text-lg transition-colors duration-300 hover:text-non_photo_blue-400">
                Portfolio
              </span>
            </div>
          </button>

          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://github.com/yoelgal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-non_photo_blue-400 transition-all duration-300 hover:text-non_photo_blue-300"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61C4.422 17.828 3.633 17.5 3.633 17.5c-1.087-.744.083-.729.083-.729 1.202.085 1.835 1.234 1.234 1.234 1.068 1.831 2.803 1.302 3.487.995.108-.774.417-1.302.76-1.602-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.527.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.005.404 2.291-1.553 3.297-1.23 3.297-1.23.654 1.649.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.624-5.476 5.922.43.371.812 1.102.812 2.222 0 1.606-.014 2.898-.014 3.291 0 .321.216.696.825.578C20.565 21.796 24 17.299 24 12c0-6.629-5.371-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yoel-gal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-non_photo_blue-400 transition-all duration-300 hover:text-non_photo_blue-300"
            >
              <svg
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:yoelgal108@gmail.com"
              className="text-non_photo_blue-400 transition-all duration-300 hover:text-non_photo_blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
      <footer className="relative w-full text-center">
        <div className="relative z-10 py-4">
          <p className="text-sm">© {new Date().getFullYear()} Yoel Gal. All rights reserved.</p>
        </div>
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
                <stop offset="90%" stopColor="#0000CF" />
              </linearGradient>
            </defs>
          </Wave>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
