import { useMousePosition } from '../../hooks/useMousePosition';
import HeroContent from './HeroContent';
import HeroScene from './HeroScene';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const mousePosition = useMousePosition();

  return (
    <section
      id="main"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <HeroScene
        mousePosition={{
          x: mousePosition.normalizedX,
          y: mousePosition.normalizedY,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4">
        <HeroContent onScrollToSection={onScrollToSection} />
      </div>
    </section>
  );
}
