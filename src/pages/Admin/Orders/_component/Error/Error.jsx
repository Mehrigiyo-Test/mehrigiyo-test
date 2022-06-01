import React from "react";
import styled from "./Error.module.scss";
import { ReactComponent as Cancel } from "../../../../icons/Cancel.svg";

function Error() {
  return (
    <div className={styled.container}>
      <div className={styled.img}>
        <Cancel />
      </div>
      <p>Bekor qilindi</p>
    </div>
  );
}

export default Error;
