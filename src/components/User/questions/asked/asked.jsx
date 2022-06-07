import React, { useState } from "react";
import "./asked.scss";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import leaf from "../../../../images/User/send_background.png";

export default function Asked() {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);

  return (
    <div className="asked-background">
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
              <div className="cestion1">
                <div className="text">
                  <b>01</b>{" "}
                  <span className="accordion-txt">
                    Какой состав сока Alatoo?
                  </span>{" "}
                </div>

                {show ? (
                  <div className="plus" onClick={() => setShow(false)}>
                    <AiOutlinePlus />
                  </div>
                ) : (
                  <div className="minus" onClick={() => setShow(true)}>
                    <AiOutlineClose />
                  </div>
                )}
              </div>

              <div className="section-text">
                <div
                  className="more-text"
                  style={
                    show
                      ? { height: "0", fontSize: "0px", transition: "0s" }
                      : {
                          height: "500",
                          fontSize: "16px",
                          transition: "0s",
                          paddingBottom: "100px",
                        }
                  }
                >
                  Детокс сок Алатоо имеет очень простой состав. Это сок зеленой
                  папайи и сок горького арбуза. В свою очередь эти два
                  компонента включают в себя множество полезных ферментов,
                  микроэлементов и витаминов, таких как органические кислоты,
                  витамин с, витамин b1, витамин d, а также фермент папаин.
                </div>
              </div>
              <div className="section">
                <div className="text">
                  <b>02</b>{" "}
                  <span className="accordion-txt">
                  Сколько стоит Алатоо и сколько стоит доставка?
                  </span>{" "}
                </div>

                {show2 ? (
                  <div className="plus" onClick={() => setShow2(false)}>
                    <AiOutlinePlus />
                  </div>
                ) : (
                  <div className="minus" onClick={() => setShow2(true)}>
                    <AiOutlineClose />
                  </div>
                )}
              </div>

              <div className="section-text">
                <div
                  className="more-text"
                  style={
                    show2
                      ? { height: "0", fontSize: "0px", transition: "0s" }
                      : {
                          height: "500",
                          fontSize: "16px",
                          transition: "0s",
                          paddingBottom: "100px",
                        }
                  }
                >
                  Детокс сок Алатоо имеет очень простой состав. Это сок зеленой
                  папайи и сок горького арбуза. В свою очередь эти два
                  компонента включают в себя множество полезных ферментов,
                  микроэлементов и витаминов, таких как органические кислоты,
                  витамин с, витамин b1, витамин d, а также фермент папаин.
                </div>
              </div>

              <div className="section">
                <div className="text">
                  <b>03</b>{" "}
                  <span className="accordion-txt">
                  Здравствуйте, аллергия часто на этот сок?
                  </span>{" "}
                </div>

                {show3 ? (
                  <div className="plus" onClick={() => setShow3(false)}>
                    <AiOutlinePlus />
                  </div>
                ) : (
                  <div className="minus" onClick={() => setShow3(true)}>
                    <AiOutlineClose />
                  </div>
                )}
              </div>

              <div className="section-text">
                <div
                  className="more-text"
                  style={
                    show3
                      ? { height: "0", fontSize: "0px", transition: "0s" }
                      : {
                          height: "500",
                          fontSize: "16px",
                          transition: "0s",
                          paddingBottom: "100px",
                        }
                  }
                >
                  Детокс сок Алатоо имеет очень простой состав. Это сок зеленой
                  папайи и сок горького арбуза. В свою очередь эти два
                  компонента включают в себя множество полезных ферментов,
                  микроэлементов и витаминов, таких как органические кислоты,
                  витамин с, витамин b1, витамин d, а также фермент папаин.
                </div>
              </div>
              <div className="section">
                <div className="text">
                  <b>04</b>{" "}
                  <span className="accordion-txt">
                  Эффективен ли сок Алатоо при часто рецидивирующем герпесе?
                  </span>{" "}
                </div>

                {show4 ? (
                  <div className="plus" onClick={() => setShow4(false)}>
                    <AiOutlinePlus />
                  </div>
                ) : (
                  <div className="minus" onClick={() => setShow4(true)}>
                    <AiOutlineClose />
                  </div>
                )}
              </div>

              <div className="section-text">
                <div
                  className="more-text"
                  style={
                    show4
                      ? { height: "0", fontSize: "0px", transition: "0s" }
                      : {
                          height: "500",
                          fontSize: "16px",
                          transition: "0s",
                          paddingBottom: "100px",
                        }
                  }
                >
                  Детокс сок Алатоо имеет очень простой состав. Это сок зеленой
                  папайи и сок горького арбуза. В свою очередь эти два
                  компонента включают в себя множество полезных ферментов,
                  микроэлементов и витаминов, таких как органические кислоты,
                  витамин с, витамин b1, витамин d, а также фермент папаин.
                </div>
              </div>
              <div className="section">
                <div className="text">
                  <b>05</b>{" "}
                  <span className="accordion-txt">
                  Здравствуйте, можно ли принимать при полипе в жёлчном пузыре?
                  </span>{" "}
                </div>

                {show5 ? (
                  <div className="plus" onClick={() => setShow5(false)}>
                    <AiOutlinePlus />
                  </div>
                ) : (
                  <div className="minus" onClick={() => setShow5(true)}>
                    <AiOutlineClose />
                  </div>
                )}
              </div>

              <div className="section-text">
                <div
                  className="more-text"
                  style={
                    show5
                      ? { height: "0", fontSize: "0px", transition: "0s" }
                      : {
                          height: "500",
                          fontSize: "16px",
                          transition: "0s",
                          paddingBottom: "100px",
                        }
                  }
                >
                  Детокс сок Алатоо имеет очень простой состав. Это сок зеленой
                  папайи и сок горького арбуза. В свою очередь эти два
                  компонента включают в себя множество полезных ферментов,
                  микроэлементов и витаминов, таких как органические кислоты,
                  витамин с, витамин b1, витамин d, а также фермент папаин.
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="leaf">
        <img src={leaf} alt="" />
      </div>
    </div>
  );
}
