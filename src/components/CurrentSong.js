import { useState, useEffect, useRef } from 'react';

const CurrentSong = () => {
  const songTitleRef = useRef(null);
  const [isLive, setIsLive] = useState(false);

  // Define the start and end times for the 'LIVE' display
  const liveStartTime = '17:00'; // 5:00 PM
  const liveEndTime = '20:00'; // 8:00 PM

  const checkLiveStatus = () => {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    const [startHours, startMinutes] = liveStartTime.split(':').map(Number);
    const [endHours, endMinutes] = liveEndTime.split(':').map(Number);

    const isLiveTime = (
      (currentHours > startHours || (currentHours === startHours && currentMinutes >= startMinutes)) &&
      (currentHours < endHours || (currentHours === endHours && currentMinutes < endMinutes)) &&
      currentTime.getMonth() === 5 && // 5 = June
      currentTime.getDate() >= 6 && // June 6th
      currentTime.getDate() <= 20 // June 20th
    );

    setIsLive(isLiveTime);
  };

  useEffect(() => {
    // Check live status on initial load
    checkLiveStatus();

    // Set up interval to check live status every minute
    const interval = setInterval(checkLiveStatus, 1000); // 60,000 ms = 1 minute

    // Create and append the script element only if not already appended
    if (songTitleRef.current && !songTitleRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://embed.radio.co/embed/s953ef459b/song.js';
      script.async = true;
      script.onerror = () => {
        console.error('Error loading the script.');
      };

      // Append the script to the ref container
      songTitleRef.current.appendChild(script);
    }

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {isLive && (
        <div>LIVE</div>
      )}
      <div className={`${isLive ? 'hidden': ''}`} ref={songTitleRef}></div>
    </div>
  );
};

export default CurrentSong;
