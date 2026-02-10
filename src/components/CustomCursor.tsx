import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CursorPosition {
  x: number;
  y: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [trail, setTrail] = useState<CursorPosition[]>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newPosition = { x: e.clientX, y: e.clientY };
    setPosition(newPosition);
    
    // Add to trail
    setTrail(prev => {
      const newTrail = [...prev, newPosition].slice(-8);
      return newTrail;
    });

    // Occasionally add sparkle
    if (Math.random() > 0.85) {
      const sparkle: Sparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 20,
        y: e.clientY + (Math.random() - 0.5) * 20,
      };
      setSparkles(prev => [...prev, sparkle]);
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
      }, 1000);
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
    // Add burst of sparkles on click
    const burstSparkles: Sparkle[] = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: position.x + Math.cos(i * 60 * Math.PI / 180) * 30,
      y: position.y + Math.sin(i * 60 * Math.PI / 180) * 30,
    }));
    setSparkles(prev => [...prev, ...burstSparkles]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => !burstSparkles.find(bs => bs.id === s.id)));
    }, 800);
  }, [position]);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], input, textarea, .interactive')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], input, textarea, .interactive')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp]);

  return (
    <>
      {/* Trail */}
      {trail.map((pos, index) => (
        <motion.div
          key={index}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: pos.x - 3,
            top: pos.y - 3,
          }}
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
            <circle cx="3" cy="3" r="3" fill="hsl(340 60% 65% / 0.4)" />
          </svg>
        </motion.div>
      ))}

      {/* Sparkles */}
      <AnimatePresence>
        {sparkles.map(sparkle => (
          <motion.div
            key={sparkle.id}
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: sparkle.x - 6,
              top: sparkle.y - 6,
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 180 }}
            exit={{ opacity: 0, scale: 0, rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
                fill="hsl(40 64% 69%)"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Cursor - Heart Knot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: isClicking ? 1.4 : isHovering ? 1.3 : 1,
          x: -16,
          y: -16,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <motion.div
          animate={{
            filter: isClicking 
              ? 'drop-shadow(0 0 15px hsl(40 64% 69%)) drop-shadow(0 0 30px hsl(340 60% 65%))'
              : isHovering 
                ? 'drop-shadow(0 0 10px hsl(340 60% 65%))'
                : 'drop-shadow(0 0 5px hsl(340 60% 65% / 0.5))',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            {/* Heart-Knot / Promise Ring Shape */}
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(340 60% 65%)" />
                <stop offset="50%" stopColor="hsl(40 64% 69%)" />
                <stop offset="100%" stopColor="hsl(340 60% 65%)" />
              </linearGradient>
            </defs>
            {/* Intertwined Heart Knot */}
            <path
              d="M16 28C16 28 4 20 4 12C4 8 7 5 11 5C13.5 5 15.5 6.5 16 8C16.5 6.5 18.5 5 21 5C25 5 28 8 28 12C28 20 16 28 16 28Z"
              fill="url(#heartGradient)"
              stroke="hsl(0 0% 100% / 0.5)"
              strokeWidth="0.5"
            />
            {/* Ring detail */}
            <ellipse
              cx="16"
              cy="14"
              rx="4"
              ry="3"
              fill="none"
              stroke="hsl(0 0% 100% / 0.6)"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
        
        {/* Click burst effect */}
        <AnimatePresence>
          {isClicking && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 rounded-full bg-gold/30" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CustomCursor;
