import React from "react";
import Carousel from "react-bootstrap/Carousel";
import photoCarousel01 from "../assets/carousel/photo_carousel01.jpg";
import photoCarousel02 from "../assets/carousel/photo_carousel02.jpg";
import photoCarousel03 from "../assets/carousel/photo_carousel03.jpg";
import photoCarousel04 from "../assets/carousel/photo_carousel04.jpg";
import photoCarousel05 from "../assets/carousel/photo_carousel05.jpg";

function CarouselBs() {
  const photoCarousels = [
    photoCarousel01,
    photoCarousel02,
    photoCarousel03,
    photoCarousel04,
    photoCarousel05,
  ];
  return (
    <div className="">
        <Carousel fade={true}>
        {photoCarousels.map((photo, index) => (
            <Carousel.Item key={`slide-${index}`}>
            <img
                className="img-fluid"
                src={photo}
                alt="slide"
            />
            </Carousel.Item>
        ))}
        </Carousel>
    </div>
  );
}

export default CarouselBs;
