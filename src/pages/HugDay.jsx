import { useState } from "react";
import { motion } from "framer-motion";

export default function HugDay() {
  const [isHugging, setIsHugging] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [burstHearts, setBurstHearts] = useState([]);

  const handleHug = () => {
    setIsHugging(true);
    setBurstHearts(Array.from({ length: 14 }, (_, i) => i));

    setTimeout(() => setShowMessage(true), 500);

    setTimeout(() => {
      setIsHugging(false);
      setShowMessage(false);
      setBurstHearts([]);
    }, 3500);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4">

      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 animate-gradient" />

      {/* ✨ Big Moving Glow Blobs */}
      <motion.div
        className="absolute w-[900px] h-[900px] bg-pink-400/30 rounded-full blur-[160px] -z-10"
        animate={{ x: [-200, 200, -200], y: [-150, 150, -150] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[800px] h-[800px] bg-rose-400/30 rounded-full blur-[160px] -z-10"
        animate={{ x: [200, -200, 200], y: [150, -150, 150] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* 🌟 Title */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-extrabold text-pink-700 drop-shadow-lg"
      >
        Happy Hug Day 🤗💖
      </motion.h1>

      <p className="mt-4 mb-12 text-lg text-pink-800">
        Tap the heart to receive a warm virtual hug from me
      </p>

      {/* 🤗 Hug Area */}
      <div className="relative flex justify-center items-center min-h-[320px]">

        {/* Left Emoji */}
        <motion.div
          animate={{ x: isHugging ? 80 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute -left-20 sm:-left-32 text-7xl sm:text-9xl"
        >
          🤗
        </motion.div>

        {/* Heart Button */}
        <button
          onClick={handleHug}
          disabled={isHugging}
          className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/90 backdrop-blur-xl shadow-[0_0_60px_rgba(255,0,120,0.5)] flex items-center justify-center border-4 border-pink-300"
        >
          <span className={`text-6xl ${isHugging ? "animate-pulse" : ""}`}>
            ❤️
          </span>

          {/* 💥 Heart Burst */}
          {burstHearts.map((h) => (
            <span
              key={h}
              className="absolute text-2xl animate-ping"
              style={{
                transform: `rotate(${h * 25}deg) translateY(-90px)`,
              }}
            >
              💗
            </span>
          ))}
        </button>

        {/* Right Emoji */}
        <motion.div
          animate={{ x: isHugging ? -80 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute -right-20 sm:-right-32 text-7xl sm:text-9xl"
        >
          🤗
        </motion.div>
      </div>

      {/* 💌 Message */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-pink-200"
        >
          <p className="text-3xl font-bold text-pink-600">
            You are hugged tightly 💖
          </p>
          <p className="mt-2 text-pink-700">Feel my warmth around you 🤗</p>
        </motion.div>
      )}

      {/* 💫 Gradient Animation CSS */}
      <style jsx>{`
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradientMove 12s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
