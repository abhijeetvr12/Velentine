export default function TedSurprise() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-100 text-center px-4">
      
      <img
        src="https://tenor.com/view/ted-jugueton-ted-gif-15012574.gif"
        alt="Ted gif"
        className="w-80 sm:w-[500px] rounded-2xl shadow-2xl"
      />

      {/* Story based sarcastic caption */}
      <p className="mt-6 text-2xl sm:text-3xl font-bold text-pink-700">
        Me when I am with you 😌
      </p>

      <p className="text-lg text-gray-600 mt-2">
        Exactly this energy… full drama, full masti, full love 🧸💖
      </p>
    </div>
  );
}
