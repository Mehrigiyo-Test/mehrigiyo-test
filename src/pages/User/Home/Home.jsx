import React, { useEffect, useState } from "react";
import "./HomeStyle.scss";

// COMPONENTS
import OrganicPlantation from "./../../../components/User/SectionPlantation/OrganicPlantation";
import { OnlineRecommend } from "../../../components/User/OnlineRecommend/OnlineRecommend";
import GlobalSponsors from "../../../components/User/GlobalSponsors/GloblaSponsors";
import ApplicationSec from "../../../components/User/ApplicationSec/ApplicationSec";
import OnlineDoctor from "./../../../components/User/OnlineDoctor/OnlineDoctor";
import ProductList from "../../../components/User/ProductList/ProductsList";
import BannerPhoto from "../../../components/User/bannerPhoto/bannerPhoto";
import Bannercard from "./../../../components/User/bannerCard/bannerCard";
import InfoBanner from "../../../components/User/InfoBanner/InfoBanner";
import BannerForm from "../../../components/User/bannerForm/bannerForm";
import Ambulance from "./../../../components/User/Ambulance/Ambulance";
import Asked from "../../../components/User/questions/asked";
import Global from "../../../components/User/GlobalBtn/GlobalBtn";
import NewsCard from "../../../components/User/NewsCard/NewsCard";
import Send from "../../../components/User/questions/send/send";
import Infosection from "../InfoSection/InfoSection";
import Banner from "../Banner/Banner";

//PNG
import BannerInputIcon from "../../../images/User/BannerInputIcon.png";
import BannerButtonIcon from "../../../images/User/lupa.png";
import leaves from "../../../images/User/Groupffff.png";

//SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import magic from "./magic.mp3";
import { useSelector } from "react-redux";
import "swiper/css/pagination";
import "swiper/css";

function Home() {
  const imginfo = { img3: <img src={leaves} alt="" /> };
  const [active, setActive] = useState([]);
  const { data } = useSelector((state) => state.getNews);
  console.log(data, "bu news data data")
  // const API = "http://207.154.244.140:8000/";
  const magic2 = new Audio(magic);
  const playy = () => {
    magic2.play();
  };

  const sortFunc = (e) => {
    const arrr = [];
    if (e.target.id === "all") {
      setActive(data);
    } else {
      data.filter((item) => {
        if (item.hashtag.includes(e.target.id)) {
          arrr.push(item);
          setActive(arrr);
        }
      });
    }
    playy();
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
                    id="Ziravorlar"
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
                    id="Ozish"
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
                ? data.map((item) => (
                    <SwiperSlide>
                      <NewsCard
                        img={item.image}
                        category={item.hashtag}
                        time={item.created_at}
                        theme={item.name}
                        info={item.description}
                      />
                    </SwiperSlide>
                  ))
                : active.map((item) => (
                    <SwiperSlide>
                      <NewsCard
                        img={item.image}
                        category={item.hashtag}
                        time={item.created_at}
                        theme={item.name}
                        info={item.description}
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
