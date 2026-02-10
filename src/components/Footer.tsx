import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blush-pink/10 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Decorative hearts */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="text-primary/50"
            >
              <Heart className="w-5 h-5 fill-current" />
            </motion.div>
          ))}
        </motion.div>

        {/* Valentine's Week */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-heading text-xl text-muted-foreground mb-4">
            Valentine's Week 2024
          </h3>
          
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { day: 'Rose', date: '7' },
              { day: 'Propose', date: '8' },
              { day: 'Chocolate', date: '9' },
              { day: 'Teddy', date: '10' },
              { day: 'Promise', date: '11', active: true },
              { day: 'Hug', date: '12' },
              { day: 'Kiss', date: '13' },
              { day: 'Valentine', date: '14' },
            ].map((item) => (
              <motion.div
                key={item.day}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  item.active
                    ? 'bg-gold text-foreground shadow-gold'
                    : 'bg-muted/50 text-muted-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <span className="block font-heading text-sm">{item.day}</span>
                <span className="opacity-70">Feb {item.date}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-8"
        >
          Made with{' '}
          <motion.span
            className="inline-block text-primary"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ❤️
          </motion.span>
          {' '}for someone special
        </motion.p>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-xs text-muted-foreground/60"
        >
          Promise Day 2026 · A celebration of trust, commitment & eternal love with Pixel_Studio_Dev
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
