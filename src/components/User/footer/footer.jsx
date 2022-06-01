import React from 'react'
import "./footerStyles.scss"
import mexrigiyo from '../../../images/User/Mehrigiyo_logo.png'
import { FaTelegramPlane } from 'react-icons/fa'
import { GrFacebookOption } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import Googleplay from '../../../images/User/Googleplay-button.png'
import Appstore from '../../../images/User/Appstore-button.png'
import footerhome from '../../../images/User/footerhome.png'
import { Link } from 'react-router-dom';

function footer() {
  return (
    <div className='footer'>
      <div className='GlobalWrapper sections'>
        <div className='section1'>
          <div className='logo'><img src={mexrigiyo} /></div>
          <ul className='workTime'>
            <li>Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar</li>
            <li>Ish vaqti: Har kuni 8:00 dan 18:00 gacha</li>
          </ul>
          <div className='icons'>
            <a target="_blank" href="https://facebook.com">
              <div className='telegram'>
                <GrFacebookOption className='icon' size={"20px"} />
              </div>
            </a>
            <a target="_blank" href="https://instagram.com">
              <div className='telegram'>
                <FaInstagram className='icon' size={"20px"} />
              </div>
            </a>
            <a target="_blank" href="https://telegram.org">
              <div className='telegram'>
                <FaTelegramPlane className='icon' size={"20px"} />
              </div>
            </a>
            <a target="_blank" href="https://youtube.com">
              <div className='telegram'>
                <BsYoutube className='icon' size={"20px"} />
              </div>
            </a>
          </div>
          <div className='green-place'>
            <div className='green_innter-text'>
              <div className='first'>E-mail</div>
              <a href='info@mehrigiyo.uz' target="_blank" className='next'>info@mehrigiyo.uz</a>
            </div>
            <div className='green_innter-text'>
              <div className='first'>Bizga qo'ng'iroq qiling</div>
              <a href="tel: +99898 125 31 03" className='next'>+99898 125 31 03</a>
            </div>
          </div>
        </div>

        <div className='section_a'>
          <h3 className='legalty'>Huquqiy</h3>
          <a href="#">
          <p className='parag'>Maxfiylik siyosati</p>
          </a>
          <a href="#">
          <p className='parag'>Xizmat ko'rsatish shartlari</p>
          </a>
          <a href="#">
          <p className='parag'>Huquqni muhofaza qilish</p>
          </a>
          <div className='homeimg'><img src={footerhome} alt="icon"/></div>
        </div>

        <div className='section_b'>
          <h3 className='footer_h3'>Ilovani yuklab olish</h3>
          <div className='grid'>
            <a href="https://play.google.com/store/games" target="_blank">
            <div className='buttons'><img className='imgbutton' src={Googleplay} /></div>
            </a>
            <a href="https://www.apple.com/ru/app-store/" target="_blank">
            <div className='buttons'><img className='imgbutton' src={Appstore} /></div>
            </a>
          </div>
        </div>
      </div>

      <div className='white_panel'>
        <div className='GlobalWrapper panel'>
          <div>
            <div className='dons'>© 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan. </div>
            <div className='dons'>Saytdan olingan barcha maʼlumotlar chop etilganda veb-saytga havola qilish majburiy.</div></div>
          <div className='footer-menu'>
            <Link to="/" className='menu-text'>Bosh sahifa</Link>
            <Link to="/aboutUs" className='menu-text'>Biz haqimizda</Link>
            <Link to="/news" className='menu-text'>Yangiliklar</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default footer