import React from 'react'
import "./RectangleNewsCardStyle.css"
import CalendarIcon from "./../../../../images/CalendarIcon.png"

function RectangleNewsCard({
  date,
  time,
  info
}) {
  return (
    <>
    <div className='RectangleCard'>
        <div className='display alignItems'>
            <div className='Calendar'>
                <img src={CalendarIcon} alt="" />
            </div>
            <div className='RactTime'>{date} -</div>
            <div className='RactTime'>{time}</div>
        </div>
        <div className='RactangleCardTxt'>
        {info}       </div>
    </div>
    </>
  )
}

export default RectangleNewsCard