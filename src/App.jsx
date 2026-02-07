import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";
import HeartBackground from "./components/HeartBackground";
import RoseDay from "./pages/RoseDay";
import Valentine from "./pages/Valentine";
import Gallery from "./pages/Gallery";
import Timeline from "./pages/Timeline";
import Reasons from "./pages/Reasons";
import Secret from "./pages/Secret";
import Final from "./pages/Final";

function MusicController() {
  const location = useLocation();

  const getSong = () => {
    switch (location.pathname) {
      case "/gallery":
        return "/daylight.mp3";
      case "/timeline":
        return "/enchanted.mp3";
      case "/reasons":
        return "/enchanted.mp3";
      case "/secret":
        return "/invisible.mp3";
      case "/final":
        return "/lovestory.mp3";
      case "/rose-day":
        return "treatyoubetter.mp3"  
      default:
        return "/lover.mp3";
    }
  };

  return <MusicPlayer song={getSong()} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <HeartBackground />
      <MusicController />

      <Routes>
        <Route path="/" element={<Valentine />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/secret" element={<Secret />} />
        <Route path="/final" element={<Final />} />
        <Route path="/rose-day" element={<RoseDay />} />

      </Routes>
    </BrowserRouter>
  );
}
