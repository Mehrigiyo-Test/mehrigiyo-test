import React from "react";
import "./OnlineRecommend.scss";
import img from "../../images/imgDrawnDoctor.png";
import img2 from "../../images/littleCircle.svg";

import { GlobalGreenBtn } from "../GlobalGreenBtn/GlobalGreenBtn";

export const OnlineRecommend = () => {
  return (
    <section className="OnlineRecommend GlobalWrapper">
      <div className="OnlineRecommend__img">
        <img src={img} alt="imgDoctorsAnime" />
        <div className="imgPos">
            <img src={img2} />
        </div>
      </div>
      <div className="OnlineRecommend__text">
        <GlobalGreenBtn
          text="Mehrigiyo Plus"
          fonSize="14px"
          fontW="500"
          color="#53B175"
          bcgColor="#FFFFFF"
          width="146px"
          height="30px"
          brdRadius="100px"
          lineHei="17px"
        />
        <p className="OnlineRecommend__text__paragraph">
          Bepul onlayn maslahatlar oyiga <span
          style={{color:"#53B175"}}> 100 000 </span> so’mdan boshlanadi
        </p>
        <GlobalGreenBtn
          text="Aʼzo boʻlish"
          fonSize="16px"
          fontW="500"
          color="#ffff"
          bcgColor="#53B175"
          width="164px"
          height="50px"
          brdRadius="100px"
          lineHei="17px"
          />
          <div className="imgPos2">
              <img src={img2} />
          </div>
          <div className="imgPos3">
              <img src={img2} />
          </div>
          <div className="imgPos4">
              <img src={img2} />
          </div>
      </div>
    </section>
  );
};
