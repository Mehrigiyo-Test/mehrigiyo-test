import React, { useState } from "react";
import "../../../../_global.scss";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ReactComponent as NoAvatar } from "../../../../icons/NoAvatar.svg";
import { ReactComponent as Optinal } from "../../../../icons/Optinal.svg";
import { ReactComponent as EyeHidden } from "../../../../icons/EyeHidden.svg";
import { ReactComponent as EyeShow } from "../../../../icons/EyeShow.svg";
import Button from "../../../Buttons/Button";
import { MaskedInput } from "antd-mask-input";
import { setCurrentUser, setToken } from "../../../../services/auth-service";
import requestApi from "../../../../services/api/request";

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

  const navigate = useNavigate();

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
            navigate("/");
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
    data.first_name = data.first_name.charAt(0).toUpperCase() + data.first_name.slice(1);
    data.last_name = data.last_name.charAt(0).toUpperCase() + data.last_name.slice(1);

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
      <div className="pt-[70px] px-25">
        <div className="bg-[#F8F8F8] flex p-[5px] gap-[30px] rounded-[100px] items-center mx-[60px]">
          <span
            className={
              tab
                ? "text-[#53B175] font-semibold relative z-20 px-12 py-1 "
                : "text-[#B0B7C3] cursor-pointer relative z-20  px-[53px]"
            }
            onClick={() => setTab(true)}
          >
            Kirish
          </span>
          <span
            className={
              "bg-white absolute h-8 rounded-[100px] shadow-lg z-10 duration-500 w-32"
            }
            style={
              tab
                ? { transform: "translateX(0)", width: "140px" }
                : { transform: "translateX(145px)", width: "190px" }
            }
          ></span>
          <span
            className={
              tab
                ? "text-[#B0B7C3] px-7.5 pr-[20px] cursor-pointer relative z-20  "
                : "text-[#53B175] font-semibold  rounded-[100px] px-7.5  py-1 relative z-20"
            }
            onClick={() => setTab(false)}
          >
            Ro'yxatdan o'tish
          </span>
        </div>
      </div>

      {tab ? (
        <form action="" className="pt-12 px-[86px]" onSubmit={handleSubmit}>
          <div className="flex flex-col relative">
            <label htmlFor="number" className="text-sm text-gray4 mb-1.5">
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
                  className="border-b bg-transparent outline-none pb-3 pl-7 relative  focus:border-[#53B175]"
                  {...field}
                />
                
              )}
            />
          
            <div className="absolute top-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Uzbekistan.png/1200px-Flag_of_Uzbekistan.png"
                alt=""
                width={25}
                height={25}
              />
            </div>
            {errors.username && (
              <div>
                <div className="error-message absolute bottom-[-20px]">
                  Raqamingizni kiriting
                </div>
                <div className="absolute bottom-1 right-2 text-[red] rounded-full animat">
                  !
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col py-6 relative">
            <label htmlFor="password" className="text-sm text-gray4 mb-1.5">
              Parol
            </label>
            <input
              id="password"
              type={show ? "password" : "text"}
              className="border-b  pr-7  outline-none pb-3 focus:border-[#53B175]"
              {...register("password", { required: true, minLength: 4 })}
            />
            {errors.password && (
              <span className="error-message absolute bottom-[1px]">
                Parolingizni kiriting
              </span>
            )}

            <div className="absolute right-0 top-[50%] cursor-pointer">
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
          <p className="text-xs text-gray4 text-right cursor-pointer">
            Parolni unutdingizmi?
          </p>
          <div className="py-12" onClick={handleSubmit(onSubmit)}>
            <Button title={"Tizimga kirish"} />
          </div>
        </form>
      ) : (
        <section>
          <div className="pt-10 flex flex-col items-center">
            <div className="bg-[#EBEBEB] relative rounded-full w-[84px] h-[84px] flex justify-center items-center">
              <NoAvatar />
              <span className="absolute bottom-0 right-0 cursor-pointer">
                <Optinal />
              </span>
            </div>
            <p className="text-xs pt-4">Fotosurat yuklang (optinal)</p>
          </div>
          <form action="" className="pt-12 px-[86px]" onSubmit={handleSubmit2}>
            <div className="flex flex-col pb-6 relative">
              <input
                type="text"
                placeholder="Ismingiz"
                className="border-b bg-transparent outline-none pb-3 focus:border-primaryGreen capitalize"
                {...register2("first_name", { required: true })}
              />
              {errors2.first_name && (
                <span className="error-message absolute top-[5px] right-0">
                  Ismingizni kiriting
                </span>
              )}
            </div>
            <div className="flex flex-col pb-6 relative">
              <input
                type="text"
                placeholder="Familiyangiz"
                className="border-b bg-transparent outline-none pb-3 focus:border-primaryGreen capitalize"
                {...register2("last_name", { required: true })}
              />
              {errors2.last_name && (
                <span className="error-message absolute top-[5px] right-0">
                  Familiyangizni kiriting
                </span>
              )}
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="email" className="text-sm text-gray4 mb-1.5">
                Elektron pochta (optinal)
              </label>
              <input
                id="email"
                type="email"
                className="border-b bg-transparent outline-none pb-3 focus:border-primaryGreen"
                {...register2("email", {
                  required: true,
                  pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}",
                })}
              />
              {errors2.email && (
                <span className="error-message absolute top-[30px] right-0">
                  Pochtangizni kiriting
                </span>
              )}
            </div>
            <div className="flex flex-col pt-5 relative">
              <label htmlFor="email" className="text-sm text-gray4 mb-1.5">
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
                    className="border-b bg-transparent outline-none pb-3 focus:border-primaryGreen"
                    {...field}
                  />
                )}
              />
              {errors2.username && (
                <span className="error-message absolute top-[50px] right-0">
                  Raqamingizni kiriting
                </span>
              )}
            </div>
            <div className="flex flex-col py-6 relative">
              <label htmlFor="password" className="text-sm text-gray4 mb-1.5">
                Parolni o’ylab toping
              </label>
              <input
                id="password"
                type={show ? "password" : "text"}
                className="border-b bg-transparent pr-7 tracking-widest outline-none pb-3 focus:border-primaryGreen"
                {...register2("password", { required: true })}
              />
              <div className="absolute right-0 top-[50%] cursor-pointer">
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
            <p className="text-xs text-gray3 text-center">
              “Ro’yxatdan o’tish” tugmasini bosgan holda, Siz <br />
              <span className="text-[#53B175]">
                Foydalanish shartlarini qabul qilgan xisoblanasiz.
              </span>
            </p>
            <div className="pb-12 pt-5" onClick={handleSubmit2(registration)}>
              <Button title={"Ro’yxatdan o’tish"} />
            </div>
          </form>
        </section>
      )}
    </section>
  );
};

export default Login;
