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
  {
    title: "Promise Day 🤞💖",
    desc: "Promises I will keep forever",
    path: "/promise-day",
    color: "bg-pink-300",
  },
  {
    title: "Hug Day 🤗",
    desc: "A warm hug from me to you",
    path: "/hug-day",
    color: "bg-pink-300",
  },
  {
    title: "Kiss Day 💋",
    desc: "A sweet little kiss just for you",
    path: "/kiss-day",
    color: "bg-gradient-to-br from-rose-400 to-pink-500 text-white",
  },
  {
    title: "Valentine’s Day ❤️",
    desc: "The most special day of our love story",
    path: "/valentine-day",
    color: "bg-gradient-to-br from-red-600 to-black text-white",
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
            whileTap={{ scale: 0.95 }}
            className={`${day.color} p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300`}
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
