import React from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as Exit } from "../../icons/Exit.svg";

const Modal = ({ children, prop,bolean }) => {
  return (
    <div className={styles.bgContainer}>
      <section className={styles.wrapper}>
        <div className={styles.modal}>
          <span className={styles.exit} onClick={() => prop(false)} hidden={bolean}>
            <Exit />
          </span>
          {children}
        </div>
      </section>
    </div>
  );
};

export default Modal;
