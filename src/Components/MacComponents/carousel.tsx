import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const slides = [
  { title: 'Performance and Battery Life', description: 'Go fast. Go far.', bg: 'bg-black' },
  { title: 'Mac and iPhone', description: 'Dream team.', bg: 'bg-gray-100' },
  { title: 'Compatibility', description: 'Mac runs your favorite apps.', bg: 'bg-blue-300' },
  { title: 'Privacy and Security', description: "Your business is nobody else's.", bg: 'bg-gradient-to-r from-red-500 to-pink-500' },
  { title: 'Durability', description: 'Built to stand the test of time.', bg: 'bg-gray-700' },
];

const Carousel: React.FC = () => {
  return (
    <div className="relative w-full px-4">
      <Swiper
        slidesPerView={3.2}
        spaceBetween={12} 
        navigation={{ nextEl: '.next', prevEl: '.prev' }}
        modules={[Navigation]}
        className="w-full"
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-[600px]">
            <div className={`relative overflow-hidden rounded-2xl shadow-lg h-full w-full flex flex-col items-center p-6 ${slide.bg}`}>
                
              <div className="w-full h-[800px]  rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Image Here</span>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white">{slide.title}</h3>
                <p className="text-base text-white">{slide.description}</p>
              </div>
              <button className="absolute bottom-4 right-4 bg-gray-900 p-3 rounded-full   text-white">+</button>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>

      <div className="absolute  right-4 flex gap-2 z-10">
        <button className="prev bg-white p-2 rounded-full shadow-lg">◀</button>
        <button className="next bg-white p-2 rounded-full shadow-lg">▶</button>
      </div>
    </div>
  );
};

export default Carousel;
