import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function RoseDay() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-rose-100 text-center px-4 sm:px-6 overflow-hidden relative">
      
      {/* Floating Roses */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 12}px`,
            }}
          >
            🌹
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
        Happy Rose Day 🌹
      </motion.h1>

      {/* Message */}
      <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-xl z-10 leading-relaxed">
        Just like this rose, you make my life beautiful, fragrant, and full of love.
        This rose is a small symbol of my big love for you ❤️
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/gallery")}
        className="mt-10 bg-rose-500 text-white px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base z-10"
      >
        See Our Memories 📸
      </button>
    </div>
  );
}
