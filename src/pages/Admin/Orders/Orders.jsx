import React, { useState } from "react";
import Title from "../../../components/Admin/Title/Title";
import styles from "./Orders.module.scss";
import Delivery from "./_component/Delivery/Delivery";
import Error from "./_component/Error/Error";
import OrderCard from "./_component/OrderCard/OrderCard";
import Success from "./_component/Succsess/Success";
import GlobalChangableBtns from "../../../components/Admin/GlobalChangableBtns/GlobalChangableBtns";
import NoOngoing from "./_component/NoOngoing/NoOngoing";
import NoFinishid from "./_component/NoFinishid/NoFinishid";

const Orders = () => {
  const [click, setClick] = useState();

  const info = [{}];

  return (
    <section className={styles.container}>
      <Title
        title={"Order"}
        subtitle={"Bugun bemorlarimizga xizmat qilish uchun ajoyib kun."}
      />
      <div className={styles.btnsWrapper}>
        <GlobalChangableBtns
          textBtn1={"Ongoing"}
          textBtn2={"Finished "}
          click={click}
          setClick={setClick}
        />
      </div>
      {info.length > 0 ? (
        <div className={styles.informationContainer}>
          {click ? (
            <div className={styles.deliveryBox}>
              <div className={styles.deliveryBoxOne}>
                <div className={styles.text}>
                  <p className={styles.text}>Yesterday</p>
                </div>
                <div className={styles.threeBox}>
                  <OrderCard background={"#F28B74"} children={<Error />} />
                  <OrderCard background={"#53B175"} children={<Success />} />
                  <OrderCard background={"#F28B74"} children={<Error />} />
                </div>
              </div>
              <p className={styles.text}>January 24, Monday</p>
              <OrderCard background={"#53B175"} children={<Success />} />
            </div>
          ) : (
            <div className={styles.bigBox}>
              <OrderCard background={"#53B175"} children={<Delivery />} />
            </div>
          )}
        </div>
      ) : (
        <div className={styles.nothing}>
          {click ? (
            <NoOngoing />
          ) : (
          <NoFinishid />
          )}
        </div>
      )}
    </section>
  );
};
export default Orders;
