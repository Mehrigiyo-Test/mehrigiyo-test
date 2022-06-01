import React from "react";
import BottomHeader from "./components/BottomHeader";
import TopHeader from "./components/TopHeader";
import styles from "./Header.module.scss"
const Header = () => {
  return (
    <div className={styles.container} >
      <TopHeader />
      <BottomHeader />
    </div>
  );
};

export default Header;
