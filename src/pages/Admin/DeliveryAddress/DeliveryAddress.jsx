import React, { useState } from "react";
import Inputradio from "../../../components/Admin/InputRadio/InputRadio";
import Title from "../../../components/Admin/Title/Title";
import "./DeliveryAddress.scss";
import AddIcon from "../../../icons/Add.svg";
import HomeImg from "../../../images/Admin/Home.png";
import SmallArrow from "../../../icons/SmallArrow.svg";
import Modal from "../../../components/Admin/Modal/Modal";
import AddAddress from "../../../components/Admin/Modal/_components/AddAddress/AddAddress";

const DeliveryAddress = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="delivery">
      <Title
        title={"Delivery Address"}
        subtitle={"Bugun bemorlarimizga xizmat qilish uchun ajoyib kun."}
        edit={"Edit"}
      />
    

      <div className="input-radio">
        <Inputradio
          title={"Uy"}
          subtitle={"Rasulov street, 407"}
          icon={SmallArrow}
        />
        <Inputradio
          title={"Ish"}
          subtitle={"Muqimiy street, 166"}
          icon={SmallArrow}
        />
      </div>

      <div className="add-address" onClick={()=> setOpen(true)}>
        <img src={AddIcon} alt="add-icon" />
        <p className="add-address__text">Manzil qo’shish</p>
      </div>

      <div>
        <img className="home-img" src={HomeImg} alt="homeImg" />
      </div>

      { open && <Modal children={<AddAddress setOpen={setOpen} />} prop={setOpen} />}
    </div>
  );
};
export default DeliveryAddress;
