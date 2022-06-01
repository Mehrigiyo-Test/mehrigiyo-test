import React from "react";
import Supplier from "../../../../icons/Supplier.svg";
import styles from "./Delivery.module.scss";

function Delivery() {
  return (
    <div className={styles.container}>
      <div className={styles.caruselBox}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img src={Supplier} alt="" />
      <p>Yetkazib berish uchun chiqdi</p>
    </div>
  );
}

export default Delivery;
