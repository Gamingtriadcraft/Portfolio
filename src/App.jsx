import Wallpaper from "/power-poles-purple-sky-pixel-moewalls-com.mp4";
import Heartless from "./audio/heartless.mp3";
import Notlikeus from "./audio/notlikeus.mp3";
import SwimmingPools from "./audio/swimmingpools.mp3";
import GoodLife from "./audio/goodlife.mp3";
import niasinparis from "./audio/niasinparis.mp3"; // Add your additional song imports
import HeartlessCover from "./audio/heartless.jpg"; // Add the respective cover image paths
import NotlikeusCover from "./audio/notlikeus.jpg";
import SwimmingPoolsCover from "./audio/swimmingpools.jpg";
import niasinparisCover from "./audio/niasinparis.jpg";
import GoodLifeCover from "./audio/goodlife.jpg";
import { useEffect, useRef, useState } from "react";

const audioTracks = [
  {
    src: Heartless,
    title: "Heartless",
    artist: "Kanye West",
    cover: HeartlessCover,
  },
  {
    src: Notlikeus,
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    cover: NotlikeusCover,
  },
  {
    src: SwimmingPools,
    title: "Swimming Pools",
    artist: "Kendrick Lamar",
    cover: SwimmingPoolsCover,
  },
  {
    src: niasinparis,
    title: "Niggas In Paris",
    artist: "JAY-Z, Kanye West",
    cover: niasinparisCover,
  },
  {
    src: GoodLife,
    title: "Good Life",
    artist: "Kanye West",
    cover: GoodLifeCover,
  },
];

function App() {
  const audioRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * audioTracks.length);
    setCurrentTrackIndex(randomIndex);
  }, []);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.log("Autoplay prevented: ", err);
      }
    };

    if (!showOverlay) {
      playAudio();
    }
  }, [showOverlay, currentTrackIndex]);

  useEffect(() => {
    const handleClick = () => {
      setShowOverlay(false);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleBack = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + audioTracks.length) % audioTracks.length
    );
  };

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * audioTracks.length);
    setCurrentTrackIndex(randomIndex);
  };

  const pauseMusic = () => {
    if (isPaused) {
      audioRef.current.play();
      setIsPaused(false);
    } else {
      audioRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover"
      >
        <source src={Wallpaper} type="video/mp4" />
      </video>

      <div className="fixed top-0 left-0 w-full h-full flex flex-col gap-1 justify-center items-center z-10">
        <div className="bg-black bg-opacity-50 rounded-lg p-4 w-[500px] flex flex-col items-center justify-center pt-[60px]">
          <img
            className="w-[9.5rem] rounded-full mb-2 -translate-y-[9.9rem] fixed"
            src="/tiktokpfp.png"
            alt="Profile"
          />
          <h1 className="text-white text-4xl">Dantae.</h1>
          <span className="text-white text-xs text-center">
            My name is Dantae, I'm a 14-year-old developer
          </span>

          <div className="mt-3 mb-4 flex justify-center">
            <img
              src="https://discord.c99.nl/widget/theme-4/779230704222339104.png"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-black bg-opacity-50 rounded-lg p-4 w-[200px] flex flex-col items-center justify-center h-[250px]">
          <div className="">
            <img
              src={audioTracks[currentTrackIndex].cover}
              alt={audioTracks[currentTrackIndex].title}
              className="w-20 h-20 mb-2 rounded"
            />
          </div>
          <h2 className="text-white text-sm mb-1">
            {audioTracks[currentTrackIndex].title}
          </h2>
          <h3 className="text-white text-xs mb-2">
            {audioTracks[currentTrackIndex].artist}
          </h3>
          <audio
            autoPlay
            ref={audioRef}
            key={audioTracks[currentTrackIndex].src} // This ensures the audio changes when the track changes
            controlsList="nodownload noplaybackrate"
            className="w-full"
          >
            <source
              src={audioTracks[currentTrackIndex].src}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
          <button onClick={pauseMusic} className="btn btn-primary mt-2 w-full">
            {isPaused ? "Unpause Music" : "Pause Music"}
          </button>
        </div>
      </div>

      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-20 flex justify-center items-center backdrop-blur-sm">
          <h1 className="text-white text-3xl">Click anywhere to continue</h1>
        </div>
      )}
    </div>
  );
}

export default App;
