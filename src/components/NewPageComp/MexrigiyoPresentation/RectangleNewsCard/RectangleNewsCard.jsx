import React from 'react'
import "./RectangleNewsCardStyle.css"
import CalendarIcon from "./../../../../images/CalendarIcon.png"

function RectangleNewsCard() {
  return (
    <>
    <div className='RectangleCard'>
        <div className='display alignItems'>
            <div className='Calendar'>
                <img src={CalendarIcon} alt="" />
            </div>
            <div className='RactTime'>12.09.2021 -</div>
            <div className='RactTime'>15:12</div>
        </div>
        <div className='RactangleCardTxt'>
        Barcha kasalliklar uchun dori, mehrigiyo kompaniyasidan "sumbul shifo" to'plami"        </div>
    </div>
    </>
  )
}

export default RectangleNewsCard