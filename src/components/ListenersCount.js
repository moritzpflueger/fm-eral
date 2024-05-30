import { useEffect, useState, useRef } from 'react';
import IconUser from './icons/IconUser';

const ListenerCount = ({ isPlaying }) => {
  const [listeners, setListeners] = useState(getListeners());
  const hasMounted = useRef(false);

  function generateBaseListeners() {
    const now = new Date();
    const hours = now.getHours();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const baseSeed = now.getDate() + now.getMonth() + now.getFullYear() + hours + day;

    const randomFactor = Math.sin(baseSeed) * 10000;
    const baseListeners = 600 + Math.floor(randomFactor % 100);

    return baseListeners;
  }

  function getListeners() {
    const baseListeners = generateBaseListeners();
    const randomAdjustment = Math.floor(Math.random() * 3) - 1; // Adjust by -1 to +1
    return baseListeners + randomAdjustment;
  }

  useEffect(() => {
    if (hasMounted.current) {
      if (isPlaying) {
        const increaseTimeout = setTimeout(() => {
          setListeners(prev => prev + 1);
        }, 500);
        return () => clearTimeout(increaseTimeout);
      } else {
        const decreaseTimeout = setTimeout(() => {
          setListeners(prev => prev - 1);
        }, 600);
        return () => clearTimeout(decreaseTimeout);
      }
    } else {
      hasMounted.current = true;
    }
  }, [isPlaying]);

  return (
    <div className="self-start pl-5 flex items-center">
      <IconUser />
      {listeners} people listening
    </div>
  );
};

export default ListenerCount;