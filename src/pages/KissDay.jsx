import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function KissDay() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300">

      {/* ✨ Soft Moving Glow */}
      <motion.div
        className="absolute w-[900px] h-[900px] bg-pink-400/30 rounded-full blur-[160px]"
        animate={{ x: [-200, 200, -200], y: [-150, 150, -150] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* 💌 Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl bg-white/70 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-pink-200 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-rose-600 mb-6">
          Happy Kiss Day 💋❤️
        </h1>

        <p className="text-lg sm:text-xl text-rose-800 leading-relaxed">
          I still remember our very first kiss…  
          We were lying close, almost asleep, and my heart was racing faster
          than it ever had before.  

          I was so nervous that I tried four or five times,
          pulling back each time because I was shy and overthinking everything.  

          But when it finally happened…  
          it became one of the most beautiful feelings I’ve ever known. 💖  

          It was soft. Warm. Magical.  
          A moment where the world felt completely still.  

          And the funniest part?  
          Right after kissing you… I softly said,  
          <span className="font-semibold"> “Sorry.” </span>  

          Not because I regretted it…  
          but because I was overwhelmed, shy, and completely lost in you. 😌  

          That kiss will always stay in my heart —  
          sweet, nervous, unforgettable.
        </p>

        {/* 💋 Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">

          <button
            onClick={() => navigate("/virtual-kiss")}
            className="px-8 py-3 bg-rose-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-rose-600 transition-all duration-300"
          >
            💋 Kiss Me Virtually
          </button>

          <button
            onClick={() => navigate("/kiss-game")}
            className="px-8 py-3 bg-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-pink-600 transition-all duration-300"
          >
            🎮 Play Catch Game
          </button>

        </div>
      </motion.div>
    </div>
  );
}
