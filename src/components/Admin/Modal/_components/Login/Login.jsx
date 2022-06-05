import React, { useState } from "react";
import "../../../../../_global.scss";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ReactComponent as NoAvatar } from "../../../../../icons/NoAvatar.svg";
import { ReactComponent as Optinal } from "../../../../../icons/Optinal.svg";
import { ReactComponent as EyeHidden } from "../../../../../icons/EyeHidden.svg";
import { ReactComponent as EyeShow } from "../../../../../icons/EyeShow.svg";
import Button from "../../../Buttons/Button";
import { MaskedInput } from "antd-mask-input";
import { setCurrentUser, setToken } from "../../../../../Servis/auth-service";
import requestApi from "../../../../../Servis/api/request";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { actionChangeRouter } from "../../../../../store/changeRouter/action";
const Login = ({ setOpen }) => {
  const [show, setShow] = useState(true);
  const [tab, setTab] = useState(true);
  const [input, setInput] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    control: control2,
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm();

  const changeAdminRouter = () => {
    dispatch(actionChangeRouter("admin"));
    navigate("/admin/control-panel");
  };
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // login - tizimga kirish

  const onSubmit = (data) => {
    let phoneNumber = data.username;
    phoneNumber = phoneNumber.replace(/[^0-9]+/g, "");
    data.username = phoneNumber;
    console.log(data);

    requestApi.post("/login/", data).then((response) => {
      if (response.status === 200) {
        setToken(response.data.access);

        requestApi.get("/user/me/").then((response) => {
          if (response.status === 200) {
            let user = response.data.data;
            setCurrentUser(user);
            changeAdminRouter()
            window.location.reload(false);
          }
        });
      } else {
        alert("Ma'lumot topilmadi");
        setOpen(true);
      }
    });
    setOpen(false);
  };

  // registratsia
  const registration = (data) => {
    data["avatar"] = null;
    let phoneNumber = data.username;
    phoneNumber = phoneNumber.replace(/[^0-9]+/g, "");
    data.username = phoneNumber;
    data.first_name =
      data.first_name.charAt(0).toUpperCase() + data.first_name.slice(1);
    data.last_name =
      data.last_name.charAt(0).toUpperCase() + data.last_name.slice(1);

    requestApi.post("/user/registration/", data).then((response) => {
      if (response.status === 200 && response.data.status === "success") {
        console.log(response);
        navigate("/");
        window.location.reload(false);
      }
      if (response.status === 200 && response.data.status === "fail") {
        alert(Object.values(response.data.data)[0]);
      }
    });
  };

  return (
    <section>
      <div className="loginTab">
        <div className="loginTab__box">
          <span
            className={tab ? "activeTab " : "tab"}
            onClick={() => setTab(true)}
          >
            Kirish
          </span>
          <span
            className={"tabBg"}
            style={
              tab
                ? { transform: "translateX(0)", width: "140px" }
                : { transform: "translateX(145px)", width: "190px" }
            }
          ></span>
          <span
            className={tab ? "tab2" : " activeTab2"}
            onClick={() => setTab(false)}
          >
            Ro'yxatdan o'tish
          </span>
        </div>
      </div>

      {tab ? (
        <form className="loginContainer" onSubmit={handleSubmit}>
          <div className="loginContainer__1">
            <label htmlFor="number" className=" loginContainer__2">
              Telefon raqam
            </label>
            <Controller
              name="username"
              control={control}
              rules={{ required: true, minLength: 12 }}
              render={({ field }) => (
                <MaskedInput
                  mask={input ? "+998(00) 000-00-00" : ""}
                  onKeyDown={() => setInput(true)}
                  className=" maskedInput"
                  {...field}
                />
              )}
            />

            <div className="inputFlag">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Uzbekistan.png/1200px-Flag_of_Uzbekistan.png"
                alt=""
                width={25}
                height={25}
              />
            </div>
            {errors.username && (
              <div>
                <div className="error-message input-title">
                  Raqamingizni kiriting
                </div>
                <div className="animat inputAnimation">!</div>
              </div>
            )}
          </div>
          <div className="divPassword">
            <label htmlFor="password" className="labelPassword">
              Parol
            </label>
            <input
              id="password"
              type={show ? "password" : "text"}
              className="inputPassword"
              {...register("password", { required: true, minLength: 4 })}
            />
            {errors.password && (
              <span className="error-message enterPassword">
                Parolingizni kiriting
              </span>
            )}

            <div className="inputEyes">
              {show ? (
                <div onClick={() => setShow(false)}>
                  <EyeHidden />
                </div>
              ) : (
                <div onClick={() => setShow(true)}>
                  <EyeShow />
                </div>
              )}
            </div>
          </div>
          <p className="forgotPassword">Parolni unutdingizmi?</p>
          <div className="enterSystem" onClick={handleSubmit(onSubmit)}>
            <Button title={"Tizimga kirish"} />
          </div>
        </form>
      ) : (
        <section className="modalRegistration">
          <div className="avatar">
            <div className="clickAvatar">
              <NoAvatar />
              <span className="clickAvatar-span">
                <Optinal />
              </span>
            </div>
            <p className="avatarText">Fotosurat yuklang (optinal)</p>
          </div>
          <form action="" className="form" onSubmit={handleSubmit2}>
            <div className="formDiv1">
              <input
                type="text"
                placeholder="Ismingiz"
                className="formDiv1-input1"
                {...register2("first_name", { required: true })}
              />
              {errors2.first_name && (
                <span className="error-message formDiv1-text">
                  Ismingizni kiriting
                </span>
              )}
            </div>
            <div className="formDiv2">
              <input
                type="text"
                placeholder="Familiyangiz"
                className="formDiv2-input2"
                {...register2("last_name", { required: true })}
              />
              {errors2.last_name && (
                <span className="error-message formDiv2-text">
                  Familiyangizni kiriting
                </span>
              )}
            </div>
            <div className="formDiv3">
              <label htmlFor="email" className="formDiv3-label">
                Elektron pochta (optinal)
              </label>
              <input
                id="email"
                type="email"
                className="formDiv3-input3"
                {...register2("email", {
                  required: true,
                  pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}",
                })}
              />
              {errors2.email && (
                <span className="error-message formDiv3-text">
                  Pochtangizni kiriting
                </span>
              )}
            </div>
            <div className="formDiv4">
              <label htmlFor="email" className="formDiv4-label">
                Telefon raqamingiz
              </label>
              <Controller
                name="username"
                control={control2}
                rules={{ required: true }}
                render={({ field }) => (
                  <MaskedInput
                    mask={input ? "+998(00) 000-00-00" : ""}
                    onKeyDown={() => setInput(true)}
                    className="formDiv4-input4"
                    {...field}
                  />
                )}
              />
              {errors2.username && (
                <span className="error-message formDiv4-text">
                  Raqamingizni kiriting
                </span>
              )}
            </div>
            <div className="formDiv5">
              <label htmlFor="password" className="formDiv5-label">
                Parolni o’ylab toping
              </label>
              <input
                id="password"
                type={show ? "password" : "text"}
                className="formDiv5-input5"
                {...register2("password", { required: true })}
              />
              <div className="formDiv5-eyes">
                {show ? (
                  <div onClick={() => setShow(false)}>
                    <EyeHidden />
                  </div>
                ) : (
                  <div onClick={() => setShow(true)}>
                    <EyeShow />
                  </div>
                )}
              </div>
            </div>
            <p className="endText">
              “Ro’yxatdan o’tish” tugmasini bosgan holda, Siz <br />
              <span className="endText-span">
                Foydalanish shartlarini qabul qilgan xisoblanasiz.
              </span>
            </p>
            <div className="endBtn" onClick={handleSubmit2(registration)}>
              <Button title={"Ro’yxatdan o’tish"} />
            </div>
          </form>
        </section>
      )}
    </section>
  );
};

export default Login;
