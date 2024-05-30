import React, { useState, useRef, useEffect } from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Logo from './components/Logo';
import AboutText from './components/AboutText';
import Footer from './components/Footer';
import ListenersCount from './components/ListenersCount';
import IconArrowDown from './components/icons/IconArrowDown';
import IconArrowUpDown from './components/icons/IconArrowUpDown';
import Schedule from './components/Schedule';
import './App.css';
import GoogleDocsEmbed from './components/GoogleDocsEmbed';
import CookieBanner from './components/CookieBanner';

function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);  
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    document.body.style.overflow = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <div 
      className="w-full flex flex-col items-center"
      style={{ paddingTop: `${headerHeight + 16}px`}}
    >
      <Menu 
        showMenu={menuIsVisible}
        handleMenuToggle={() => setMenuIsVisible(false)} 
      />
      <Header 
        isPlaying={isPlaying} 
        handleAudioClick={togglePlayPause} 
        handleMenuClick={() => setMenuIsVisible(true)}
        onHeightChange={(height) => setHeaderHeight(height)}
      />
      <ListenersCount />
      <Logo isPlaying={isPlaying} handleClick={togglePlayPause} />

      <IconArrowDown />
      <AboutText />
      <Schedule />
      <IconArrowUpDown />
      <GoogleDocsEmbed />
      <Footer />
      <CookieBanner />

      <audio 
        ref={audioRef}
        className="mx-auto mt-5" 
        src="https://streamer.radio.co/s953ef459b/listen" 
        controls={false}
      ></audio>
    </div>
  );
}

export default App;
