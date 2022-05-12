import React from "react";
import Basket__img from "../../../images/basket__main.png";
import Back1 from "../../../images/BackgroundLeaves.png";
import ArrowRight from "../../../images/arrow-right.svg"

export default function BasketEmpty() {
  return (
    <>
      <h1 className="text-main">Savatcha</h1>
      <div className="basket-details">
        <div className="with-img">
          <img className="basket-img" src={Basket__img} alt="" />
          <div className="basket-number">0</div>
        </div>
        <h1 className="top-text">Savatcha bo’sh!</h1>

        <button className="basket__history">
          <span>Buyurtmalar tarixi</span>
          <img src={ArrowRight} alt="" />
        </button>
      </div>
      <img className="back1" src={Back1} alt="" />
    </>
  );
}
