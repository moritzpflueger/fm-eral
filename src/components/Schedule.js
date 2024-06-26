import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Schedule = () => {

  const [isZoomedIn, setIsZoomedIn] = useState(false);

  return (
    <section 
      id="schedule"
      className="w-full flex justify-center pt-24 -mt-24"
    >
      <div 
        className={`${isZoomedIn ? 'schedule_zoomed-in cursor-pointer' : 'w-full relative max-w-3xl'} hidden sm:block`}
        style={{ fontFamily: 'Synt, sans-serif' }}
        onClick={() => isZoomedIn && setIsZoomedIn(false)}
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          allowTouchMove={false}
          navigation={
            {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }
        >
          <SwiperSlide 
            className="flex items-center justify-center cursor-pointer"
            onClick={() => setIsZoomedIn(prev => !prev)}
            >
            <img src="/program1.png" className="w-full" />
          </SwiperSlide>
          <SwiperSlide 
            className="flex items-center justify-center cursor-pointer"
            onClick={() => setIsZoomedIn(prev => !prev)}
            >
            <img src="/program2.png" className="w-full" />
          </SwiperSlide>
          <SwiperSlide 
            className="flex items-center justify-center cursor-pointer"
            onClick={() => setIsZoomedIn(prev => !prev)}
          >
            <img src="/program3.png" className="w-full" />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>        
      </div>
      <div className="w-full px-5 sm:hidden">
        <div className="flex items-center justify-center w-full">
            <img src="/program1.png" className="w-full" />
        </div>
        <div className="flex items-center justify-center w-full">
            <img src="/program2.png" className="w-full" />
        </div>
        <div className="flex items-center justify-center w-full">
            <img src="/program3.png" className="w-full" />
        </div>
      </div>
    </section>
  );
}
export default Schedule;