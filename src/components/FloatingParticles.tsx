import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'heart' | 'circle' | 'star';
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 12 + 6,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
        type: ['heart', 'circle', 'star'][Math.floor(Math.random() * 3)] as 'heart' | 'circle' | 'star',
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const renderParticle = (type: 'heart' | 'circle' | 'star', size: number) => {
    switch (type) {
      case 'heart':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
            />
          </svg>
        );
      case 'star':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.09 8.26L20.18 8.27L15.54 12.14L17.64 18.38L12 14.47L6.36 18.38L8.46 12.14L3.82 8.27L9.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
        );
      default:
        return (
          <div
            className="rounded-full bg-current"
            style={{ width: size, height: size }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            color: particle.type === 'heart' 
              ? 'hsl(340 60% 65% / 0.3)' 
              : particle.type === 'star' 
                ? 'hsl(40 64% 69% / 0.4)'
                : 'hsl(213 58% 78% / 0.3)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {renderParticle(particle.type, particle.size)}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingParticles;
