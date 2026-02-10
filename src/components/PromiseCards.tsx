import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart, Shield, Infinity as InfinityIcon } from 'lucide-react';


const promises = [
  {
    id: 'trust',
    iconType: 'shield' as const,
    title: 'Trust',
    subtitle: 'My unwavering faith',
    message: 'I promise to trust you with all my heart, to believe in us even when the world seems uncertain. My faith in you is unshakeable, today and always. 🛡️💕',
    color: 'sky-blue',
  },
  {
    id: 'care',
    iconType: 'heart' as const,
    title: 'Care',
    subtitle: 'My endless devotion',
    message: 'I promise to care for you in every moment, to be your comfort in sorrow and your joy in happiness. Your heart is safe with me. 💝✨',
    color: 'blush-pink',
  },
  {
    id: 'forever',
    iconType: 'infinity' as const,
    title: 'Forever',
    subtitle: 'My eternal commitment',
    message: 'I promise to choose you every single day, through every sunrise and sunset. Our story has no ending, only beautiful new chapters. ♾️🤍',
    color: 'lavender',
  },
];

const getIcon = (iconType: 'shield' | 'heart' | 'infinity') => {
  switch (iconType) {
    case 'shield': return <Shield className="w-8 h-8" />;
    case 'heart': return <Heart className="w-8 h-8" />;
    case 'infinity': return <InfinityIcon className="w-8 h-8" />;
  }
};

const PromiseCards = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <section id="promise-section" className="py-24 px-6 bg-gradient-to-b from-background via-blush-pink/10 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
            <span className="text-gradient-romantic">Three Sacred Promises</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Click each card to reveal a heartfelt promise made just for you
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.button
                onClick={() => setSelectedCard(selectedCard === promise.id ? null : promise.id)}
                className={`interactive w-full p-8 rounded-2xl bg-gradient-card glass-effect shadow-card text-left transition-all duration-500 group ${
                  selectedCard === promise.id ? 'ring-2 ring-gold shadow-gold' : ''
                }`}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 50px -15px hsl(var(--lavender) / 0.5)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    promise.color === 'sky-blue' ? 'bg-sky-blue/30 text-secondary-foreground' :
                    promise.color === 'blush-pink' ? 'bg-blush-pink/50 text-primary' :
                    'bg-lavender/50 text-muted-foreground'
                  }`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {getIcon(promise.iconType)}
                </motion.div>

                {/* Title & Subtitle */}
                <h3 className="font-heading text-2xl md:text-3xl font-medium mb-2 text-foreground group-hover:text-gradient-romantic transition-all duration-300">
                  {promise.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {promise.subtitle}
                </p>

                {/* Expand indicator */}
                <motion.div
                  className="flex items-center gap-2 text-xs text-gold font-medium"
                  animate={{ opacity: selectedCard === promise.id ? 0 : 1 }}
                >
                  <span>Click to reveal</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>

                {/* Revealed Message */}
                <AnimatePresence>
                  {selectedCard === promise.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-6 pt-6 border-t border-border/50"
                    >
                      <p className="handwriting text-lg leading-relaxed text-foreground/90">
                        {promise.message}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseCards;
