import React from "react";
import photoCarousel01 from "../assets/carousel/photo_carousel01.jpg";
import photoCarousel02 from "../assets/carousel/photo_carousel02.jpg";
import photoCarousel03 from "../assets/carousel/photo_carousel03.jpg";
import photoCarousel04 from "../assets/carousel/photo_carousel04.jpg";
import photoCarousel05 from "../assets/carousel/photo_carousel05.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/autoplay';

function Carousel() {
  const photoCarousels = [
    photoCarousel01,
    photoCarousel02,
    photoCarousel03,
    photoCarousel04,
    photoCarousel05,
  ];
  return (
    <div className="carousel w">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: false}}
      >
      {photoCarousels.map((photo,index) => 
        <SwiperSlide key={`photoCarousel-${index}`}>
          <img className="img-fluid" src={photo} alt="" />
        </SwiperSlide>
      )}
      </Swiper>
    </div>
  );
}

export default Carousel;
