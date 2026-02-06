import { timeline } from "../data/timeline";
import { useNavigate } from "react-router-dom";

export default function Timeline() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-pink-50 p-10">
      <h2 className="text-4xl text-center mb-12">Our Story 🗓️</h2>

      <div className="max-w-2xl mx-auto space-y-8">
        {timeline.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">{item.date}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/reasons")}
          className="bg-pink-500 text-white px-6 py-3 rounded-xl"
        >
          Next ➜
        </button>
      </div>
    </div>
  );
}
