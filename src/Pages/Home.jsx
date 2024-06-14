import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  A11y, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";

import Footer from "../components/layout/Footer";
import cimg1 from "../Assets/bg0.png";
import cimg2 from "../Assets/bg1.png";
import cimg3 from "../Assets/bg2.png";
import cimg4 from "../Assets/bg3.png";

const Home = () => {
  return (
    <>
      <Swiper
        modules={[ A11y,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{delay:3000}}
      >
        <SwiperSlide>
          <img
            src={cimg1}
            alt="slide1"
            style={{ width: "100%", height: "100vh" }}
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={cimg2}
            alt="slide2"
            style={{ width: "100%", height: "100vh" }}
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={cimg3}
            alt="slide3"
            style={{ width: "100%", height: "100vh" }}
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={cimg4}
            alt="slide4"
            style={{ width: "100%", height: "100vh" }}
          ></img>
        </SwiperSlide>
      </Swiper>

      <Footer />
    </>
  );
};

export default Home;
