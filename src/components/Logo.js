import { useState, useRef } from 'react';
// import logo from '../logo.svg';
// import logo from '../../public/logo-test.png';

const Logo = () => {

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

  return (
    <div className="max-w-96">
      <img 
        src={'logo-test.png'} 
        className={`${isPlaying ? 'animate-pulse' : ''} cursor-pointer`} 
        alt="logo" 
        onClick={togglePlayPause}
      />
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
