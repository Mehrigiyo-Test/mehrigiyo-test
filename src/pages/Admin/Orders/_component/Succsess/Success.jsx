import React from "react";
import styled from "././Success.module.scss";
import { ReactComponent as Delivered } from "../../../../../icons/Delivered.svg";

function Success() {
  return (
    <div className={styled.container}>
      <div className={styled.img}>
        <Delivered />
      </div>
      <p>Yetkazib berildi</p>
    </div>
  );
}

export default Success;
