import React from "react";
import Groupffff from "../../images/Groupffff.png";
import "./NewStyle.scss";
import LastNews from "../../components/NewPageComp/lastNews/lastNews";
import RowNewsCard from "../../components/NewPageComp/RowNewsCard/RowNewsCard";
import Group from "./../../images/Group.png";
import rowImg from "./../../images/rowImg.png";
import Placeholder from "./../../images/Placeholder.png";
import ColumnCardTxt from "./../../components/NewPageComp/ColumnCardNewsTxt/ColumnCardTxt";
import NewsCard from "../../components/NewsCard/NewsCard";
import sliderEx from "./../../images/sliderEx.png";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function News() {
  const { data } = useSelector((state) => state.getNews);

  const ad = data.map((_, index) => index);
  const er = ad[ad.length - 1];

  const rev = data
    .filter((_, i) => i < er)
    .map((item) => item)
    .reverse();
  console.log(rev, "BU DATA2");

  const API = "http://207.154.244.140:8000/";

  return (
    <>
      <div className="News">
        <div className="News_wrapper">
          <div>
            <img className="leafs" src={Groupffff} alt="" />
          </div>
          <div className="plant">
            <img className="plantImg" src={Group} alt="" />
          </div>
          <div className="LastNews_p">
            <LastNews />
          </div>
          <div className="display">
            <Swiper
              slidesPerView={2}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {rev.map((item) => (
                <SwiperSlide>
                  <RowNewsCard
                    img={API + item.image}
                    Greenholder={Placeholder}
                    events={item.hashtag}
                    time={item.create_at}
                    theme={item.name}
                    txt={item.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div>
            <ColumnCardTxt />
          </div>
          <div className="display NewsCardpadding">
            <div>
              <NewsCard
                img={sliderEx}
                category="#Ziravorlar"
                time="4 min oldin"
                theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
                info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
              />
              <NewsCard
                img={sliderEx}
                category="#Ziravorlar"
                time="4 min oldin"
                theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
                info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
              />
            </div>
            <div>
              <NewsCard
                img={sliderEx}
                category="#Ziravorlar"
                time="4 min oldin"
                theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
                info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
              />
              <NewsCard
                img={sliderEx}
                category="#Ziravorlar"
                time="4 min oldin"
                theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
                info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
              />
            </div>
            <div>
              <NewsCard
                img={sliderEx}
                category="#Ziravorlar"
                time="4 min oldin"
                theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
                info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
              />
              <NewsCard
                img={sliderEx}
                category="#Ziravorlar"
                time="4 min oldin"
                theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
                info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // }
}

export default News;
