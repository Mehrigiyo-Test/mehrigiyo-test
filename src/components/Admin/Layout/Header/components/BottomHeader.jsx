import React from "react";
import style from "./../Header.module.scss";

import { ReactComponent as Logo } from "./../../../../icons/Header/Logo.svg";
import { ReactComponent as Search } from "./../../../../icons/Header/Search.svg";
import { ReactComponent as Cabinet } from "./../../../../icons/Header/Cabinet.svg";
import { ReactComponent as Heart } from "./../../../../icons/Header/Heart.svg";
import { ReactComponent as Cart } from "./../../../../icons/Header/Cart.svg";
import {
  onlineDoctors,
  products,
  news,
  helps,
} from "./../../../../constants/header";
import Dropdown from "../../../Dropdown/Dropdown";
import {port} from '../../../../constants/port'

const BottomHeader = () => {
  const navElements = [
    { title: `Bosh sahifa` , link: `http://localhost:${port}/` },
    { title: `Onlayn shifokorlar`, dropdownItems: onlineDoctors },
    { title: `Mahsulotlar`, dropdownItems: products },
    { title: `Biz haqimizda`,link: `http://localhost:${port}/aboutUs` },
    { title: `Yangiliklar`, dropdownItems: news },
    { title: `Yordam`, dropdownItems: helps },
  ];
  const actions = [
    { icon: <Search />, path: `#` },
    { icon: <Cabinet />, path: `#` },
    { icon: <Heart />, path: `#` },
    { icon: <Cart />, path: `#` },
  ];
  return (
    <section className={style.headerBottomContainer}>
      <div className={style.actions}>
        <div>
          <Logo />
        </div>
        <div className={style.bottomTitle}>
          {navElements.map((item, index) =>
            item.dropdownItems ? (
              <div key={index}>
                <Dropdown
                  title={item.title}
                  dropdownItems={item.dropdownItems}
                />
              </div>
            ) : (
              <div key={index}>
                <a href={item.link}>{item.title}</a>
              </div>
            )
          )}
        </div>
      </div>
      <div className={style.actions}>
        {actions.map((item, index) => (
          <div key={index}>
            <a href={item.path}>{item.icon}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BottomHeader;
