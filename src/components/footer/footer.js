import React from 'react'
import "./styles.css"
import mexrigiyo from '../../images/Mehrigiyo_logo.png'
import{ FaTelegramPlane} from 'react-icons/fa'

function footer() {
  return (
    <div className='footer'>
        <div className='section1'>
            <div className='logo'><img src={mexrigiyo}/></div>
            <ul>
                <li>Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar</li>
                <li>Ish vaqti: Har kuni 8:00 dan 18:00 gacha</li>
            </ul>
            <div>
              <FaTelegramPlane style={{backgroundColor: '#3D3D3D'}}/>
            </div>
        </div>
    </div>
  )
}

export default footer