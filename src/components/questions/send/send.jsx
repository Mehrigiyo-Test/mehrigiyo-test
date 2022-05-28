import React from "react";
import "./send.scss";
import animation from "../../../images/Contact_Animations.png";
import { IoMdSend } from 'react-icons/io';
import Dropdown from '../../Dropdown/Dropdown';



export default function Send({ top, img1, text, headtext, img2, img3, overflow }) {

  return (
    <div className="send-background" style={{ top: top, overflow }}>
      <div className="GlobalWrapper">
        <div className="helpDoctor" >
          {img1}
          <div className="textDoctor">
            {text}
            {headtext}
          </div>
          {img2}
        </div>



        <div className="send">
          <div className="send-img">
            <img src={animation} alt="" />
          </div>


          <div className="send-text">
            <h3 className="send-h3">Biz bilan bog'lanish</h3>
            <h2 className="send-h2">So'rovingizni yuboring</h2>


            <div className="input-div">
              <h5 className="input-h5">Foydalanuvchi nomi</h5>
              <input className="name" type="text" />
            </div>
            <div className="input-div">
              <h5 className="input-h5">Elektron pochta (ixtiyoriy)</h5>
              <input className="name" type="text" />
            </div>
            <div className="input-div">
              <h5 className="input-h5">Telefon raqam</h5>
              <div className="drop">
                <Dropdown />
                <input className="name" type="text" />
              </div>
            </div>
            <div className="input-div">
              <h5 className="input-h5">Sizning savolingiz</h5>
              <input className="name" type="text" />
            </div>


            <button className="more-btn">
              <span>Xabar yuborish</span>
              <span className="icon-right">
                <IoMdSend />
              </span>
            </button>
          </div>
        </div>
      </div>



      <div className="leaves">
        {img3}
      </div>
    </div>
  );
}
