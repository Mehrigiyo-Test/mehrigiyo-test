import styles from "./AddCard.module.scss";
import Button from "../../../Buttons/Button";
import React, { useState } from "react";
import { MaskedInput } from "antd-mask-input";
function AddCard({ setOpen }) {
  const [value, setValue] = useState("");
  let valuee = value.slice(0, 4);

  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <h5>Karta qo’shish</h5>
        <form>
          <MaskedInput
            mask={"0000 0000 0000 0000"}
            placeholder="Card number"
            onChange={(e) => setValue(e.target.value)}
          />

          <div className={styles.inputRow}>
            <MaskedInput placeholder="Expires" mask={"00/00"} />
            <div className={styles.inputNone}>
              {valuee !== "8600" ? (
                <MaskedInput placeholder="CVV" mask={"000"} />
              ) : null}
            </div>
          </div>
        </form>
        <div className={styles.btnInput} onClick={() => setOpen(false)}>
          <Button title={"Add card"} />
        </div>
      </div>
    </div>
  );
}

export default AddCard;
