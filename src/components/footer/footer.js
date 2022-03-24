import React from 'react'
import "./styles.css"
import mexrigiyo from '../../images/Mehrigiyo_logo.png'
import { FaTelegramPlane } from 'react-icons/fa'
import { GrFacebookOption } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

function footer() {
  return (
    <div className='footer'>
      <div className='GlobalWrapper'>
        <div className='section1'>
          <div className='logo'><img src={mexrigiyo} /></div>
          <ul>
            <li>Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar</li>
            <li>Ish vaqti: Har kuni 8:00 dan 18:00 gacha</li>
          </ul>
          <div className='icons'>
            <div className='telegram'>
              <GrFacebookOption className='icon' size={"20px"} />
            </div>
            <div className='telegram'>
              <FaInstagram className='icon' size={"20px"} />
            </div>
            <div className='telegram'>
              <FaTelegramPlane className='icon' size={"20px"} />
            </div>
            <div className='telegram'>
              <BsYoutube className='icon' size={"20px"} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default footer