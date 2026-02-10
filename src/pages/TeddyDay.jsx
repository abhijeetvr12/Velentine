import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function TeddyDay() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    const play = () => {
      audioRef.current?.play().catch(() => {});
      document.removeEventListener("click", play);
    };
    document.addEventListener("click", play);
    return () => document.removeEventListener("click", play);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 px-4">

      {/* 🎵 Music */}
      <audio ref={audioRef} loop>
        <source src="/music/teddy.mp3" type="audio/mp3" />
      </audio>

      {/* 🧸 Big Teddy Background */}
      <img
  src="/teddy-bg.jpg"
  alt="teddy background"
  className="absolute inset-0 w-full h-full object-cover opacity-20 blur-md pointer-events-none select-none"
/>


      {/* 🧸 Floating Teddies */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              fontSize: `${22 + Math.random() * 12}px`,
            }}
          >
            🧸
          </motion.div>
        ))}
      </div>

      {/* 💖 Glass Card Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 backdrop-blur-lg bg-white/30 shadow-2xl rounded-3xl p-8 sm:p-12 max-w-xl text-center border border-white/40"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-rose-700">
          Happy Teddy Day 🧸❤️
        </h1>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800">
          This teddy is a small reminder of me 🤍 <br />
          Whenever you hug it, feel my love around you 🧸💖 <br />
          Soft, warm, and always yours.
        </p>

        <button
          onClick={() => navigate("/valentine-week")}
          className="mt-10 bg-rose-500 hover:bg-rose-600 transition text-white px-8 py-3 rounded-xl"
        >
          Back to Valentine Week 💘
        </button>
        
      </motion.div>
      {/* Hidden Secret Button 😈 */}
       <button
  onClick={() => navigate("/ted-surprise")}
  className="absolute bottom-10 left-2 w-10 h-10 opacity-5 cursor-default"
>
  secret
</button>

    </div>
  );
}
