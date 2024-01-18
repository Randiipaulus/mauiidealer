import React from 'react';
import h1 from '../assets/h1.jpg';
import h2 from '../assets/h2.jpg';
import h3 from '../assets/h3.jpg';
import h4 from '../assets/h4.jpg';
import h5 from '../assets/h5.jpg';
import h6 from '../assets/h6.mp4';

import './Slider.css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';
 
const Slider = () => {
  return (
    <div className='all-slides'>
      <div className="box-slides">
        <Swiper
          scrollbar={{
            hide: false,
          }}
          modules={[Autoplay, Scrollbar]}
          className="mySwiper"
        >
          <div className="images-slider">
            <SwiperSlide>
              {/* Use video tag for video */}
              <video className='image-hero' autoPlay loop muted>
                <source src={h6} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
            <SwiperSlide><img src={h1} alt="" className='image-hero' /></SwiperSlide>
            <SwiperSlide><img src={h2} alt="" className='image-hero' /></SwiperSlide>
            <SwiperSlide><img src={h3} alt="" className='image-hero' /></SwiperSlide>
            <SwiperSlide><img src={h4} alt="" className='image-hero' /></SwiperSlide>
            <SwiperSlide><img src={h5} alt="" className='image-hero' /></SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
