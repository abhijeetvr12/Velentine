import { reasons } from "../data/reasons";
import { useNavigate } from "react-router-dom";

export default function Reasons() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-rose-100 p-10">
      <h2 className="text-4xl text-center mb-10">Why I Love You 💖</h2>

      <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
          >
            {r}
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/secret")}
          className="bg-pink-500 text-white px-6 py-3 rounded-xl"
        >
          Next ➜
        </button>
      </div>
    </div>
  );
}
