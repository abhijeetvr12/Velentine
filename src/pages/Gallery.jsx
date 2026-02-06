import { photos } from "../data/photos";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-10 bg-rose-50">
      <h2 className="text-4xl text-center mb-10">Our Memories 📸</h2>

      <div className="grid grid-cols-2 gap-6 justify-items-center">
        {photos.map((p, i) => (
          <div
            key={i}
            className="w-[32rem] bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img src={p.src} alt="" className="w-full h-80 object-cover" />
            <p className="p-4 text-center">{p.caption}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/timeline")}
          className="bg-pink-500 text-white px-6 py-3 rounded-xl"
        >
          Next ➜
        </button>
      </div>
    </div>
  );
}
