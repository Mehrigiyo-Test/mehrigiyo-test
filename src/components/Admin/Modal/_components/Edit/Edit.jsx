import React, { useEffect, useState } from "react";
import styles from "./Edit.module.scss";
import Button from "../../../Buttons/Button";
import { getCurrentUser } from "../../../../../Servis/auth-service";

const Edit = ({ setShow }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  // const arr = [
  //   {
  //     title: "Foydalanuvchi nomi",
  //     item: `${user.first_name} ${user.last_name}`,
  //   },
  //   {
  //     title: "Telefon raqami",
  //     item: `+${user.username}`,
  //   },
  //   {
  //     title: "Elektron pochta (optinal)",
  //     item: user.email,
  //   },
  // ];

  return (
    <>
      {user !== null && (
        <section className={styles.container}>
          <h4>My account</h4>
          <div className={styles.img}>
            {user.avatar != null ? (
              <img src={user.avatar} alt="user" />
            ) : (
              <span className={styles.userWithoutAvatar}>
                {user.first_name[0] + user.last_name[0]}
              </span>
            )}
          </div>
          <div className={styles.title}>
            <>
              <div>
                <h6>Foydalanuvchi nomi</h6>
                <p>{`${user.first_name} ${user.last_name}`}</p>
              </div>
              <div>
                <h6>Telefon raqami</h6>
                <p>{user.username} </p>
              </div>
              <div>
                <h6>Elektron pochta (optinal)</h6>
                <p>{user.email}</p>
              </div>
            </>
          </div>
          <div onClick={() => setShow("update")}>
            <Button title={"Edit"} />
          </div>
        </section>
      )}
    </>
  );
};

export default Edit;
