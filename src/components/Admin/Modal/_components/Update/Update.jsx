import React, { useEffect, useState } from "react";
import styles from "./Update.module.scss";
import Button from "../../../Buttons/Button";

import { useForm } from "react-hook-form";

import { ReactComponent as NoAvatar } from "../../../../../icons/NoAvatar.svg";
import { ReactComponent as Optinal } from "../../../../../icons/Optinal.svg";
import { ReactComponent as EyeShow } from "../../../../../icons/EyeShow.svg";
import { ReactComponent as EyeHidden } from "../../../../../icons/EyeHidden.svg";
import { getCurrentUser } from "../../../../../Servis/auth-service";
import { putUserMe } from "../../../../../Servis/user-service";

const EditUpdate = ({ setOpen }) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    putUserMe(data);
    setShow(true);
    window.location.reload(false);
  };

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <>
      {user != null && (
        <div className={styles.EditUpdate}>
          <div className={styles.Account}>
            <p className={styles.Account_title}>My account</p>
            <div className={styles.Account_avatar}>
              <div className="bg-[#EBEBEB] rounded-full w-[84px] h-[84px] flex justify-center items-center">
                <NoAvatar />
                <span className="absolute bottom-0 right-0 cursor-pointer">
                  <Optinal />
                </span>
              </div>
            </div>
              <p className="text-xs pt-4">Fotosurat yuklang (optinal)</p>
          
          </div>
          <form className={styles.form} onSubmit={handleSubmit()}>
            <div className={styles.form_inputFirst} >
              <p>Foydalanuvchi nomi</p>
              <input
                type="text"
                {...register("first_name", {
                  required: true,
                  value: user.first_name,
                })}
              />
            </div>
            <div className={styles.form_inputFirst}>
              <p>Telefon raqami</p>
              <input
                type="number"
                {...register("username", {
                  required: true,
                  value: user.username,
                })}
              />
            </div>
            <div className={styles.form_inputFirst}>
              <p>Elektron pochta (optinal)</p>
              <input
                type="email"
                {...register("email", { required: true, value: user.email })}
              />
            </div>
            <div
              className={`${styles.form_inputFirst} ${styles.form_inputPosition}`}
            >
              <p>Parolni o’ylab toping</p>
              <input
                type={show ? "text" : "password"}
                // {...register("password", {
                //   required: true,
                //   value: user.password,
                // })}
              />
              {show ? (
                <span onClick={() => setShow(false)}>
                  <EyeShow />
                </span>
              ) : (
                <span onClick={() => setShow(true)}>
                  <EyeHidden />
                </span>
              )}
            </div>
            <div className={styles.form_btn} onClick={handleSubmit(onSubmit)}>
              <Button title={"Update Profile"} />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditUpdate;
