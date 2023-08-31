// import React from 'react'
import React, {useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './swip.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
export default function Swip() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
       <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3"
      >
        
        <SwiperSlide>
            <img src="/img/1 (2).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (1).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (3).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (4).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (5).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (6).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (7).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (8).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (9).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (10).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (11).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (12).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (13).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (14).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (15).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (16).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (17).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (18).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (19).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (20).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (21).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (22).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (23).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (24).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (25).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (26).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (27).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (28).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (29).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (30).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (31).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (32).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (33).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (34).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (35).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (36).jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
            <img src="/img/1 (37).jpg" alt="" />
          </SwiperSlide>
      </Swiper>
    </>
  )
}
