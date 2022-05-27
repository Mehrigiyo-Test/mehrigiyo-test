import React from "react";
import "./NewsCardStyle.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import imgPlay from "../../images/play.svg";

function NewsCard({ img, category, time, theme, display, info }) {
  const newDate = new Date(time);

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join(".");
  }

  return (
    <>
      <div className="wrapper">
        <div className="img_wrapper">
          <img className="sldImg" src={img}  alt="" />
          <span className="imgPlay">
            <img src={imgPlay} alt="" />
          </span>
        </div>
        <div className="txt">
          <div className="category">
            <p>#{category}</p>
            <li className="lii"></li>
            <li className="time">{formatDate(newDate)}</li>
          </div>
          <h4>{theme}</h4>
          <h6>{info}</h6>
          <div className="more">
            <p>Ko'proq o'qish</p>
            <HiOutlineArrowNarrowRight size={20} className="arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
