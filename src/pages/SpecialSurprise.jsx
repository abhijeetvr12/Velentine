import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SpecialSurprise() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0000] via-[#5a0000] to-black text-white flex flex-col items-center justify-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl text-red-500 font-bold mb-10 drop-shadow-[0_0_25px_red]"
      >
        A Special Moment Just For You 💋
      </motion.h1>

     <motion.video
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  src="/video.mp4"
  controls
  autoPlay
  loop
  className="w-[300px] sm:w-[350px] rounded-2xl shadow-[0_0_40px_rgba(255,0,0,0.6)]"
/>

      <button
        onClick={() => navigate("/")}
        className="mt-10 px-6 py-3 rounded-full border border-red-500 text-red-400 hover:bg-red-600 hover:text-white transition"
      >
        Back to Love Letter ❤️
      </button>
    </div>
  );
}
