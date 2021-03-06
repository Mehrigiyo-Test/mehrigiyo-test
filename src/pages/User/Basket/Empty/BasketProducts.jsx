import React, { useState } from "react";
import BasketProduct from "../../../../components/User/BasketProduct/BasketProduct";
import OrderModal from "../../../../components/User/OrderModal/OrderModal";
import ArrowRight from "../../../../images/User/arrow-right.svg";
import Back1 from "../../../../images/User/BackgroundLeaves.png";
import Back2 from "../../../../images/User/Groupffff.png";
import Modal from "../../../../components/User/Modal/index";
import SuccessModal from "../../../../components/User/SuccessModal/SuccessModal";
import UnsuccessModal from "../../../../components/User/UnsuccessModal/UnsuccessModal";

export default function BasketProducts({ data }) {
  const [modal, setModal] = useState(false);
  const [payment, setPayment] = useState(false);
  const success = false;

  function handleClick() {
    setModal(true);
    setPayment(false);
  }
  return (
    <>
      <div className="products-quantity-history">
        <h3 className="products-quantity">
          Savatchada {data.length} ta mahsulot bor
        </h3>
        <button className="basket__history">
          <span>Buyurtmalar tarixi</span>
          <img src={ArrowRight} alt="" />
        </button>
      </div>

      <div className="delivery-box">
        <ul className="products-container">
          {data.map((item, index) => (
            <BasketProduct data={item} key={index} />
          ))}
        </ul>

        <div className="delivery-price">
          <div className="products-number">
            <p>Mahsulotlar ({data.length})</p>
            <p>182 000</p>
          </div>

          <div className="discount">
            <p>Chegirma</p>
            <p>0</p>
          </div>

          <div className="delivery">
            <p>Yetkazib berish</p>
            <p>0</p>
          </div>

          <div className="all-price">
            <p>Umumiy</p>
            <p>197 000 so’m</p>
          </div>

          <button className="payment" onClick={handleClick}>
            To’lovga o’tish
          </button>
          <button className="get-menu">Menyuga qaytish</button>
        </div>

        <div className="product-back">
          <img src={Back2} alt="" />
          <img src={Back1} alt="" />
        </div>
      </div>
      {modal && (
        <Modal>
          <OrderModal handleModal={setModal} handlePayment={setPayment} />
        </Modal>
      )}

      {payment && (
        <Modal>
          {success ? (
            <SuccessModal handlePayment={setPayment} />
          ) : (
            <UnsuccessModal handlePayment={setPayment} />
          )}
        </Modal>
      )}
    </>
  );
}
