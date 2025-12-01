import React, { useEffect, useState } from 'react';

const Blob: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent flash

  // Detect mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none)');
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    // Skip on mobile - no mouse cursor to follow
    if (isMobile) return;

    let lastTime = 0;
    const handleMouseMove = (event: MouseEvent) => {
      // Throttle to 60fps
      const now = Date.now();
      if (now - lastTime < 16) return;
      lastTime = now;

      const blob = document.getElementById('blob');
      if (blob) {
        // Use transform instead of left/top for better performance
        blob.style.transform = `translate(${event.pageX - 8}px, ${event.pageY - 8}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <div
      id="blob"
      className="pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full bg-non_photo_blue-400"
      style={{ willChange: 'transform' }}
    ></div>
  );
};

export default Blob;
