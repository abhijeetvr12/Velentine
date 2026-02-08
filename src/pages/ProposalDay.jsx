import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function ProposalDay() {
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

  const lines = [
    "Tumhe Kaise Btau Priye 💌",
    "Main Tumhe Kitna Chahta Hu ❤️",
    "Apni Aankhein Band Bhi Karu 🙈",
    "Sirf Sapne Mein Tumhe Dekhna Chahta Hu 🌙",
    "Tum Jab Paas Nahi Hoti Toh 😔",
    "Meri Saansein Tham Si Jaati Hai 💓",
    "Tumhe Ek Din Na Dekhu Toh 🥺",
    "Meri Aankhon Se Aanshu Nikal Aate Hai 😢",
    "Bas Ye Baat Ab Puchna Mat Kabhi Tum ❣️",
    "Ki Priye Main Tumhe Kaise Btau 💍",
    "Meri Aankhen Bhi Sirf Tumhe Dekhna Chahti Hai 👀❤️",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center px-4 sm:px-6 py-10 relative overflow-hidden">
      
      {/* 🎵 Background Song */}
      <audio ref={audioRef} loop>
        <source src="/attention.mp3" type="audio/mp3" />
      </audio>

      {/* 💗 Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              fontSize: `${18 + Math.random() * 12}px`,
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 z-10"
      >
        Happy Proposal Day 💍
      </motion.h1>

      {/* Shayari Lines */}
      <div className="max-w-md sm:max-w-xl z-10 space-y-3 sm:space-y-4">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.6 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed"
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/gallery")}
        className="mt-10 bg-pink-500 text-white px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base z-10"
      >
        See Our Memories 📸
      </button>
    </div>
  );
}
