import React, { useEffect, useState } from 'react';
import IconMenu from './IconMenu';
import CurrentSong from './CurrentSong';

const Header = ({ handleAudioClick, isPlaying, handleMenuClick }) => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const totalScroll = (scrollTop / (scrollHeight - clientHeight)) * 100;

    setScrollPosition(totalScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  return (
    <header className="z-20 w-full border-b border-black fixed bg-white flex justify-between text-sm sm:text-base">
      <div
        className="h-full absolute bg-fmBlue mix-blend-multiply transition-al" 
        style={{ width: `${scrollPosition}%` }}
      />
      <div className="flex items-center justify-between w-full p-1">
        <div className="flex items-center">
          <button 
            className={`absolute z-30 ml-4 mr-2 ${ isPlaying ? ' text-5xl' : 'text-4xl' }`}
            style={{ fontFamily: 'Webdings, sans-serif' }}
            onClick={handleAudioClick}
          >
            {isPlaying ? '\u23F8' : '\u25B6'}
          </button>
          <div className="flex-col ml-14">
            <div 
              className="text-2xl italic"
              style={{ fontFamily: 'Synt'}}
            >
              Currently streaming
            </div>
            <div
              style={{ fontFamily: 'Whyte, sans-serif' }}
            >
              <CurrentSong />
            </div>
          </div>
        </div>
        <button 
          className="w-12 h-12 text-xl flex items-center font-semibold mr-3"
          onClick={handleMenuClick}
        >
          <IconMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;