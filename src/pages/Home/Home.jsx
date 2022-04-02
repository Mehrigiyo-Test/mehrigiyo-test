import React, { useRef, useState } from "react";
import "./HomeStyle.css";
import NewsCard from "../../components/NewsCard/NewsCard";
import sliderEx from "./../../images/sliderEx.png";
import ApplicationSec from "../../components/ApplicationSec/ApplicationSec";
import OrganicPlantation from "./../../components/SectionPlantation/OrganicPlantation";
import OnlineDoctor from "./../../components/OnlineDoctor/OnlineDoctor";
import Ambulance from "./../../components/Ambulance/Ambulance";
import BannerForm from "../../components/bannerForm/bannerForm";

import BannerInputIcon from "../../images/BannerInputIcon.png";
import BannerButtonIcon from "../../images/lupa.png";

import Bannerinput from "../../components/bannerInput/bannerInput";
import Banner from "../Banner/Banner";
import Infosection from "../InfoSection/InfoSection";
import Bannercard from "./../../components/bannerCard/bannerCard";
import { OnlineRecommend } from "../../components/OnlineRecommend/OnlineRecommend";
import Global from "../../components/GlobalBtn/GlobalBtn";
import Asked from "../../components/questions/asked/asked";
import Send from "../../components/questions/send/send";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

function Home() {
  // const slide = [
  //   {
  //     img: sliderEx,
  //     category: "#Ziravorlar",
  //     time: "4 min oldin",
  //     theme:
  //       'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
  //     info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
  //   },
  //   {
  //     img: sliderEx,
  //     category: "#Ziravorlar",
  //     time: "4 min oldin",
  //     theme:
  //       'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
  //     info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
  //   },
  //   {
  //     img: sliderEx,
  //     category: "#Ziravorlar",
  //     time: "4 min oldin",
  //     theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy ',
  //     info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
  //   },
  //   {
  //     img: sliderEx,
  //     category: "#Ziravorlar",
  //     time: "4 min oldin",
  //     theme:
  //       'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
  //     info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
  //   },
  //   {
  //     img: sliderEx,
  //     category: "#Ziravorlar",
  //     time: "4 min oldin",
  //     theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy ',
  //     info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
  //   },
  //   {
  //     img: sliderEx,
  //     category: "#Ziravorlar",
  //     time: "4 min oldin",
  //     theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy ',
  //     info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
  //   },
  // ];

  return (
    <>
      <div className="pageStyle1">
        <Banner />
        <div className="banner-input bc-color">
          <BannerForm
            type="text"
            placeholder="Nima izlayapsiz?"
            textBtn="Qidirish"
            width="613px"
            value="helloo world"
            padding="12px 22px"
            marginLeft="130px"
            img={BannerInputIcon}
            img2={BannerButtonIcon}
          />
        </div>

        <Bannerinput />
        <Bannercard />
        <Infosection />
        <OnlineDoctor />
        <OrganicPlantation />
        <Ambulance />
        <ApplicationSec />
        <Asked />
        <Send />
        <div className="SliderWrapper">
          <div>
            <div className="nostyle">
              <h3 className="myH3">So'nggi yangiliklar</h3>
              <Global text="Batafsil" width="144px"/>
            </div>
            <div>
              <nav className="navigate3">
                <ul className="Myul">
                  <li className="Myli" style={{ color: "#53B175" }}>Hammasi</li>
                  <li className="Myli">Mahsulotlar haqida</li>
                  <li className="Myli">Shifokorlar tavsiya qiladilar</li>
                  <li className="Myli">Ozish</li>
                  <li className="Myli">Salomatlik</li>
                  <li className="Myli">Detoks</li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="slideComp">
            {/* {" "}
            {slide.map((item) => (
              <NewsCard
                img={item.img}
                category={item.category}
                time={item.time}
                theme={item.theme}
                info={item.info}
              />
            ))} */}
            <Swiper
              slidesPerView={3.7}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <NewsCard
                  img={sliderEx}
                  category="#Ziravorlar"
                  time="4 min oldin"
                  theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
                  info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
                />
              </SwiperSlide>
              <SwiperSlide>
                <NewsCard
                  img={sliderEx}
                  category="#Ziravorlar"
                  time="4 min oldin"
                  theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
                  info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
                />
              </SwiperSlide>
              <SwiperSlide>
                <NewsCard
                  img={sliderEx}
                  category="#Ziravorlar"
                  time="4 min oldin"
                  theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
                  info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
                />
              </SwiperSlide>
              <SwiperSlide>
                <NewsCard
                  img={sliderEx}
                  category="#Ziravorlar"
                  time="4 min oldin"
                  theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
                  info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
                />
              </SwiperSlide>
              <SwiperSlide>
                <NewsCard
                  img={sliderEx}
                  category="#Ziravorlar"
                  time="4 min oldin"
                  theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
                  info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
                />
              </SwiperSlide>
              <SwiperSlide>
                <NewsCard
                  img={sliderEx}
                  category="#Ziravorlar"
                  time="4 min oldin"
                  theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
                  info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <OnlineRecommend />
      {/* <Infosection title="Tez to'lov" text="100% xavfsiz to'lov"/> */}
    </>
  );
}

export default Home;
