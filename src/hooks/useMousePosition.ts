import { useState, useEffect, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });
  const lastTimeRef = useRef(0);
  const isMobileRef = useRef(false);

  useEffect(() => {
    // Detect mobile
    const mediaQuery = window.matchMedia('(hover: none)');
    isMobileRef.current = mediaQuery.matches;
    const mediaHandler = (e: MediaQueryListEvent) => {
      isMobileRef.current = e.matches;
    };
    mediaQuery.addEventListener('change', mediaHandler);

    const handleMouseMove = (e: MouseEvent) => {
      // Skip on mobile
      if (isMobileRef.current) return;

      // Throttle to 60fps (16ms)
      const now = Date.now();
      if (now - lastTimeRef.current < 16) return;
      lastTimeRef.current = now;

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
        normalizedY: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', mediaHandler);
    };
  }, []);

  return mousePosition;
}
