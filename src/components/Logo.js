import { useState, useRef, useEffect } from 'react';

const Logo = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [fontSettings, setFontSettings] = useState({ slnt: 0, wght: 400 });

  useEffect(() => {

  /* TODO: 
  Chatgpt suggest I need to create a server 
  that catches the audio stream and then on this server 
  I can use the Web Audio API.

  Here is an interrim solution where I create the
  illusion of a visualizer by changing the font weight
  */

    let interval;
    
    if (isPlaying) {
      interval = setInterval(() => {
        const newWght = Math.min(900, 400 + Math.random() * 20);
        const newSlnt = Math.random() * 60 - 5; // Random slant between -30 and 30

        setFontSettings({ slnt: newSlnt, wght: newWght });
      }, 50); // Update every 100 milliseconds
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <img 
        src={'logo-test.png'} 
        className="cursor-pointer max-w-96" 
        alt="logo" 
        onClick={togglePlayPause}
      />
      <h1 
        className="text-4xl px-10 font-serif text-center mt-10"
        style={{
          fontFamily: 'Synt Variable, Synt, sans-serif',
          fontVariationSettings: `"wght" ${fontSettings.wght}, "slnt" ${fontSettings.slnt}`
        }}
      >
        A Journey into Translocality
      </h1>
      <audio 
        ref={audioRef}
        className="mx-auto mt-5" 
        src="https://s4.radio.co/s6a6ec79bb/listen" 
        controls={false}
      ></audio>
    </div>
  );
}

export default Logo;
