import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const contextValue = {
    isPlaying,
    togglePlayPause,
    play,
    pause,
    audioRef,
  };

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
      <audio 
        ref={audioRef}
        className="mx-auto mt-5" 
        src="https://streamer.radio.co/s953ef459b/listen" 
        controls={false}
      ></audio>
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  return useContext(AudioContext);
};
