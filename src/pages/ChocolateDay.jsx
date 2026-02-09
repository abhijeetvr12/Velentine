import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function ChocolateDay() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  // autoplay after first interaction
  useEffect(() => {
    const play = () => {
      audioRef.current?.play().catch(() => {});
      document.removeEventListener("click", play);
    };
    document.addEventListener("click", play);
    return () => document.removeEventListener("click", play);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-100 text-center px-4 sm:px-6 py-10 relative overflow-hidden">

      {/* 🎵 Song */}
      <audio ref={audioRef} loop>
        <source src="/music/chocolate.mp3" type="audio/mp3" />
      </audio>

      {/* 💖 Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              fontSize: `${18 + Math.random() * 12}px`,
            }}
          >
            💗
          </motion.div>
        ))}
      </div>

      {/* 🍫 Floating Chocolates */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{ y: "110vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              fontSize: "26px",
            }}
          >
            🍫
          </motion.div>
        ))}
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 z-10"
      >
        Happy Chocolate Day 🍫❤️
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl leading-relaxed z-10"
      >
        Just like chocolate, you make my life sweeter every day.  
        Your love melts my heart and fills my world with happiness 🍬💞
      </motion.p>

      {/* Button */}
      <button
        onClick={() => navigate("/gallery")}
        className="mt-10 bg-amber-600 text-white px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base z-10"
      >
        See Our Memories 📸
      </button>
    </div>
  );
}
