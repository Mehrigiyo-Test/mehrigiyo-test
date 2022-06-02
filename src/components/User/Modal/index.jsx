import React from "react";
import "./Modal.scss";

const Modal = ({ children }) => {
  return (
    <>
      <div className="Modal">
        <div className="Modal-content">{children}</div>
      </div>
      <div className="ModalBg"></div>
    </>
  );
};

export default Modal;
