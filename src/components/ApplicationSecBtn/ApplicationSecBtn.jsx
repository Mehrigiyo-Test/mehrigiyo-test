import React from "react";
import "./ApplicationSecBtn.scss"

const ApplicationSecBtn = ({ text1, text2, img }) => {
  return (
    <>
      <button className="App-sec__text__btns__items">
        <div className="App-sec__text__btns__items__img">
          <img src={img} alt="" />
        </div>
        <div className="App-sec__text__btns__items__text">
          <p className="App-sec__text__btns__items__text__little">{text1}</p>
          <p className="App-sec__text__btns__items__text__bigger">{text2}</p>
        </div>
      </button>
    </>
  );
};

export default ApplicationSecBtn;
