import React from "react";
import styles from "./ControlPanel.module.scss";

import Title from "../../components/Title/Title";
import VideoCallBox from "./_components/VideoCallBox";
import LastNoticeBox from "./_components/LastNoticeBox";
import TableCard from "./_components/TableCard";

import { doctors } from "../../constants/doctors";
import { ReactComponent as BoldArrow } from "../../icons/BoldArrow.svg";
import leafs from "../../images/Leafs.png";
import NoUpcoming from "../../images/NoUpcoming.png";

const ControlPanel = () => {
  const arr = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ...",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ...",
    },
  ];
  return (
    <>
      <section className={styles.container}>
        <div>
          <Title
            title={"Umumiy koʻrinish"}
            subtitle={"Bugun bemorlarimizga xizmat qilish uchun ajoyib kun."}
          />
        </div>
        <div className={styles.wrapper}>
          <div>
            <span className={styles.nextTable}>
              <h4>Kelgusi jadval</h4>
              <span>
                <p>Hammasi</p>
                <BoldArrow />
              </span>
            </span>
            <section className={styles.box}>
              <div>
                {doctors
                  .filter((item) => item.name === "Gavhar")
                  .map((item, index) => (
                    <VideoCallBox
                      name={item.name}
                      surname={item.surname}
                      img={item.img}
                      profession={item.profession}
                      key={index}
                    />
                  ))}
              </div>
              <div>
                <LastNoticeBox
                  title={"Bepul maslahat olish"}
                  subtitle={"Savolaringizga javob berishadi."}
                  bgColor={"#F5F0EC"}
                  color={"#C88D5E"}
                />
              </div>
              <br />
              <hr style={{ opacity: "0.3" }} />
            </section>
            <span className={styles.nextTable}>
              <h4>Oxirgi bildirishnoma</h4>
              <span>
                <p>Hammasi</p>
                <BoldArrow />
              </span>
            </span>
            <span className={styles.date}>Today - 12:00</span>
            <div>
              {arr.map((item, index) => (
                <LastNoticeBox
                  title={item.title}
                  subtitle={item.subtitle}
                  key={index}
                />
              ))}
            </div>
            <span className={styles.date}>28/01/2022 - 12:00</span>
            <div>
              {arr.map((item, index) => (
                <LastNoticeBox
                  title={item.title}
                  subtitle={item.subtitle}
                  key={index}
                />
              ))}
            </div>
          </div>

          <div className={styles.importantTable}>
            <h4>Muhim jadval</h4>
            {doctors
              .filter((a) => a.name === "Bahrom")
              .map((item, index) => (
                <TableCard
                  name={item.name}
                  surname={item.surname}
                  profession={item.profession}
                  img={item.img}
                  key={index}
                />
              ))}
            <img
              src={leafs}
              alt=""
              width={225}
              height={305}
              className={styles.leafs}
            />
            <section className={styles.noData}>
              <img
                src={NoUpcoming}
                alt=""
                className={styles.noUpcoming}
                width={130}
                height={130}
              />
              <div className={styles.titles}>
                <h4>No upcoming consultation</h4>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div className={styles.btn}>
                <p>Let’s find your doctor 😷</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
export default ControlPanel;
