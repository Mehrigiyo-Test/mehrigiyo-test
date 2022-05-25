import MapIcon from "../../images/map-marker.svg";
import MoneyIcon from "../../images/money_icon.svg";
import CreditCardIcon from "../../images/credit-card-icon.svg";
import PlusIcon from "../../images/akar-icon-plusl.svg";

import "./OrderModal.scss";

const OrderModal = ({ handleModal, handlePayment }) => {
  return (
    <div className="OrderModal">
      <h3>Buyurtma</h3>

      <div className="address">
        <p>Yetkazib berish manzili</p>
        <div className="address__input">
          <input type="text" placeholder="Manzilingizni kiriting..." />
          <img src={MapIcon} alt="" />
        </div>
      </div>

      <div className="type-of-payment">
        <p>To'lov turi</p>

        <div className="cash">
          <div className="checkbox checked"></div>
          <span>Naqd pul </span>
          <img src={MoneyIcon} alt="" />
        </div>

        <div className="card-payment">
          <div className="checkbox"></div>
          <span>8600 53** **** 8093</span>
          <img src={CreditCardIcon} alt="" />
        </div>

        <div className="add-new-card">
          <img src={PlusIcon} alt="" />
          <span>Karta qo’shish</span>
        </div>
      </div>
      <div className="card-buttons">
        <button onClick={() => handleModal(false)}>Chiqish</button>
        <button
          onClick={() => {
            handlePayment(true);
            handleModal(false);
          }}
        >
          To’lov qilish
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
