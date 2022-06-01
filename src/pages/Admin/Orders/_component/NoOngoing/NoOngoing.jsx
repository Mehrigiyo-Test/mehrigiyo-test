import React from "react";
import styles from "./NoOngoing.module.scss";
import Ongoing from "../../../../../images/Admin/NoOngoing.png";

function NoOngoing() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.noOngoingImg}>
          <img src={Ongoing} alt="ma'lumot yo'q" />
        </div>
        <div className={styles.noOngoingText}>
          <h4>No finished</h4>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
    </section>
  );
}

export default NoOngoing;
