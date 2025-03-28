import React, { useEffect, useRef } from 'react';

const BinaryRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Binary characters - expand to include some additional tech-related characters
    const binary = '01';

    // Column setup - increase density slightly
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize / 2); // Increase density

    // Array to track the y position of each column
    const drops: number[] = [];
    const speeds: number[] = [];

    // Initialize all columns to start from random positions with random speeds
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
      speeds[i] = 0.2 + Math.random() * 0.6; // Random speeds between 0.2 and 0.8
    }

    // Function to draw the animation
    const draw = () => {
      // Set semi-transparent black background to create trail effect
      ctx.fillStyle = 'rgba(14, 17, 17, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Base text color - brighter
      ctx.fillStyle = 'rgba(3, 221, 255, 0.7)';
      ctx.font = `${fontSize}px monospace`;

      // Loop through each column
      for (let i = 0; i < columns; i++) {
        // Generate a random character from binary string
        const text = binary.charAt(Math.floor(Math.random() * binary.length));

        // Calculate the x position
        const x = i * fontSize * 2 + Math.random() * fontSize;
        // Get the current y position for this column
        const y = drops[i] * fontSize;

        // Randomly make some characters more prominent with different opacity
        const opacity = 0.5 + Math.random() * 0.5; // Higher opacity between 0.5 and 1.0

        if (Math.random() > 0.95) {
          // More frequent bright highlights
          ctx.fillStyle = `rgba(3, 221, 255, 1.0)`;
          ctx.font = `bold ${fontSize * 1.2}px monospace`; // Slightly larger
        } else {
          ctx.fillStyle = `rgba(3, 221, 255, ${opacity})`;
          ctx.font = `${fontSize}px monospace`;
        }

        // Draw the character
        ctx.fillText(text, x, y);

        // Randomly reset drops to the top after they've reached the bottom
        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }

        // Move the drop down with its individual speed
        drops[i] += speeds[i];
      }
    };

    // Animation loop with reduced frame rate
    const interval = setInterval(draw, 100);

    // Clean up
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed left-0 top-0 z-0 h-full w-full"
      style={{ opacity: 0.25 }} // Increased from 0.12 to 0.25
    />
  );
};

export default BinaryRain;
