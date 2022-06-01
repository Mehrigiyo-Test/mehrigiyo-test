import React from "react";
import "./LastNewsStyle.scss";
import Madrid2 from "./../../../images/madrid2.jpg";
import Upload1 from "./../../../images/Upload1.png";
import Global from "../../GlobalBtn/GlobalBtn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function LastNews({ img, category, time, theme, info }) {
  const { data } = useSelector((state) => state.getNews);

  const creat_at = data[data.length - 1];

  const API = "http://207.154.244.140:8000/";

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
      <div className="NewsPg1">
        <div>
          <div className="News1_wrapper padding1 gap">
            <p>
              <Link to="/">Bosh sahifa </Link>
            </p>
            <span>/</span>
            <p>
              <a href="/news">Yangiliklar</a>
            </p>
            <span>/</span>
            <p>
              <Link to="/news/MexrigiyoPresentation">
                Mehrigiyo kompaniyasi ...
              </Link>
            </p>
            <span>/</span>
            <p>
              <Link to="/news/BeingHealthy">Salomatlik sari</Link>
            </p>
          </div>
          <h2 className="lasteNews_txt">So’ngi yangiliklar</h2>
        </div>

        <section className="display sectiona">
          <div className="bigImgNews">
            <img src={API + creat_at.image} alt="" />
          </div>
          <div className="NewsTxtWrapper">
            <div className="txt1">
              <div className="UploadWrapper">
                <img src={Upload1} alt="Upload" />
              </div>
              <div className="category1 display">
                <p>#{creat_at.hashtag}</p>
                <li>{formatDate(new Date(creat_at.created_at))}</li>
              </div>
              <h4>{creat_at.name}</h4>
              <h6>{creat_at.description}</h6>
              <div className="moreBnt">
                <Global
                  text={"Ko'proq o'qish"}
                  width={"188px"}
                  color={"#53B175"}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LastNews;
