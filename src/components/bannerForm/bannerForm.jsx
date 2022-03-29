import React from "react";
import "./style.scss";

const Bannerform = ({
  type,
  placeholder,
  img,
  textBtn,
  img2,
  width,
  padding
}) => {
  return (
    <>
      <form className="form">
        <input
          className="banner-input__input"
          type={type}
          placeholder={placeholder}
          style={{ width: width, padding: padding}}
        />
        <img className="banner-input__icon" src={img} />
        <button className="banner-input-btn">
          <img src={img2} />
          {textBtn}
        </button>
      </form>
    </>
  );
};

export default Bannerform;
