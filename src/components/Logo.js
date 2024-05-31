import { useState, useEffect } from 'react';
import { useAudio } from '../context/AudioContext';

import IconPointsCrosses from './icons/IconPointsCrosses';
import IconWavesDown from './icons/IconWavesDown';
import IconWavesUp from './icons/IconWavesUp';

const Logo = () => {

  const [fontSettings, setFontSettings] = useState({ slnt: -17, wght: 450 });
  const { isPlaying, togglePlayPause } = useAudio();

  useEffect(() => {
    let interval;
    
    if (isPlaying) {
      interval = setInterval(() => {
        // const newWght = fontSettings.wght + Math.random() * 20;
        const newWght = fontSettings.wght;
        const newSlnt = Math.random() * (25 - 17) - 25; // Random slant between -20 and -10
        // const newSlnt = fontSettings.slnt;

        setFontSettings({ slnt: newSlnt, wght: newWght });
      }, 50); // Update every 100 milliseconds
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <div className="flex w-full h-80">
        {/* <div>
          <img 
            src={'logo-test.png'} 
            className="cursor-pointer w-[80%] max-w-96" 
            alt="logo" 
            onClick={togglePlayPause}
          />
        </div> */}
        <button 
          className="relative w-full bg-yellow-30 flex justify-center -translate-y-10 -translate-x-3 scale-110"
          onClick={togglePlayPause}
        >
          <div className="absolute rotate-3 left-[50%] right-[50%] -translate-x-[100px]">
            <IconPointsCrosses />
            <IconWavesDown />
            <IconWavesUp />
            <h1 
              className="absolute py-32 leading-[5rem] -rotate-[18deg] -z-10 "
              style={{ 
                fontFamily: 'Synt Variable, serif',
                fontVariationSettings: `"wght" ${fontSettings.wght}, "slnt" ${fontSettings.slnt}`,
                fontStretch: '150%'
              }}
            >
              <span className="text-[110px] block -translate-x-0">FM</span>
              <span className="text-[114px] block translate-x-5 -translate-y-1">eral</span>
            </h1>                   
            <div 
              className={`mix-bl mix-blend-color-dodge -translate-y-2 absolute top-[20px] -left-[80px] ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
            >
              <svg 
                id="radar-circle"
                viewBox='0 0 48 48'
                className="w-[400px]"
              >
                <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="#fff" stroke-width="1px" stroke-opacity="1">
                  <animate attributeName="r" from="0" to="20" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" from="1" to="0" dur="4s" repeatCount="indefinite"></animate>
                </circle>
                
                <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="#fff" stroke-width="1px" stroke-opacity="1">
                  <animate attributeName="r" from="0" to="20" dur="4s" repeatCount="indefinite" begin="0.75s" />
                  <animate attributeName="stroke-opacity" from="1" to="0" dur="4s" repeatCount="indefinite" begin="0.75s"></animate>
                </circle>
                
                <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="#fff" stroke-width="1px" stroke-opacity="1">
                  <animate attributeName="r" from="0" to="20" dur="4s" repeatCount="indefinite" begin="1.5s" />
                  <animate attributeName="stroke-opacity" from="1" to="0" dur="4s" repeatCount="indefinite" begin="1.5s"></animate>
                </circle>

                <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="#fff" stroke-width="1px" stroke-opacity="1">
                  <animate attributeName="r" from="0" to="20" dur="4s" repeatCount="indefinite" begin="1.75s" />
                  <animate attributeName="stroke-opacity" from="1" to="0" dur="4s" repeatCount="indefinite" begin="1.75s"></animate>
                </circle>
                
                {/* <circle cx="50%" cy="50%" r="5" fill="#C1D82F" stroke="#979797"></circle> */}
              </svg>                    
            </div>     
          </div>
                    

        </button>

      </div>




      <h2
        className="text-6xl sm:text-7xl px-10 font-serif text-center mt-10"
        style={{ fontFamily: 'Synt, serif' }}
      >
        98.6 MHz
      </h2>

    </div>
  );
}

export default Logo;
