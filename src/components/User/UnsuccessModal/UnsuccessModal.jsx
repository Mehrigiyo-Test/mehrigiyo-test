import React from 'react'
import UnsuccessIcon from "../../../images/User/unsuccess-icon.svg"
import "./UnsuccessModal.scss"

const UnsuccessModal = ({ handlePayment }) => {
  return (
    <div className="unsuccess-modal">
      <img src={UnsuccessIcon} alt="" />
      <h3>To’lov qabul qilinmadi</h3>
      <span>Nimadir noto‘g‘ri ketdi.</span>

      <div className="unsuccess-buttons">
        <button onClick={() => handlePayment(false)}>Chiqish</button>
        <button>Please Try Again</button>
      </div>
    </div>
  );
};

export default UnsuccessModal