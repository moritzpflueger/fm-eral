import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Schedule = () => {
  return (
    <section 
      id="schedule"
      className="w-full flex justify-center pt-48 -mt-56"
    >
      <div 
        className="relative w-full max-w-3xl hidden sm:block border border-black"
        style={{ fontFamily: 'Synt, sans-serif' }}
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
          <SwiperSlide className="flex items-center justify-center aspect-video">Desktop Schedule 1</SwiperSlide>
          <SwiperSlide className="flex items-center justify-center aspect-video">Desktop Schedule 2</SwiperSlide>
          <SwiperSlide className="flex items-center justify-center aspect-video">Desktop Schedule 3</SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>        
      </div>
      <div className="w-full px-5 sm:hidden">
        <div className="flex items-center justify-center border border-black w-full mb-5 aspect-video">Mobile Schedule 1</div>
        <div className="flex items-center justify-center border border-black w-full mb-5 aspect-video">Mobile Schedule 2</div>
        <div className="flex items-center justify-center border border-black w-full mb-5 aspect-video">Mobile Schedule 3</div>
      </div>
    </section>
  );
}
export default Schedule;