import { motion } from "framer-motion";

export default function LoveLetter() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center text-center px-6 overflow-hidden">

      {/* Stranger Things Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/30 to-black"></div>
      <div className="absolute w-[700px] h-[700px] bg-red-700/30 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative max-w-2xl p-10 bg-black/60 border border-red-700 rounded-2xl shadow-[0_0_40px_rgba(255,0,0,0.5)]"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 tracking-widest drop-shadow-[0_0_20px_red]">
          A LOVE LETTER 💌
        </h1>

        <p className="text-lg md:text-xl text-red-300 leading-8">
          In a world full of darkness,<br />
          you are my glowing light.<br /><br />

          When everything feels upside down,<br />
          your love makes it right.<br /><br />

          Every heartbeat echoes your name,<br />
          like a secret from another dimension.<br /><br />

          With you, forever isn't enough.<br /><br />

          ❤️ Together, we are infinite.
        </p>
      </motion.div>
    </div>
  );
}
