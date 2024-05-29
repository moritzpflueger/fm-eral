import React, { useEffect, useRef } from 'react';

const CurrentSong = () => {
  const songTitleRef = useRef(null);

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://embed.radio.co/embed/s953ef459b/song.js';
    script.async = true;

    // Append the script to the ref container
    if (songTitleRef.current) {
      songTitleRef.current.appendChild(script);
    }

    // Clean up the script when the component unmounts
    return () => {
      if (songTitleRef.current) {
        songTitleRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div>
      <div ref={songTitleRef}></div>
    </div>
  );
};

export default CurrentSong;
