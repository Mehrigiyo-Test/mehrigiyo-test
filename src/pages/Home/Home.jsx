import React, { useState } from "react";
import "./HomeStyle.scss";
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
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import { OnlineRecommend } from "../../components/OnlineRecommend/OnlineRecommend";
import Global from "../../components/GlobalBtn/GlobalBtn";
import GlobalSponsors from "../../components/GlobalSponsors/GloblaSponsors";
import Asked from "../../components/questions/asked/asked";
import Send from "../../components/questions/send/send";
import leaves from "../../images/Groupffff.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ProductList from "../../components/ProductList/ProductsList";

function Home() {
  const imginfo = { img3: <img src={leaves} alt="" /> };
  const [active, setActive] = useState([]);
  const lastNews = [
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "1 min oldin",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "4 min oldin",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "4 min oldin",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "4 min oldin",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "4 min oldin",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "4 min oldin",
      type: "ozish",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "4 min oldin",
      type: "ozish",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "4 min oldin",
      type: "about",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "4 min oldin",
      type: "health",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "4 min oldin",
      type: "detoks",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "4 min oldin",
      type: "advice",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "4 min oldin",
      type: "advice",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "4 min oldin",
      type: "advice",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
    {
      img: sliderEx,
      category: "#Ziravorlar",
      time: "44 min oldin",
      type: "advice",
      theme:
        'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
      info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
    },
  ];

  const sortFunc = (e) => {
    const arrr = [];
    if (e.target.id === "all") {
      setActive(lastNews);
    } else {
      lastNews.filter((item) => {
        if (e.target.id === item.type) {
          arrr.push(item);
          setActive(arrr);
        }
      });
    }
  };

  return (
    <>
      <div className="lightGreenItem"></div>
      <div className="greenItem"></div>
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
        <ProductList />
        <InfoBanner />
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
                  <li
                    className="Myli"
                    id="all"
                    onClick={(e) => sortFunc(e)}
                    tabIndex={1}
                  >
                    Hammasi
                  </li>
                  <li
                    className="Myli"
                    id="about"
                    onClick={(e) => sortFunc(e)}
                    tabIndex={1}
                  >
                    Mahsulotlar haqida
                  </li>
                  <li
                    className="Myli"
                    id="advice"
                    onClick={(e) => sortFunc(e)}
                    tabIndex={1}
                  >
                    Shifokorlar tavsiya qiladilar
                  </li>
                  <li
                    className="Myli"
                    id="ozish"
                    onClick={(e) => sortFunc(e)}
                    tabIndex={1}
                  >
                    Ozish
                  </li>
                  <li
                    className="Myli"
                    id="health"
                    onClick={(e) => sortFunc(e)}
                    tabIndex={1}
                  >
                    Salomatlik
                  </li>
                  <li
                    className="Myli"
                    id="detoks"
                    onClick={(e) => sortFunc(e)}
                    tabIndex={1}
                  >
                    Detoks
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="slideComp">
            <Swiper
              slidesPerView={3.7}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {active.length === 0
                ? lastNews.map((item) => (
                    <SwiperSlide>
                      <NewsCard
                        img={item.img}
                        category={item.category}
                        time={item.time}
                        theme={item.theme}
                        info={item.info}
                      />
                    </SwiperSlide>
                  ))
                : active.map((item) => (
                    <SwiperSlide>
                      <NewsCard
                        img={item.img}
                        category={item.category}
                        time={item.time}
                        theme={item.theme}
                        info={item.info}
                      />
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </div>
      </div>

      <OnlineRecommend />
      <Asked />
      <Send overflow={"hidden"} img3={imginfo.img3} />
      <GlobalSponsors />
    </>
  );
}

export default Home;
