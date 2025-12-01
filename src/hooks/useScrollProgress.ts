import { useState, useEffect, useRef, RefObject } from 'react';

interface ScrollProgress {
  progress: number;
  isInView: boolean;
}

export function useScrollProgress(ref?: RefObject<HTMLElement>): ScrollProgress {
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;

        // Calculate how far the element has scrolled through the viewport
        const scrollProgress = Math.max(
          0,
          Math.min(1, (windowHeight - rect.top) / (windowHeight + elementHeight))
        );

        setProgress(scrollProgress);
        setIsInView(rect.top < windowHeight && rect.bottom > 0);
      } else {
        // Global scroll progress
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrollProgress = window.scrollY / totalHeight;
        setProgress(Math.min(1, Math.max(0, scrollProgress)));
        setIsInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return { progress, isInView };
}

export function useInView(threshold = 0.1): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}
