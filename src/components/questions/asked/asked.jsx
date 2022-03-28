import React, { useState } from "react";
import "./asked.css";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

export default function Asked() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const handleChange = () => {
    setShow(!show);
  };
  const handleChange2 = () => {
    setShow2(!show2);
  };
  const handleChange3 = () => {
    setShow3(!show3);
  };
  const handleChange4 = () => {
    setShow4(!show4);
  };
  const handleChange5 = () => {
    setShow5(!show5);
  };

  return (
    <div>
      <div className="GlobalWrapper">
        <div className="asked-wrapper">
          <div className="left-div">
            <h4 className="asked-heading">Ko‘p so‘raladigan savollar</h4>
            <p className="extra-p">
              Qo‘shimcha ma‘lumot uchun <br /> biz bilan bog‘laning
            </p>
            <button className="more-btn">
              <span>Batafsil</span>
              <span className="icon-right">
                <BsArrowRight />
              </span>
            </button>
          </div>
          <div className="accordion">

          <div className="big-div">
            <div className="section" onClick={handleChange}>
              <div className="text"><b>01</b> <span className="accordion-txt">Какой состав сока Alatoo?</span> </div>
              {!show ? (
                <div className="plus">
                  <AiOutlinePlus />
                </div>
              ) : (
                <div className="minus">
                  <AiOutlineClose />
                </div>
              )}
            </div>
            <div className="section-text">
              {show ? (
                <div className="more-text">
                  Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи и сок горького арбуза. В свою очередь эти два компонента включают в себя множество полезных ферментов, микроэлементов и витаминов, таких как органические кислоты, витамин с, витамин b1, витамин d, а также фермент папаин.
                </div>
              ) : null}
            </div>

            <div className="section2" onClick={handleChange2}>
              <div className="text2"><b>02</b> <span className="accordion-txt"> Сколько стоит Алатоо и сколько стоит доставка?</span></div>
              {!show2 ? (
                <div className="plus2">
                  <AiOutlinePlus />
                </div>
              ) : (
                <div className="minus2">
                  <AiOutlineClose />
                </div>
              )}
            </div>
            <div className="section-text2">
              {show2 ? (
                <div className="more-text2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima aut dicta nam libero voluptatem porro non itaque culpa,
                  laboriosam, nemo, nisi similique iusto suscipit modi animi in
                  natus beatae. Maiores?
                </div>
              ) : null}
            </div>

            <div className="section3" onClick={handleChange3}>
              <div className="text3"><b>03</b> <span className="accordion-txt"> Здравствуйте, аллергия часто на этот сок?</span></div>
              {!show3 ? (
                <div className="plus3">
                  <AiOutlinePlus />
                </div>
              ) : (
                <div className="minus3">
                  <AiOutlineClose />
                </div>
              )}
            </div>
            <div className="section-text3">
              {show3 ? (
                <div className="more-text3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima aut dicta nam libero voluptatem porro non itaque culpa,
                  laboriosam, nemo, nisi similique iusto suscipit modi animi in
                  natus beatae. Maiores?
                </div>
              ) : null}
            </div>

            <div className="section4" onClick={handleChange4}>
              <div className="text4">
                  <b>04</b> <span className="accordion-txt"> Эффективен ли сок Алатоо при часто рецидивирующем герпесе?</span>
              </div>
              {!show4 ? (
                <div className="plus4">
                  <AiOutlinePlus />
                </div>
              ) : (
                <div className="minus4">
                  <AiOutlineClose />
                </div>
              )}
            </div>
            <div className="section-text4">
              {show4 ? (
                <div className="more-text4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima aut dicta nam libero voluptatem porro non itaque culpa,
                  laboriosam, nemo, nisi similique iusto suscipit modi animi in
                  natus beatae. Maiores?
                </div>
              ) : null}
            </div>

            <div className="section5" onClick={handleChange5}>
              <div className="text5"><b>05</b>  <span className="accordion-txt">Здравствуйте, можно ли принимать при полипе в жёлчном пузыре?</span></div>
              {!show5 ? (
                <div className="plus5">
                  <AiOutlinePlus />
                </div>
              ) : (
                <div className="minus5">
                  <AiOutlineClose />
                </div>
              )}
            </div>
            <div className="section-text5">
              {show5 ? (
                <div className="more-text5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima aut dicta nam libero voluptatem porro non itaque culpa,
                  laboriosam, nemo, nisi similique iusto suscipit modi animi in
                  natus beatae. Maiores?
                </div>
              ) : null}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
