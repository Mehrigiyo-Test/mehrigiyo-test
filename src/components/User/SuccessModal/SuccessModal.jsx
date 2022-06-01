import React from 'react'
import SuccessIcon from "../../../images/User/success-icon.svg"

import "./SuccessModal.scss"
const SuccessModal = ({handlePayment}) => {
  return (
    <div className="success-modal">
      <img src={SuccessIcon} alt="" />
      <h3>Buyurtmangiz qabul qilindi</h3>
      <span>Lorem ipsum dolor sit amet, consectetur</span>

      <div className="success-buttons">
        <button onClick={() => handlePayment(false)}>Chiqish</button>
        <button>Buyurtmalarga o’tish</button>
      </div>
    </div>
  );
}

export default SuccessModal