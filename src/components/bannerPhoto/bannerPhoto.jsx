import React from "react";
import MainPhoto from "../../images/main.png";
import MainPhoto2 from "../../images/main2.png";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const Bannerinput = () => {
  return (
    <div className="banner-input bc-color bc-color2">
      <div className="GlobalWrapper">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop="false"
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="main-photo">
              <img src={MainPhoto} alt="photo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="main-photo">
              <img src={MainPhoto2} alt="photo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Bannerinput;
