import React from "react";
import styles from "./NoFinishid.module.scss";
import Nofinished from "../../../../images/NoFinished.png";

function NoFinishid() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.noOngoingImg}>
          <img src={Nofinished} alt="ma'lumot yo'q" />
        </div>
        <div className={styles.noOngoingText}>
          <h4>No ongoing </h4>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
    </section>
  );
}

export default NoFinishid;
