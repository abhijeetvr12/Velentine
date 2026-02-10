import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fullText = "I promise to stand by you, today and always 🤝💖";

const PromiseMessage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    setDisplayedText('');
    setIsComplete(false);

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Heartbeat wave effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-primary/10"
              style={{
                width: `${200 + i * 150}px`,
                height: `${200 + i * 150}px`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blush-pink/5 via-transparent to-lavender/5" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setIsVisible(true)}
      >
        {/* Decorative quote marks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isVisible ? { opacity: 0.2, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-8xl font-heading text-gold leading-none mb-4"
        >
          "
        </motion.div>

        {/* Typewriter text */}
        <div className="min-h-[120px] flex items-center justify-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-relaxed">
            {displayedText}
            <motion.span
              animate={{ opacity: isComplete ? 0 : [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-[3px] h-[1em] bg-gold ml-1 align-middle"
            />
          </h2>
        </div>

        {/* Decorative closing quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isComplete ? { opacity: 0.2, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-8xl font-heading text-gold leading-none mt-4 rotate-180"
        >
          "
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-muted-foreground italic"
        >
          — A promise from my heart to yours
        </motion.p>
      </motion.div>
    </section>
  );
};

export default PromiseMessage;
