import React from 'react'
import rowImg from "./../../../images/rowImg.png"
import Placeholder from "./../../../images/Placeholder.png"
import "./RowNewStyle.css"

function RowNewsCard({
    img,
    Greenholder,
    events,
    time,
    theme,
    txt,
    }) {
  return (
    <>
    <div>
        <div className=' display row_wrapper'>
            <div className='rowImg'><img src={img} alt="" /></div>
            <div className='PLaceholderImg'><img src={Greenholder} alt="" /></div>
            <div className='PLaceholderImg events'>{events}</div>
            <div className='timeData'>{time}</div>
            <div className='rowTxt'>
                <h4>{theme}</h4>
                <p>{txt}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default RowNewsCard