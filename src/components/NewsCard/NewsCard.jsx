import React from "react";
import "./NewsCardStyle.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import imgPlay from "../../images/play.svg" 

function NewsCard({ img, category, time, theme, display, info }) {
  return (
    <>
      <div className="wrapper">
        <div className="img_wrapper">
          <img className="sldImg" src={img} />
          <span className="imgPlay">
            <img src={imgPlay} />
          </span>
        </div>
        <div className="txt">
          <div className="category">
            <p>{category}</p>
            <li>{time}</li>
          </div>
          <h4>{theme}</h4>
          <h6>{info}</h6>
          <div style={{display: display}} className="more">
            <p>Ko'proq o'qish</p>
            <HiOutlineArrowNarrowRight size={20} className="arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
