import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import GlobalSponsorLogo1 from "../../images/globalSponsor1.png";
import GlobalSponsorLogo2 from "../../images/globalSponsor2.png";
import GlobalSponsorLogo3 from "../../images/globalSponsor3.png";
import GlobalSponsorLogo4 from "../../images/globalSponsor4.png";
import GlobalSponsorLogo5 from "../../images/globalSponsor5.png";
import GlobalSponsorLogo6 from "../../images/globalSponsor6.png";
import Slider from "react-slick";

import "swiper/css/autoplay";
import "./style.scss";

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

const Globlasponsors = () => {
  return (
    <div className="sliderWrapper">
      <div className="sliderContainer">
        <div className="sliderBox">
          <Slider {...settings}>
            <div className="sliderBoxes">
              <img src={GlobalSponsorLogo1} alt="" />
            </div>
            <div className="sliderBoxes">
              <img src={GlobalSponsorLogo2} alt="" />
            </div>
            <div className="sliderBoxes">
              <img src={GlobalSponsorLogo3} alt="" />
            </div>
            <div className="sliderBoxes">
              <img src={GlobalSponsorLogo4} alt="" />
            </div>
            <div className="sliderBoxes">
              <img src={GlobalSponsorLogo5} alt="" />
            </div>
            <div className="sliderBoxes">
              <img src={GlobalSponsorLogo6} alt="" />
            </div>
            <div className="sliderBoxes">
              <img src={GlobalSponsorLogo1} alt="" />
            </div>
            <div className="sliderBoxes">
              <img src={GlobalSponsorLogo2} alt="" />
            </div>
            <div className="sliderBoxes">
              <img src={GlobalSponsorLogo3} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Globlasponsors;
