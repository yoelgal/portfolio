import React, { useEffect, useRef, useState } from 'react';

const BinaryRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none)');
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Binary characters
    const binary = '01';

    // Column setup - reduce density on mobile by 50%
    const fontSize = 14;
    const densityDivisor = isMobile ? 4 : 2;
    const columns = Math.floor(canvas.width / fontSize / densityDivisor);

    // Array to track the y position of each column
    const drops: number[] = [];
    const speeds: number[] = [];

    // Initialize all columns - start visible on screen
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * (canvas.height / fontSize); // Start on screen
      speeds[i] = 0.3 + Math.random() * 0.5;
    }

    let lastTime = 0;
    const frameInterval = 80; // Slightly faster
    let animationId: number;

    // Function to draw the animation using requestAnimationFrame
    const draw = (currentTime: number) => {
      animationId = requestAnimationFrame(draw);

      // Throttle
      if (currentTime - lastTime < frameInterval) return;
      lastTime = currentTime;

      // Lighter trail effect so characters stay visible longer
      ctx.fillStyle = 'rgba(0, 23, 31, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set consistent font
      ctx.font = `${fontSize}px monospace`;

      // Loop through each column
      for (let i = 0; i < columns; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        const x = i * fontSize * densityDivisor;
        const y = drops[i] * fontSize;

        // Bright cyan characters
        ctx.fillStyle = 'rgba(3, 221, 255, 0.9)';
        ctx.fillText(text, x, y);

        // Reset when off screen
        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        drops[i] += speeds[i];
      }
    };

    // Start animation loop with requestAnimationFrame
    animationId = requestAnimationFrame(draw);

    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed left-0 top-0 z-10 h-full w-full"
      style={{ opacity: 0.8 }}
    />
  );
};

export default BinaryRain;
