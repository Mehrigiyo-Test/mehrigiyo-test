import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


import ColumnCardTxt from "./../../components/NewPageComp/ColumnCardNewsTxt/ColumnCardTxt";
import RowNewsCard from "../../components/NewPageComp/RowNewsCard/RowNewsCard";
import LastNews from "../../components/NewPageComp/lastNews/lastNews";
import NewsCard from "../../components/NewsCard/NewsCard";


import Placeholder from "./../../images/Placeholder.png";
import Groupffff from "../../images/Groupffff.png";
// import sliderEx from "./../../images/sliderEx.png";
// import rowImg from "./../../images/rowImg.png";
import Group from "./../../images/Group.png";


import "swiper/css";
import "./NewStyle.scss";
import "swiper/css/pagination";

function News() {
  const { data } = useSelector((state) => state.getNews);
  console.log(data, "bu dataaa")


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
             {data.map((item) => (
               <NewsCard 
                key={item.id}
                img={API + item.image}
                category={item.hashtag}
                time={item.created_at}
                theme={item.name}
                info={item.description_uz}
               />
             ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
