import React from "react";
import "./InputRadio.scss";

const Inputradio = ({ title, subtitle, icon, id }) => {
  return (
    <>
      <label className="del-address">
        <div className="del-address__input">
          <div className="del-address__input__wrapper">
            <input
              type="radio"
              className="qweq"
              id={id}
              name="input"
            />
            <div className="del-address__titles">
              <h2 className="del-address__titles__title">{title}</h2>
              <p className="del-address__titles__text">{subtitle}</p>
            </div>
          </div>

          <span className="next-btn">
            <img src={icon} alt="rasm" />
          </span>
        </div>
      </label>
    </>
  );
};

export default Inputradio;
