import React, { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Layout.module.scss";
import Modal from "../Modal/Modal";
import Login from "../Modal/_components/Login/Login";
import { isLogin } from "../../services/auth-service";

const Layout = ({ children }) => {
  const [login, setIsLogin] = useState(null);
  const [open, setOpen] = useState(true);
  const [prog, setProg] = useState(true);
  useEffect(() => {
    setIsLogin(isLogin());
    setProg(false);
  }, []);

  return (
    <>
      {login != null && login && (
        <div className={styles.layoutContainer}>
          <Header />
          <div className={styles.wrapper}>
            <div>
              <SideBar />
            </div>
            <div className={styles.child}>{children}</div>
          </div>
        </div>
      )}
      {login != null && !login && (
        <div className={styles.progressWrapper}>
          <span className={styles.progress}>
            <CircularProgress size={100} color="inherit" />
          </span>
          {open && (
            <Modal children={<Login setOpen={setOpen} />} bolean={true} />
          )}
        </div>
      )}
      {prog && (
        <div className={styles.progressWrapper}>
          <span className={styles.progress}>
            <CircularProgress size={100} color="inherit" />
          </span>
        </div>
      )}{" "}
    </>
  );
};

export default Layout;
