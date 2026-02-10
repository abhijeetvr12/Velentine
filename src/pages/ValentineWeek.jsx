import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const days = [
  {
    title: "Rose Day 🌹",
    desc: "A rose for the most beautiful person in my life",
    path: "/rose-day",
    color: "bg-rose-300",
  },
  {
    title: "Proposal Day 💍",
    desc: "Words straight from my heart",
    path: "/proposal-day",
    color: "bg-pink-200",
  },
  {
    title: "Chocolate Day 🍫",
    desc: "Because life is sweeter with you",
    path: "/chocolate-day",
    color: "bg-amber-200",
  },
  {
    title: "Teddy Day 🧸",
    desc: "A hug you can keep forever",
    path: "/teddy-day",
    color: "bg-rose-200",
  },
];

export default function ValentineWeek() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-100 px-4 py-10 text-center">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10"
      >
        Valentine Week 💖
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {days.map((day, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`${day.color} p-6 rounded-2xl shadow-lg cursor-pointer`}
            onClick={() => navigate(day.path)}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              {day.title}
            </h2>
            <p className="text-sm sm:text-base">{day.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
