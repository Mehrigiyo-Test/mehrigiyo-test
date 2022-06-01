import React, { useState } from "react";
import style from "./Title.module.scss";
import { ReactComponent as Search } from "./../../icons/Search.svg";
const Title = ({ title, subtitle, edit }) => {
  const [show, setShow] = useState(false);
  return (
    <section className={style.titleContainer}>
      <div>
        <h3 className={style.title}>{title}</h3>
        <p className={style.subtitle}>{subtitle}</p>
      </div>
      <div className={style.box}>
        <div className={style.edit} hidden={!show ? false : true}>
          {edit}
        </div>
        <input
          type="text"
          placeholder={!show ? "Qidirish" : null}
          className={!show ? style.input : style.longInput}
          onMouseDown={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        />
        <span className={style.search}>
          <Search />
        </span>
      </div>
    </section>
  );
};

export default Title;
