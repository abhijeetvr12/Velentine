import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ValentineDay() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a0000] via-[#5a0000] to-black text-white flex flex-col items-center text-center px-6">

      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 0] }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute text-red-500 text-xl"
          style={{ left: `${Math.random() * 100}%` }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Glow */}
      <div className="absolute w-[700px] h-[700px] bg-red-700/20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif"
        >
          Happy Valentine’s Day,
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold text-red-500 drop-shadow-[0_0_30px_rgba(255,0,0,0.8)] mt-4"
        >
          My Love ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-lg text-red-300"
        >
          A dark romantic universe made just for you ✨
        </motion.p>
      </section>

      {/* LOVE LETTER */}
      <section className="py-24 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
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

        {/* BUTTON TO VIDEO PAGE */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => navigate("/special-surprise")}
          className="mt-12 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-black text-white font-semibold text-lg shadow-2xl hover:scale-110 transition-all duration-300"
        >
          Watch Special Surprise 💋
        </motion.button>
      </section>

      <div className="py-10 text-red-400 text-sm tracking-widest">
        Made in the upside-down of my heart ❤️
      </div>
    </div>
  );
}
