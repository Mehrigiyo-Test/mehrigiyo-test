import React from "react";
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

import BannerPhoto from "../../components/bannerPhoto/bannerPhoto";
import Banner from "../Banner/Banner";
import Infosection from "../InfoSection/InfoSection";
import Bannercard from "./../../components/bannerCard/bannerCard";
import { OnlineRecommend } from "../../components/OnlineRecommend/OnlineRecommend";
import Global from "../../components/GlobalBtn/GlobalBtn";
import GlobalSponsors from '../../components/GlobalSponsors/GloblaSponsors';

import GlobalSponsorLogo1 from '../../images/globalSponsor1.png';
import GlobalSponsorLogo2 from '../../images/globalSponsor2.png';
import GlobalSponsorLogo3 from '../../images/globalSponsor3.png';
import GlobalSponsorLogo4 from '../../images/globalSponsor4.png';
import GlobalSponsorLogo5 from '../../images/globalSponsor5.png';
import GlobalSponsorLogo6 from '../../images/globalSponsor6.png';

import Asked from "../../components/questions/asked/asked";
import Send from "../../components/questions/send/send";
import leaves from '../../images/Groupffff.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

function Home() {

  const imginfo = {img3: <img src={leaves} />}

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
  //     info:   "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
  //   },
  // ];

  return (
    <>
    <div className="lightGreenItem"></div>
    <div className="greenItem">
      
    </div>
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

        <BannerPhoto />
        <Bannercard />
        <Infosection />
        
        <OnlineDoctor />
        <OrganicPlantation />
        <Ambulance />
        <ApplicationSec />
        <div className="SliderWrapper">
          <div>
            <div className="nostyle">
              <h3 className="myH3">So'nggi yangiliklar</h3>
              <Global text="Batafsil" width="144px" />
            </div>
            <div>
              <nav className="navigate3">
                <ul className="Myul">
                  <li className="Myli" style={{ color: "#53B175" }}>
                    Hammasi
                  </li>
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
      <Asked />
      <Send overflow={'hidden'} img3={imginfo.img3} />
      <GlobalSponsors/>
    </>
  );
}

export default Home;
