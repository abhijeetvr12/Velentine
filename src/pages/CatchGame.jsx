import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CatchGame() {
  const gameRef = useRef(null);

  const [playerX, setPlayerX] = useState(150);
  const [hearts, setHearts] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(40);
  const [gameOver, setGameOver] = useState(false);

  const targetScore = 20;

  /* ================= MOBILE CONTROL ================= */
  const handleTouchMove = (e) => {
    const rect = gameRef.current.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    setPlayerX(touchX - 40);
  };

  /* ================= DESKTOP CONTROL ================= */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") {
        setPlayerX((prev) => Math.max(prev - 40, 0));
      }
      if (e.key === "ArrowRight") {
        setPlayerX((prev) =>
          Math.min(prev + 40, window.innerWidth - 80)
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  /* ================= TIMER ================= */
  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  /* ================= SPAWN HEARTS ================= */
  useEffect(() => {
    if (gameOver) return;

    const spawnSpeed = Math.max(600 - level * 100, 250);

    const interval = setInterval(() => {
      const isGolden = Math.random() < 0.15; // 15% chance

      setHearts((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: Math.random() * (window.innerWidth - 40),
          y: -20,
          golden: isGolden
        }
      ]);
    }, spawnSpeed);

    return () => clearInterval(interval);
  }, [level, gameOver]);

  /* ================= HEART FALL ================= */
  useEffect(() => {
    if (gameOver) return;

    const fallSpeed = 4 + level * 1.5;

    const fall = setInterval(() => {
      setHearts((prev) =>
        prev
          .map((heart) => ({ ...heart, y: heart.y + fallSpeed }))
          .filter((heart) => {
            if (
              heart.y > window.innerHeight - 140 &&
              heart.x > playerX - 50 &&
              heart.x < playerX + 110
            ) {
              const points = heart.golden ? 3 : 1;
              setScore((s) => s + points);

              // Sparkle effect
              setSparkles((prev) => [
                ...prev,
                {
                  id: Date.now() + Math.random(),
                  x: heart.x,
                  y: heart.y
                }
              ]);

              return false;
            }
            return heart.y < window.innerHeight;
          })
      );
    }, 16);

    return () => clearInterval(fall);
  }, [playerX, level, gameOver]);

  /* ================= LEVEL SYSTEM ================= */
  useEffect(() => {
    if (score >= 8 && level === 1) setLevel(2);
    if (score >= 15 && level === 2) setLevel(3);
    if (score >= targetScore) setGameOver(true);
  }, [score]);

  /* ================= UI ================= */
  return (
    <div
      ref={gameRef}
      onTouchMove={handleTouchMove}
      className="relative min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 overflow-hidden select-none"
    >
      {/* Header */}
      <div className="backdrop-blur-lg bg-white/60 p-4 flex justify-between items-center shadow-md">
        <span className="font-semibold">Score: {score} 💖</span>
        <span>Level: {level}</span>
        <span>Time: {timeLeft}s ⏳</span>
      </div>

      {/* Player */}
      {!gameOver && (
        <motion.div
          animate={{ x: playerX }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute bottom-10 text-8xl"
        >
          👫
        </motion.div>
      )}

      {/* Hearts */}
      <AnimatePresence>
        {!gameOver &&
          hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                scale: 1.8,
                opacity: 0,
                transition: { duration: 0.3 }
              }}
              className={`absolute ${
                heart.golden
                  ? "text-6xl drop-shadow-lg"
                  : "text-4xl sm:text-5xl"
              }`}
              style={{ left: heart.x, top: heart.y }}
            >
              {heart.golden ? "💛" : "❤️"}
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Sparkles */}
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute text-3xl"
            style={{ left: s.x, top: s.y }}
            onAnimationComplete={() =>
              setSparkles((prev) =>
                prev.filter((sp) => sp.id !== s.id)
              )
            }
          >
            ✨
          </motion.div>
        ))}
      </AnimatePresence>

      {/* END SCREEN */}
      {gameOver && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-6"
        >
          {score >= targetScore ? (
            <>
              <h2 className="text-4xl font-bold mb-4">
                🎉 You Win 20 Kisses 😘
              </h2>
              <p className="mb-6 text-lg">
                You collected all my love perfectly 💖
              </p>

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
                className="text-6xl"
              >
                💋💋💋
              </motion.div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4">Time’s Up 💔</h2>
              <p className="text-lg">Final Score: {score}</p>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
}
