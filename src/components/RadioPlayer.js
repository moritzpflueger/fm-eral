import React, { useEffect, useRef } from 'react';

const RadioPlayer = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    const initializeRadioPlayer = () => {
      // Clear any existing iframes to prevent duplicates
      while (playerRef.current.firstChild) {
        playerRef.current.removeChild(playerRef.current.firstChild);
      }
      
      // Append the player iframe directly
      const iframe = document.createElement('iframe');
      iframe.src = 'https://embed.radio.co/player/8cb43e7.html';
      iframe.width = '100%';
      iframe.allow = 'autoplay';
      iframe.scrolling = 'no';
      iframe.style.border = 'none';
      iframe.style.overflow = 'hidden';
      iframe.style.maxWidth = '400px';
      iframe.style.margin = '0 auto';
      iframe.style.height = '100px';
      playerRef.current.appendChild(iframe);
    };

    // Initialize the player
    if (playerRef.current) {
      initializeRadioPlayer();
    }

    return () => {
      // Clean up the player container to avoid duplicates
      if (playerRef.current) {
        while (playerRef.current.firstChild) {
          playerRef.current.removeChild(playerRef.current.firstChild);
        }
      }
    };
  }, []);

  return <div className="radioplayer fixed bottom-5 left-5" ref={playerRef}></div>;
};

export default RadioPlayer;
