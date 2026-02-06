import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Secret() {
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const correct = "Toshi"; // change this

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-red-50">
      {pass === correct ? (
        <>
          <p className="max-w-xl text-center text-xl mb-8">
            From the day you came into my life, everything changed.
            You are my happiness, my peace, and my forever. 💖
          </p>
          <button
            onClick={() => navigate("/final")}
            className="bg-pink-500 text-white px-6 py-3 rounded-xl"
          >
            Final Surprise 🎁
          </button>
        </>
      ) : (
        <>
          <h2 className="mb-4 text-2xl">Enter your name 💌</h2>
          <input
            className="border p-3 rounded"
            placeholder="Type here..."
            onChange={(e) => setPass(e.target.value)}
          />
        </>
      )}
    </div>
  );
}
