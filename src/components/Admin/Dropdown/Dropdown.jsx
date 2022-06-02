import React, { useState } from "react";
import styles from "./Dropdown.module.scss";
const Dropdown = ({ title, dropdownItems}) => {
  const [open, setOpen] = useState(false);
  return (
    <div >
      <div className={styles.title} onMouseDown={()=> setOpen(true)}>{title}</div>
      {open ? (
        <div className={styles.drop}>
          <section className={styles.container} onMouseLeave={()=> setOpen(false)}>
            {dropdownItems.map((item, index) => (
             <a href={item.path}>
                <div
                key={index}
                className={styles.dropdown}
                onClick={()=> setOpen(false)}
              >
                <p>{item.label}</p>
              </div>
             </a>
            ))}
          </section>
        </div>
      ):null}
    </div>
  );
};

export default Dropdown;
