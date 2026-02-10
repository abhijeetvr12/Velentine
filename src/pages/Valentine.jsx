import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 18 }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 6 + Math.random() * 4;

        return (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: `${left}%`,
              fontSize: `${16 + Math.random() * 18}px`,
            }}
          >
            💗
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Valentine() {
  const navigate = useNavigate();
  const [pos, setPos] = useState({ top: "65%", left: "55%" });

  const move = () => {
    setPos({
      top: Math.random() * 75 + "%",
      left: Math.random() * 75 + "%",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center relative overflow-hidden px-4">
      
      <FloatingHearts />

      {/* Title */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 z-10"
      >
        Will you be my Valentine? 💖
      </motion.h1>

      {/* Buttons Row */}
      <div className="flex flex-col sm:flex-row items-center gap-6 z-10">
        {/* Yes */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/gallery")}
          className="bg-pink-500 text-white px-6 sm:px-8 py-3 rounded-xl text-lg sm:text-xl"
        >
          Yes 💕
        </motion.button>

        {/* No */}
        <button
          onMouseEnter={move}
          style={{ position: "absolute", ...pos }}
          className="bg-gray-500 text-white px-6 sm:px-8 py-3 rounded-xl text-lg sm:text-xl"
        >
          No 😈
        </button>
      </div>

      {/* Valentine Week Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/valentine-week")}
        className="mt-10 bg-rose-500 text-white px-6 sm:px-8 py-3 rounded-xl text-base sm:text-lg z-10"
      >
        🌹 Valentine Week Surprise
      </motion.button>

      {/* Sticker */}
      <img
        src="/hehehehe.gif"
        alt="cute sticker"
        className="fixed bottom-3 right-3 sm:bottom-4 sm:right-6 w-20 sm:w-28 animate-bounce z-10"
      />
      
    </div>
    
  );
}
