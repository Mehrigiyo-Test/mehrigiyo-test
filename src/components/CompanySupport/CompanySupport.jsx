import React from "react";
import Bc_leaf_support from "../../images/support-bc1.png";
import SupportBcg from "../../images/support-bc.png";
import png1 from "../../images/Number-one.png";
import png2 from "../../images/Number-two.png";
import png3 from "../../images/Number-three.png";
import "./style.css";

const Companysupport = () => {
  const arr = [
    {
      img: png1,
      text: "Очищение",
    },
    {
      img: png2,
      text: "Восполнение",
    },
    {
      img: png3,
      text: "Восстановление",
    },
  ];
  return (
    <div className="support GlobalWrapper">
      <div className="support-titles">
        <h1 className="support-titles__title">Kompaniya turli kasalliklarni</h1>
        <h1 className="support-titles__title">
          tiklash uchun tizimli yondashuvdan foydalanadi,
        </h1>
        <h1 className="support-titles__title-bottom">
          bu <span>3 bosqichdan</span> iborat:
        </h1>
      </div>

      <div className="support-cards">
        {arr.map((item, index) => (
          <div key={index} className="support-cards__card">
            <span><img src={item.img} /></span>
            <p className="support-cards__card__text">{item.text}</p>
          </div>
        ))}

      </div>


      <div className="support-bottom-titeles">
        <p className="support-bottom-titeles__text">
          “Mehrigiyo” shifobaxsh mahsulotlari kasalliklarning
        </p>
        <p className="support-bottom-titeles__text">
          oldini oladi hamda uzoq, sog‘lom va to‘kin hayot
        </p>
        <p className="support-bottom-titeles__text">
          manbai bo‘lib xizmat qiladi
        </p>
        <div className="support__bc">
          <span>
            <img src={Bc_leaf_support} alt="img" />
            <img src={SupportBcg} alt="img" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Companysupport;
