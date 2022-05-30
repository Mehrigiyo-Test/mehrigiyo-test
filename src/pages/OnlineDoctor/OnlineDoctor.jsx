import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// import { Pagination, Autoplay } from "swiper";
import FreeAdvice from "../../components/FreeAdvice/FreeAdvice";
import Ambulance from "../../components/Ambulance/Ambulance";
import TypeDoctor from "../../components/TypesOfDoctors/TypeDoctor";
import Warning from "../../components/Warning/Warning";
import TopDoctors from "../../components/TopDoctors/TopDoctors";
import GlobalBtn from "../../components/GlobalBtn/GlobalBtn";
import ApplicationSec from "../../components/ApplicationSec/ApplicationSec";
import img1 from "../../images/doctorBahrom.svg";
import imgLeaf from "../../images/leaf.png";
import GlobalSponsors from "../../components/GlobalSponsors/GloblaSponsors";
import "./OnlineDoctor.scss";
import Api from "../../api/requestApi";
import { useDispatch, useSelector } from "react-redux";
import { actionDoctors } from "../../store/getDoctors/action";

import Slider from "react-slick";

let settings = {
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  speed: 3000,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1370,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
  ],
};

function OnlineDoctor() {
  const { dataDoctors } = useSelector((state) => state.getDoctors);
console.log(dataDoctors, "bu dokorlar datasi")
  const dispatch = useDispatch();
  const API = "http://207.154.244.140:8000/";

  useEffect(() => {
    Api.get('/specialist/doctors/').then((res) =>
      dispatch(actionDoctors(res?.data?.data))
    );
  }, []);
  return (
    <>
      <Warning />
      <FreeAdvice />
      <TypeDoctor />
      <Ambulance />
      <div className="wrapperSwiper">
        <div className="imgLeaf">
          <img src={imgLeaf} />
        </div>
        <div className="sliderTop">
          <p className="sliderTopText">Top Shifokorlar</p>
          <Link to="/OnlineDoctor/BigCompListDoctor">
            <GlobalBtn
              style={{ textDecoration: "none" }}
              text="Batafsil"
              width="144px"
            />
          </Link>
        </div>
        <Slider {...settings}>
          {dataDoctors.map((item) => (
            <div key={item.id}>
              <TopDoctors
                img={API+item.image}
                text1={item.full_name}
                text2={item.type_doctor.name}
              />
            </div>
          ))}
        </Slider>
      </div>
      <ApplicationSec />
      <GlobalSponsors />
    </>
  );
}

export default OnlineDoctor;
