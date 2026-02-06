import { photos } from "../data/photos";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 py-8 sm:p-10 bg-rose-50">
      <h2 className="text-3xl sm:text-4xl text-center mb-8 sm:mb-10">
        Our Memories 📸
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {photos.map((p, i) => (
          <div
            key={i}
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={p.src}
              alt=""
              className="w-full h-56 sm:h-72 lg:h-80 object-cover"
            />
            <p className="p-4 text-center text-sm sm:text-base">
              {p.caption}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/timeline")}
          className="bg-pink-500 text-white px-6 py-3 rounded-xl text-sm sm:text-base"
        >
          Next ➜
        </button>
      </div>
    </div>
  );
}
