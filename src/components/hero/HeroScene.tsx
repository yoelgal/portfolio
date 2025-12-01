import { useRef, useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface HeroSceneProps {
  mousePosition: { x: number; y: number };
}

export default function HeroScene({ mousePosition }: HeroSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none)');
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    mouseRef.current = {
      x: (mousePosition.x + 1) / 2,
      y: (1 - mousePosition.y) / 2,
    };
  }, [mousePosition]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Reduce particle count on mobile (25 vs 80)
    const particleCount = isMobile ? 25 : 80;
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 23, 31, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const mouseX = mouse.x * canvas.width;
      const mouseY = mouse.y * canvas.height;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Mouse influence (skip on mobile - no mouse)
        if (!isMobile) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distSq = dx * dx + dy * dy;

          // Early return if too far (avoid sqrt for performance)
          if (distSq < 40000) {
            const distance = Math.sqrt(distSq);
            const force = (200 - distance) / 200;
            particle.vx += (dx / distance) * force * 0.02;
            particle.vy += (dy / distance) * force * 0.02;
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(3, 221, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw connections - SKIP on mobile (O(n²) is too expensive)
        if (!isMobile) {
          particles.slice(i + 1).forEach((other) => {
            const connDx = other.x - particle.x;
            const connDy = other.y - particle.y;
            const connDistSq = connDx * connDx + connDy * connDy;

            // Early return if too far (22500 = 150²)
            if (connDistSq < 22500) {
              const connDistance = Math.sqrt(connDistSq);
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(3, 221, 255, ${0.15 * (1 - connDistance / 150)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        }
      });

      // Draw floating orbs - only 1 on mobile, 3 on desktop
      const time = Date.now() * 0.001;

      // Orb 1 (always show)
      const orb1X = canvas.width * 0.2 + Math.sin(time * 0.5) * 50;
      const orb1Y = canvas.height * 0.3 + Math.cos(time * 0.3) * 30;
      drawOrb(ctx, orb1X, orb1Y, 80, 'rgba(101, 100, 219, 0.15)');

      // Orb 2 & 3 (desktop only)
      if (!isMobile) {
        const orb2X = canvas.width * 0.8 + Math.sin(time * 0.4) * 40;
        const orb2Y = canvas.height * 0.6 + Math.cos(time * 0.6) * 50;
        drawOrb(ctx, orb2X, orb2Y, 100, 'rgba(35, 46, 209, 0.12)');

        const orb3X = canvas.width * 0.5 + Math.sin(time * 0.7) * 60;
        const orb3Y = canvas.height * 0.2 + Math.cos(time * 0.4) * 40;
        drawOrb(ctx, orb3X, orb3Y, 60, 'rgba(3, 221, 255, 0.1)');
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMobile]);

  const drawOrb = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    color: string
  ) => {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ background: 'transparent' }}
    />
  );
}
