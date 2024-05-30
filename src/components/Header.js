import React, { useEffect, useRef, useState } from 'react';
import IconMenu from './icons/IconMenu';
import CurrentSong from './CurrentSong';
import IconPlay from './icons/IconPlay';
import IconPause from './icons/IconPause';
import { useAudio } from '../context/AudioContext';

const Header = ({ handleMenuClick, onHeightChange }) => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [headline, setHeadline] = useState('Currently streaming');
  const headerRef = useRef(null);
  const { isPlaying, togglePlayPause } = useAudio();

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

  useEffect(() => {
    if (scrollPosition > 0) {
      setHeadline('FMeral');
    } else {
      setHeadline('Currently streaming');
    }
  }, [scrollPosition]);  

  useEffect(() => {
    const headerElement = headerRef.current;

    const updateHeaderHeight = () => {
      if (headerElement) {
        onHeightChange(headerElement.offsetHeight);
      }
    };
    const resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight();
    });
    if (headerElement) {
      resizeObserver.observe(headerElement);
    }
    // Initial measurement
    updateHeaderHeight();

    // Cleanup observer on unmount
    return () => {
      if (headerElement) {
        resizeObserver.unobserve(headerElement);
      }
    };
  }, [onHeightChange]); // Include onHeightChange in the dependency array to ensure it's captured correctly


  return (
    <header 
      ref={headerRef}
      className="z-20 w-full border-b border-black fixed top-0 bg-white flex justify-between text-sm sm:text-base"
    >
      <div
        className="h-full absolute bg-fmBlue mix-blend-multiply" 
        style={{ width: `${scrollPosition}%` }}
      />
      <div className="flex items-center justify-between w-full p-1">
        <div className="flex items-center">
          <button 
            className={`absolute z-30 ml-4 mr-2 ${ isPlaying ? ' text-5xl' : 'text-4xl' }`}
            style={{ fontFamily: 'Webdings, sans-serif' }}
            onClick={togglePlayPause}
          >
            {isPlaying ? <IconPause /> : <IconPlay />}
          </button>
          <div className="flex-col ml-16">
            <div 
              className="text-2xl italic"
              style={{ fontFamily: 'Synt'}}
            >
              {headline}
            </div>
            <CurrentSong />
          </div>
        </div>
        <div>
          <button 
            className="z-30 w-10 h-10 text-xl mr-3"
            onClick={handleMenuClick}
          >
            <IconMenu />
          </button>          
        </div>
      </div>
    </header>
  );
};

export default Header;