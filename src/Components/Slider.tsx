import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import img1 from "../Images/Shows/M1.jpg";
import img2 from "../Images/Shows/980x551 (2).jpg";
import img3 from "../Images/Shows/980x551 (1).jpg";
import img4 from "../Images/Shows/980x551 (3).jpg";
import img5 from "../Images/Shows/980x551 (4).jpg";
import img6 from "../Images/Shows/980x551 (6).jpg";
import img7 from "../Images/Shows/980x551 (7).jpg";
import img8 from "../Images/Shows/980x551 (8).jpg";
import img9 from "../Images/Shows/1250x703.jpg";
import img10 from "../Images/Shows/689x387 (1).jpg";
import img11 from "../Images/Shows/980x551 (5).jpg";
import  img12 from "../Images/Shows/980x551 (10).jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12
];


const Slider: React.FC = () => {
  return (

    <div className="w-full mx-auto">
      <SwiperComponent
        slidesPerView={1.5}
        spaceBetween={75}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        modules={[Pagination, Autoplay]}
        loop={true}
        centeredSlides={true}

        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 75 },
          768: { slidesPerView: 1.5, spaceBetween: 75 },
          1024: { slidesPerView: 1.5, spaceBetween: 75 },
          1440: { slidesPerView: 1.5, spaceBetween: 75 },
          1920: { slidesPerView: 1.5, spaceBetween: 75 },
        }}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="slider-item">
            <div className="relative w-full flex justify-center items-center">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-center object-contain"
              /> 
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <div className="custom-pagination flex justify-center mt-7 px-12"></div>
    </div>
  );
};

export default Slider;
