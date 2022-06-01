import React from "react";
import styles from "./Last.module.scss";

import { ReactComponent as Arrow } from "../../../../icons/RightArrow.svg";
const LastNoticeBox = ({ title, subtitle, bgColor, color }) => {
  return (
    <section className={styles.container} style={{ backgroundColor: bgColor }}>
      <div>
        <h4 style={{ color: color }}>{title}</h4>
        <p style={{ color: color }}>{subtitle}</p>
      </div>
      <div className={styles.arrow}>
        <Arrow />
      </div>
    </section>
  );
};

export default LastNoticeBox;
