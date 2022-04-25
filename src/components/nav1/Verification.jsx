import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
const Verification = () => {
  return (
    <div className="Verification">
      <span className="Verification__span">
          <IoIosArrowDropleft/>
      </span>
      <p className="Verification__title">4 xonali kodingizni kiriting</p>
      <form className="Verification__form">
        <div className="Verification__form__input">
          <p>Kod</p>
          <input type="number" placeholder="- - - -" />
        </div>
        <span className="Verification__form__resend">Kodni qayta yuborish</span>
        <div className="Verification__form__btn">
          <button>Tasdiqlash</button>
        </div>
      </form>
    </div>
  );
};

export default Verification;
