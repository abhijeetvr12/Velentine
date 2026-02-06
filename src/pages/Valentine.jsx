import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function FloatingHearts() {
  const hearts = Array.from({ length: 15 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((_, i) => {
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
              fontSize: `${20 + Math.random() * 20}px`,
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
  const [pos, setPos] = useState({ top: "60%", left: "60%" });

  const move = () => {
    setPos({
      top: Math.random() * 80 + "%",
      left: Math.random() * 80 + "%",
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-100 text-center relative overflow-hidden">
      
      {/* Floating Hearts Background */}
      <FloatingHearts />

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-10 z-10"
      >
        Will you be my Valentine? 💖
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/gallery")}
        className="bg-pink-500 text-white px-8 py-3 rounded-xl text-xl mr-10 z-10"
      >
        Yes 💕
      </motion.button>

      <button
        onMouseEnter={move}
        style={{ position: "absolute", ...pos }}
        className="bg-gray-500 text-white px-8 py-3 rounded-xl text-xl z-10"
      >
        No 😈
      </button>

      {/* Cute Sticker */}
      <img
        src="/hehehehe.gif"
        alt="cute sticker"
        className="fixed bottom-4 right-8 w-32 animate-bounce z-10"
      />
    </div>
  );
}
