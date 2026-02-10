import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => setIsButtonClicked(false), 1000);
    
    // Scroll to promise section
    document.getElementById('promise-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Flowing Ribbon Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Ribbon 1 */}
        <motion.div
          className="absolute -top-20 -left-20 w-[150%] h-40 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(340 60% 65% / 0.5), hsl(40 64% 69% / 0.3), transparent)',
            transform: 'rotate(-5deg)',
          }}
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Ribbon 2 */}
        <motion.div
          className="absolute top-1/4 -right-20 w-[120%] h-32 opacity-15"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(213 58% 78% / 0.6), hsl(263 35% 85% / 0.4), transparent)',
            transform: 'rotate(8deg)',
          }}
          animate={{
            x: ['10%', '-10%', '10%'],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        {/* Ribbon 3 */}
        <motion.div
          className="absolute bottom-1/4 -left-10 w-[130%] h-24 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(351 76% 92% / 0.7), hsl(40 64% 69% / 0.3), transparent)',
            transform: 'rotate(-3deg)',
          }}
          animate={{
            x: ['-5%', '5%', '-5%'],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Light waves */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                border: '1px solid hsl(340 60% 65% / 0.1)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Valentine's Week Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-card text-sm font-medium text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            February 11 — Promise Day
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6"
        >
          <span className="text-gradient-romantic">A Promise</span>
          <br />
          <span className="text-foreground">Made With Love</span>
          <span className="inline-block ml-3 heartbeat">🤍</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light"
        >
          This Promise Day, I give you my heart and my word
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            variant="promise"
            size="lg"
            onClick={handleButtonClick}
            className={`interactive relative overflow-hidden ${isButtonClicked ? 'glow-pulse' : ''}`}
          >
            <span className="relative z-10 flex items-center gap-2">
              Make a Promise
              <motion.span
                animate={{ rotate: isButtonClicked ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                💍
              </motion.span>
            </span>
            
            {/* Ripple effect on click */}
            {isButtonClicked && (
              <motion.div
                className="absolute inset-0 bg-gold/30 rounded-full"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs tracking-widest uppercase"></span>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
