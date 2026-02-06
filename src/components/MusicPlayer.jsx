import { useEffect, useRef } from "react";

export default function MusicPlayer({ song }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = song;
    audio.volume = 0.6;

    audio.play().catch(() => {});

    const enableSound = () => {
      audio.muted = false;
      audio.play();
      window.removeEventListener("click", enableSound);
    };

    window.addEventListener("click", enableSound);
  }, [song]);

  return <audio ref={audioRef} loop muted />;
}
