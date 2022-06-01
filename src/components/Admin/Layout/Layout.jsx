import React, { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import styles from "./Layout.module.scss";
import Navigate from "../../User/nav1/navigate";
import Navigate2 from "../../User/nav2/navigate2";
const LayoutAdmin = ({ children }) => {
  return (
    <>
      <div className={styles.layoutContainer}>
        <Navigate />
        <Navigate2 />
        <div className={styles.wrapper}>
          <div>
            <SideBar />
          </div>
          <div className={styles.child}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
