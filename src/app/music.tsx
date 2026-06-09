"use client";
import React, { useEffect, useRef } from "react";

function Music() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.1;
    audio.loop = true;

    const handleCanPlay = () => {
      audio.play().catch((error) => {
        console.warn("Audio playback failed:", error);
      });
    };

    const handleError = (e: any) => {
      console.warn("Audio error:", e);
    };

    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("error", handleError);

    // If the browser already can play, try play immediately
    if (audio.readyState >= 4) {
      handleCanPlay();
    }

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      preload="auto"
      playsInline
      className="fixed bottom-4 right-4 w-48 z-50"
    >
      <source src="/Kanye.wav" type="audio/wav" />
      Your browser does not support the audio tag.
    </audio>
  );
}

export default Music;
