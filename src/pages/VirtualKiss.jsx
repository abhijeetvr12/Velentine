import { useState } from "react";
import { motion } from "framer-motion";

export default function VirtualKiss() {
  const [kissing, setKissing] = useState(false);

  const handleKiss = () => {
    setKissing(true);
    setTimeout(() => setKissing(false), 3500);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300">

      {/* 🌟 Animated Background Glow */}
      <motion.div
        className="absolute w-[900px] h-[900px] bg-pink-400/30 rounded-full blur-[160px]"
        animate={{ x: [-200, 200, -200], y: [-150, 150, -150] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* 💕 Floating Hearts */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 text-2xl"
          initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
          animate={{ y: "-10vh" }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 1.2,
          }}
        >
          💗
        </motion.div>
      ))}

      {/* 💋 Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-4xl sm:text-6xl font-extrabold text-rose-600 mb-12 drop-shadow-lg"
      >
        A Little Virtual Kiss 💋✨
      </motion.h1>

      {/* 💑 Emoji Section */}
      <div className="relative flex items-center justify-center w-full max-w-lg h-52">

        {/* Left Emoji */}
        <motion.div
          animate={{ x: kissing ? 120 : 0 }}
          transition={{ duration: 1 }}
          className="text-7xl sm:text-9xl"
        >
          😊
        </motion.div>

        {/* Right Emoji */}
        <motion.div
          animate={{ x: kissing ? -120 : 0 }}
          transition={{ duration: 1 }}
          className="text-7xl sm:text-9xl"
        >
          😊
        </motion.div>

        {/* 💋 Kiss Effect */}
        {kissing && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.8 }}
              transition={{ duration: 0.6 }}
              className="absolute text-7xl"
            >
              💋
            </motion.div>

            {/* Burst Hearts */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: 1.5,
                  x: Math.cos((i / 10) * 2 * Math.PI) * 150,
                  y: Math.sin((i / 10) * 2 * Math.PI) * 150,
                  opacity: 0,
                }}
                transition={{ duration: 1.5 }}
                className="absolute text-3xl"
              >
                💖
              </motion.div>
            ))}
          </>
        )}
      </div>

      {/* 💌 Romantic Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 text-lg text-rose-700 max-w-md text-center"
      >
        Close your eyes… imagine me leaning closer…  
        and stealing the softest kiss from you 😌💞
      </motion.p>

      {/* 💋 Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleKiss}
        className="relative mt-10 px-10 py-4 bg-rose-500 text-white rounded-full font-bold shadow-[0_0_40px_rgba(255,0,100,0.6)] hover:bg-rose-600 transition-all duration-300"
      >
        Kiss Me 💋
      </motion.button>

    </div>
  );
}
