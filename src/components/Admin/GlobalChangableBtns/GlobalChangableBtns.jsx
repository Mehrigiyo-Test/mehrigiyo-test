import React from "react";
import styles from "./GlobalChangableBtns.module.scss";

const GlobalChangableBtns = ({ textBtn1, textBtn2, click, setClick }) => {
  return (
    <div className={styles.GlobalChangableBtns}>
      <button
        className={click ? `${styles.btn1}` : `${styles.active} `}
        onClick={()=> setClick(false)}
        // onClick={() => setClick('upcomig')}
      >
        {textBtn1}
      </button>
      <button
        className={click ? `${styles.active}` : `${styles.btn1} `}
        onClick={()=> setClick(true)}
        // onClick={() => setClick('qwe')}
      >
        {textBtn2}
      </button>
    </div>
  );
};

export default GlobalChangableBtns;
