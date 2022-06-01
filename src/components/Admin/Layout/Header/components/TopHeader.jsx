import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./../Header.module.scss";
import { ReactComponent as UzbFlag } from "./../../../../../icons/Header/UzbFlag.svg";
import { ReactComponent as Arrow } from "./../../../../../icons/Header/Arrow.svg";
import { ReactComponent as Location } from "./../../../../../icons/Header/Location.svg";
import { getCurrentUser } from "../../../../../Servis/auth-service";

const TopHeader = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const titles = [
    { text: `Mahsulotlar katalogi`, link: `#` },
    { text: `Foto-lavhalar`, link: `#` },
    { text: `Yetkazib berish va to'lash`, link: `#` },
    { text: `Aksiya`, link: `#`, color: `#AB7A19` },
    { text: `Yangi`, link: `#`, color: `#53B175` },
  ];
  return (
    <>
      {user != null && (
        <section className={style.headerTopContainer}>
          <div className={style.title}>
            {titles.map(({ text, link, color }) => (
              <div key={text}>
                <Link
                  to={link}
                  style={color ? { color } : { color: `#505050` }}
                >
                  {text}
                </Link>
              </div>
            ))}
          </div>
          <div className={style.about}>
            <div className={style.dropdown}>
              <UzbFlag />
              <span>
                <Arrow />
              </span>
            </div>
            <div className={style.dropdown}>
              <p>Toshkent shahar</p>
              <span>
                <Location />
              </span>
            </div>
            <div className={style.user}>
              <span className={style.userAvatar}>
                {user.avatar != null ? (
                  <img src={user.avatar} alt="user" />
                ) : (
                  <span className={style.userWithoutAvatar}>
                    {user.first_name[0] + user.last_name[0]}
                  </span>
                )}
              </span>
              <div style={{ display: "flex" }}>
                <p>{user.first_name[0]}.</p>
                <p>{user.last_name}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TopHeader;
