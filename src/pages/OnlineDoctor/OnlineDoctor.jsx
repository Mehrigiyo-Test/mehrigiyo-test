import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

import FreeAdvice from "../../components/FreeAdvice/FreeAdvice";
import Ambulance from "../../components/Ambulance/Ambulance";
import TypeDoctor from "../../components/TypesOfDoctors/TypeDoctor";
import Warning from "../../components/Warning/Warning";
import TopDoctors from "../../components/TopDoctors/TopDoctors";
import GlobalBtn from "../../components/GlobalBtn/GlobalBtn"
import ApplicationSec from "../../components/ApplicationSec/ApplicationSec";
import img1 from "../../images/doctorBahrom.svg";
// import img2 from "../../images/doctorGavhar.svg";
import imgLeaf from "../../images/leaf.png";

import GlobalSponsors from '../../components/GlobalSponsors/GloblaSponsors';

import "./OnlineDoctor.scss";
function OnlineDoctor() {
  return (
    <>
      <Warning />
      <FreeAdvice />
      <TypeDoctor />
      <Ambulance />
      <div className="wrapperSwiper">
        <div className="imgLeaf"><img src={imgLeaf} /></div>
        <div className="sliderTop">
          <p className="sliderTopText">Top Shifokorlar</p>
          <GlobalBtn  text="Batafsil" width="144px" />
        </div>
        <Swiper
          slidesPerView={5.7}
          spaceBetween={1}
          loop={true}
          autoplay={{delay: 2000}}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination, Autoplay]}

          className="mySwiper"
        >
          <SwiperSlide>
            <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="TopDoctors-wrapper">
        <TopDoctors
          img={img1}
          text1="A. Bahrom"
          text2="⭐️ 4.5 (135 reviews)"
        />
      </div> */}
      <ApplicationSec />
      <GlobalSponsors/>
    </>
  );
}

export default OnlineDoctor;
