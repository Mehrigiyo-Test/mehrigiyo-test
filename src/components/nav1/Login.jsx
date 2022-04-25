import React, { useState } from "react";
import imgUzb from "../../images/imgUzb.svg";
import { VscError } from "react-icons/vsc";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import imgOptinal from "../../images/imgOptinal.png";

const Login = ({ setModalActive, tab, setTab, setShoww }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="ModalLogin">
        <span
          className="ModalLogin__span"
          onClick={() => setModalActive(false)}
        >
          <VscError />
        </span>
        <div className="ModalLogin__item1">
          <button
            className={tab ? "active2 btnWidth" : "dis btnWidth"}
            onClick={() => setTab(true)}
          >
            Kirish
          </button>
          <button
            className={tab ? "dis btnWidth2" : "active2 btnWidth2"}
            onClick={() => setTab(false)}
          >
            Ro’yxatdan o’tish{" "}
          </button>
        </div>
        {tab ? (
          <form className="ModalLogin__item2">
            <div className="ModalLogin__item2__input1">
              <p>Telefon raqam</p>
              <span>
                <img src={imgUzb} />
              </span>
              <input type="number" placeholder="+998 94 681 42 32" />
            </div>
            <div className="ModalLogin__item2__input2">
              <p>Parol</p>
              <input
                type={show ? "text" : "password"}
                placeholder="* * * * * * * * "
              />
              {show ? (
                <span className="eyeVisible" onClick={() => setShow(false)}>
                  <BsEye />
                </span>
              ) : (
                <span className="eyeVisible" onClick={() => setShow(true)}>
                  <BsEyeSlash />
                </span>
              )}
            </div>
            <p className="ModalLogin__item2__span">Parolni unutdingizmi?</p>
            <button className="ModalLogin__item2__btn">Tizimga kirish</button>
          </form>
        ) : (
          <div className="Registration">
            <div className="Registration__parent">
              <div className="Registration__img">
                <img src={imgOptinal} />
              </div>
              <span className="Registration__span">
                Fotosurat yuklang (optinal)
              </span>
            </div>
            <form className="Registration__form">
              <div className="Registration__form__input1">
                <input type="text" placeholder="Foydalanuvchi nomi" />
              </div>
              <div className="Registration__form__input2">
                <p>Elektron pochta (optinal)</p>
                <input type="email" />
              </div>
              <div className="Registration__form__input3">
                <p>Parolni o’ylab toping</p>
                <input
                  type={show ? "text" : "password"}
                  placeholder="* * * * * * * * "
                />
                {show ? (
                  <span className="eyeVisible" onClick={() => setShow(false)}>
                    <BsEye />
                  </span>
                ) : (
                  <span className="eyeVisible" onClick={() => setShow(true)}>
                    <BsEyeSlash />
                  </span>
                )}
              </div>
              <p className="Registration__form__paragraph">
                “Ro’yxatdan o’tish” tugmasini bosgan holda, Siz
                <span> Foydalanish shartlarini qabul qilgan xisoblanasiz.</span>
              </p>
              <div className="Registration__form__btn">
                <button onClick={() => setModalActive("Verification")}>
                  Ro’yxatdan o’tish
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
