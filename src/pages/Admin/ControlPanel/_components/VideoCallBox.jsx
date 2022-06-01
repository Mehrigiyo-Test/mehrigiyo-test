import React from "react";
import styles from "./Video.module.scss";

import { ReactComponent as Clock } from "../../../../icons/Clock.svg";
import { ReactComponent as Camera } from "../../../../icons/Camera.svg";
const VideoCallBox = ({ name, surname, profession, img }) => {
  return (
    <section className={styles.container}>
      <div className={styles.doctor}>
        <div className={styles.img}>
          <img src={img} alt="" />
        </div>
        <div>
          <h4>
            {name} {surname}
          </h4>
          <p>{profession}</p>
        </div>
      </div>

      <div className={styles.time}>
        <div className={styles.timeBox}>
          <div>
            <Clock />
            <span>
              <span>30/</span>
              <span>03/</span>
              <span>2022</span>
            </span>
          </div>
          <h4>-46:30</h4>
        </div>
      </div>
      <div className={styles.camera}>
        <Camera />
      </div>
    </section>
  );
};

export default VideoCallBox;
