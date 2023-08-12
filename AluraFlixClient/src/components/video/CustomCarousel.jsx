import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomCarousel = ({ data }) => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      selectedItem={0}
      dynamicHeight={false}
      swipeable={true}
      emulateTouch={true}
      centerMode={true}
      centerSlidePercentage={23.3}
      slidesToShow={4}
      responsive={[
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerSlidePercentage: 23.3,
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerSlidePercentage: 100,
            slidesToShow: 1,
          },
        },
      ]}
    >
      {data.map((item, index) => (
        <div className="card_video" key={index}  style={{ backgroundImage: `url(${item.imagen})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div>
            {item.title}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
