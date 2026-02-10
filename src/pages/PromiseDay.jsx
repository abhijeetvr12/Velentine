import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FloatingParticles from "./../components/FloatingParticles";

export default function PromiseDay() {
  const audioRef = useRef(null);
  const [text, setText] = useState("");
  const fullText =
    "I promise to stand by you, trust you, care for you, and choose you every single day 🤝💖";

  // 🎵 Auto music after first click
  useEffect(() => {
    const play = () => {
      audioRef.current?.play().catch(() => {});
      document.removeEventListener("click", play);
    };
    document.addEventListener("click", play);
    return () => document.removeEventListener("click", play);
  }, []);

  // ⌨️ Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-pink-50 flex flex-col items-center justify-center text-center px-6">

      {/* 🎵 Music */}
      <audio ref={audioRef} loop>
        <source src="/music/promise.mp3" type="audio/mp3" />
      </audio>

      {/* ✨ Floating Hearts/Particles */}
      <FloatingParticles />

      {/* 🌟 Big Soft Background Ring */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full border border-pink-200 opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 💍 Heading */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold z-10"
      >
        Happy Promise Day 💍🤍
      </motion.h1>

      {/* ❤️ Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-lg sm:text-xl max-w-2xl z-10"
      >
        A promise is not just words, it’s a feeling that stays forever.
      </motion.p>

      {/* ⌨️ Typewriter Promise */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 text-xl sm:text-2xl font-semibold max-w-3xl z-10"
      >
        {text}
        <span className="animate-pulse">|</span>
      </motion.div>

      {/* 💌 Promise Cards */}
      <div className="grid sm:grid-cols-3 gap-6 mt-16 z-10">
        {[
          {
            title: "Trust 🛡️",
            msg: "I promise to trust you in every situation, without doubts.",
          },
          {
            title: "Care 💝",
            msg: "I promise to take care of you in happiness and sadness.",
          },
          {
            title: "Forever ♾️",
            msg: "I promise to choose you every day for the rest of my life.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6 w-72"
          >
            <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
            <p>{card.msg}</p>
          </motion.div>
        ))}
      </div>

      {/* 💖 Bottom Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-16 text-md italic z-10"
      >
        “A promise from my heart to yours, today and always.” 🤍
      </motion.p>
    </div>
  );
}
