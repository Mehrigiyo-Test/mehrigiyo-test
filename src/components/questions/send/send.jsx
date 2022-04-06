import React from "react";
import "./send.css";
import animation from "../../../images/Contact_Animations.png";
// import { TextField } from "@mui/material";
import {IoMdSend} from 'react-icons/io';



export default function Send({ top, img1, text, headtext, img2, img3, overflow }) {

  return (
    <div className="send-background" style={{top: top, overflow}}>
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
            <select>
              <option className="uz">uz</option>
              <option className="ru">ru</option>
              <option className="en">en</option>
            </select>
            <input className="name" type="text" />
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
      {/* <img src={leaves} alt="" /> */}
      {img3}
    </div>
    </div>
  );
}
