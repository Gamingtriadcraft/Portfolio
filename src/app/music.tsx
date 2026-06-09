"use client";
import React, { useEffect, useRef } from "react";

function Music() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1;
      audio.play().catch((error) => {
        console.warn("Audio playback failed:", error);
      });
    }
  }, []);

  return (
    <audio ref={audioRef} loop className="fixed bottom-4 right-4 w-48 z-50 ">
      <source src="/Kanye.wav" type="audio/wav" />
      Your browser does not support the audio tag.
    </audio>
  );
}

export default Music;
