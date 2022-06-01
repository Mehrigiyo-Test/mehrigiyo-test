import React, { useState } from "react";
import styles from "./Consultation.module.scss";

import Title from "../../components/Title/Title";
import GlobalChangableBtns from "../../components/GlobalChangableBtns/GlobalChangableBtns";

import img from "../../images/NoUpcoming.png";
import leaf from "../../images/Leafs.png";
import doctor1 from "../../images/Doctor1.png";
import doctor2 from "../../images/Doctor2.png";
import doctor3 from "../../images/Doctor3.png";
import doctor4 from "../../images/Doctor4.png";
import missedMessage from "../../icons/MissedMessage.svg";
import clock from "../../icons/Clock.svg";

const Consultation = () => {
  const data = [{}];
  const [click, setClick] = useState(false);
  return (
    <section className={`${styles.container}`}>
      <Title
        title={"Consultation"}
        subtitle={"Bugun bemorlarimizga xizmat qilish uchun ajoyib kun."}
      />
      <div className={styles.btnsWrapper}>
        <GlobalChangableBtns
          textBtn1={"UPCOMING"}
          textBtn2={"PAST CONSULTATION"}
          click={click}
          setClick={setClick}
        />
      </div>
      {data.length > 0 ? (
        <div className={styles.filledBox}>
          {click ? (
            <div>
              <div
                className={`${styles.talkingDoctor} ${styles.talkingDoctor_margin}`}
              >
                <div
                  className={`${styles.avatarText} ${styles.talkingDoctor_padding}`}
                >
                  <div className={styles.avatar}>
                    <img src={doctor2} alt="avatar" />
                  </div>
                  <div className={styles.text}>
                    <p className={styles.name}>Sanjar Tohirov</p>
                    <p className={styles.job}>Nevropatolog </p>
                    <span className={styles.missedMessages}>
                      Missed video call{" "}
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.66667 5L4.44552 5.20272L4.64894 5.42463L4.87015 5.22044L4.66667 5ZM9.29976 1.01199C9.30638 0.846437 9.17754 0.706862 9.01199 0.70024L6.31415 0.592326C6.14859 0.585704 6.00902 0.714543 6.0024 0.880096C5.99577 1.04565 6.12461 1.18522 6.29017 1.19185L8.68825 1.28777L8.59233 3.68585C8.5857 3.85141 8.71454 3.99098 8.8801 3.9976C9.04565 4.00422 9.18522 3.87539 9.19185 3.70983L9.29976 1.01199ZM0.778854 1.20272L4.44552 5.20272L4.88781 4.79728L1.22115 0.797283L0.778854 1.20272ZM4.87015 5.22044L9.20348 1.22044L8.79652 0.779559L4.46318 4.77956L4.87015 5.22044Z"
                          fill="#F06E62"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.missed}>
                  <span className={styles.timeMessage}>12.12.2021</span>
                </div>
              </div>
              <div
                className={`${styles.talkingDoctor} ${styles.talkingDoctor_brdNone}`}
              >
                <div
                  className={`${styles.avatarText} ${styles.talkingDoctor_padding}`}
                >
                  <div className={styles.avatar}>
                    <img src={doctor3} alt="avatar" />
                  </div>
                  <div className={styles.text}>
                    <p className={styles.name}>Sanjar Tohirov</p>
                    <p className={styles.job}>Nevropatolog </p>
                    <span className={styles.missedMessages}>
                      Missed video call{" "}
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.66667 5L4.44552 5.20272L4.64894 5.42463L4.87015 5.22044L4.66667 5ZM9.29976 1.01199C9.30638 0.846437 9.17754 0.706862 9.01199 0.70024L6.31415 0.592326C6.14859 0.585704 6.00902 0.714543 6.0024 0.880096C5.99577 1.04565 6.12461 1.18522 6.29017 1.19185L8.68825 1.28777L8.59233 3.68585C8.5857 3.85141 8.71454 3.99098 8.8801 3.9976C9.04565 4.00422 9.18522 3.87539 9.19185 3.70983L9.29976 1.01199ZM0.778854 1.20272L4.44552 5.20272L4.88781 4.79728L1.22115 0.797283L0.778854 1.20272ZM4.87015 5.22044L9.20348 1.22044L8.79652 0.779559L4.46318 4.77956L4.87015 5.22044Z"
                          fill="#F06E62"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.missed}>
                  <span className={styles.timeMessage}>18.12.2021</span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <div
                className={`${styles.talkingDoctor} ${styles.talkingDoctor_opacity} ${styles.talkingDoctor_brdNone}`}
              >
                <div className={styles.avatarText}>
                  <div className={styles.avatar}>
                    <img src={doctor1} alt="avatar" />
                  </div>
                  <div className={styles.text}>
                    <p className={styles.name}>Gavhar Sobirova</p>
                    <p className={styles.job}>Nevropatolog </p>
                  </div>
                </div>
                <div className={styles.missed}>
                  <span className={styles.talkingTime}>-46:30</span>
                  <div className={styles.littleWrapper}>
                    <span>
                      <img src={clock} alt="clock" />
                    </span>
                    <span className={styles.talkingData}>
                      19-yanvar, <b>16:30</b>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.talkingDoctor} ${styles.talkingDoctor_margin}`}
              >
                <div className={styles.avatarText}>
                  <div className={styles.avatar}>
                    <img src={doctor3} alt="avatar" />
                  </div>
                  <div className={styles.text}>
                    <p className={styles.name}>Sanjar Tohirov</p>
                    <p className={styles.job}>Nevropatolog </p>
                    <span className={styles.missedMessages}>
                      Missed video call{" "}
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.66667 5L4.44552 5.20272L4.64894 5.42463L4.87015 5.22044L4.66667 5ZM9.29976 1.01199C9.30638 0.846437 9.17754 0.706862 9.01199 0.70024L6.31415 0.592326C6.14859 0.585704 6.00902 0.714543 6.0024 0.880096C5.99577 1.04565 6.12461 1.18522 6.29017 1.19185L8.68825 1.28777L8.59233 3.68585C8.5857 3.85141 8.71454 3.99098 8.8801 3.9976C9.04565 4.00422 9.18522 3.87539 9.19185 3.70983L9.29976 1.01199ZM0.778854 1.20272L4.44552 5.20272L4.88781 4.79728L1.22115 0.797283L0.778854 1.20272ZM4.87015 5.22044L9.20348 1.22044L8.79652 0.779559L4.46318 4.77956L4.87015 5.22044Z"
                          fill="#F06E62"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.missed}>
                  <span className={styles.minute_ago}>2 minutes ago</span>
                  <span className={styles.missed_message}>
                    <img src={missedMessage} alt="" />
                  </span>
                </div>
              </div>
              <div
                className={`${styles.talkingDoctor} ${styles.talkingDoctor_brdNone}`}
              >
                <div className={styles.avatarText}>
                  <div className={styles.avatar}>
                    <img src={doctor4} alt="avatar" />
                  </div>
                  <div className={styles.text}>
                    <p className={styles.name}>Sanjar Tohirov</p>
                    <p className={styles.job}>Nevropatolog </p>
                    <span className={styles.missedMessages}>
                      Missed video call{" "}
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.66667 5L4.44552 5.20272L4.64894 5.42463L4.87015 5.22044L4.66667 5ZM9.29976 1.01199C9.30638 0.846437 9.17754 0.706862 9.01199 0.70024L6.31415 0.592326C6.14859 0.585704 6.00902 0.714543 6.0024 0.880096C5.99577 1.04565 6.12461 1.18522 6.29017 1.19185L8.68825 1.28777L8.59233 3.68585C8.5857 3.85141 8.71454 3.99098 8.8801 3.9976C9.04565 4.00422 9.18522 3.87539 9.19185 3.70983L9.29976 1.01199ZM0.778854 1.20272L4.44552 5.20272L4.88781 4.79728L1.22115 0.797283L0.778854 1.20272ZM4.87015 5.22044L9.20348 1.22044L8.79652 0.779559L4.46318 4.77956L4.87015 5.22044Z"
                          fill="#F06E62"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className={styles.missed}>
                  <span className={styles.timeMessage}>16:45</span>
                </div>
              </div>{" "}
            </div>
          )}

          <div className={styles.imgLeaf}>
            <img src={leaf} alt="barg" />
          </div>
        </div>
      ) : (
        <div className={styles.emptyBox}>
          <div className={styles.imgNoUpcoming}>
            <img src={img} alt="No upcoming consultation {IMG}" />
          </div>
          <div className={styles.emptyText}>
            <p className={styles.title}>No upcoming consultation</p>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className={styles.emptyBtn}>
              Let’s find your doctor 😷
            </button>
          </div>
        </div>
      )}
      {/* {click === 'upcoming' ? <div>1</div> : click === 'qwe' ? <div>2</div> : null} */}
    </section>
  );
};
export default Consultation;
