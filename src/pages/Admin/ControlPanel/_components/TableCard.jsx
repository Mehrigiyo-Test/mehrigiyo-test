import React from "react";
import styles from "./Table.module.scss";
import { ReactComponent as Add } from "../../../icons/AddTable.svg";
import bgTable from "../../../images/BgTable.png"
const TableCard = ({ name, surname, img, profession }) => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.doctor}>
          <span className={styles.img}>
            <img src={img} alt="" />
          </span>
          <span>
            <h5>
              {surname} {name}
            </h5>
            <p>Tashkent, Uzbekistan</p>
            <h6>⭐️ 4.5 (135 reviews)</h6>
          </span>
        </div>
        <div className={styles.add}>
          <Add />
        </div>
      </div>
      <div className={styles.profession}>
        <p>Mutaxassisligi</p>
        <h5>{profession}</h5>
      </div>
      <div className={styles.date}>
        <span>
          <p>Keyingi uchrashuv</p>
          <h5>28/03/2022</h5>
        </span>
        <span>
          <p>Time</p>
          <h5>09:00 - 10:00</h5>
        </span>
      </div>
      <div className={styles.button}>
        <h2>Qo'ng'iroqni boshlash vaqti:</h2>
        <h2 className={styles.time}>-12:00</h2>
      </div>
      <img src={bgTable} alt="" className={styles.bgImg}/>
    </section>
  );
};

export default TableCard;
