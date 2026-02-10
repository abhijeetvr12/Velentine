import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Send, Sparkles } from 'lucide-react';

const VowSection = () => {
  const [vow, setVow] = useState('');
  const [submittedVow, setSubmittedVow] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!vow.trim()) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmittedVow(vow);
      setVow('');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-background via-sky-blue/5 to-background">
      {/* Decorative ribbons */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 opacity-10"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(40 64% 69%), transparent)',
        }}
        animate={{ x: ['0%', '100%', '0%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Your Turn
          </span>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
            <span className="text-foreground">Write Your</span>
            <br />
            <span className="text-gradient-romantic">Own Promise</span>
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto">
            Let your heart speak. Write a promise that matters to you, and watch it transform into something beautiful.
          </p>
        </motion.div>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {!submittedVow ? (
              <motion.div
                key="input"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass-effect rounded-2xl p-8 shadow-romantic"
              >
                <Textarea
                  value={vow}
                  onChange={(e) => setVow(e.target.value)}
                  placeholder="I promise to..."
                  className="interactive min-h-[150px] resize-none border-border/50 bg-transparent text-lg focus:ring-gold focus:border-gold transition-all font-body"
                  maxLength={300}
                />
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-muted-foreground">
                    {vow.length}/300 characters
                  </span>
                  
                  <Button
                    variant="promise"
                    onClick={handleSubmit}
                    disabled={!vow.trim() || isSubmitting}
                    className="interactive"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Sparkles className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Seal This Promise
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="relative"
              >
                {/* Floating ribbon effect */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl opacity-30"
                  style={{
                    background: 'linear-gradient(135deg, hsl(340 60% 65% / 0.2), hsl(40 64% 69% / 0.2), hsl(213 58% 78% / 0.2))',
                  }}
                  animate={{
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative glass-effect rounded-2xl p-10 shadow-gold text-center">
                  {/* Sparkle decorations */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-gold"
                      style={{
                        left: `${15 + i * 15}%`,
                        top: i % 2 === 0 ? '10%' : '85%',
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      ✦
                    </motion.div>
                  ))}

                  {/* The promise in handwriting style */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="handwriting text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed"
                  >
                    "{submittedVow}"
                  </motion.p>

                  {/* Signature line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100px' }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8"
                  />
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-sm text-muted-foreground mt-4 italic"
                  >
                    Sealed with love on Promise Day 💍
                  </motion.p>

                  {/* Write another button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8"
                  >
                    <Button
                      variant="outline"
                      onClick={() => setSubmittedVow(null)}
                      className="interactive"
                    >
                      Write Another Promise
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default VowSection;
