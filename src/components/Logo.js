import { useState, useEffect } from 'react';

const Logo = ({ isPlaying, handleClick }) => {

  const [fontSettings, setFontSettings] = useState({ slnt: 0, wght: 400 });

  useEffect(() => {
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

  return (
    <div className="w-full flex flex-col items-center">
      <img 
        src={'logo-test.png'} 
        className="cursor-pointer w-[80%] max-w-96" 
        alt="logo" 
        onClick={handleClick}
      />
      <h1 
        className="text-6xl sm:text-7xl px-10 font-serif text-center mt-10"
        style={{
          fontFamily: 'Synt Variable, Synt, sans-serif',
          fontVariationSettings: `"wght" ${fontSettings.wght}, "slnt" ${fontSettings.slnt}`
        }}
      >
        98.6 MHz
      </h1>
    </div>
  );
}

export default Logo;
