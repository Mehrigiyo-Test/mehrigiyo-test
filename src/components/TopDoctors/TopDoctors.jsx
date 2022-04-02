import React, { useState } from 'react'
import "./TopDoctors.scss"
import imgSave from "../../images/doctorSave.svg"


const TopDoctors = ({text1,text2,img}) => {
    const [clickable, setclickable] = useState(0)
  return (
    <div className='topDoctors'>
        <div className='topDoctors__img'>
            <div className='imgFirst'> <img src={img} />
            <button className='imgFirst__btn'>TOP</button>
            </div>
            <span className='imgSecond'><img  src={imgSave}/> </span>
        </div>
        <p className='topDoctors__paragraph1'>{text1}</p>
        <p className='topDoctors__paragraph2'>{text2}</p>
        <button className='topDoctors__btn'>Appoinment</button>
    </div>
  )
}

export default TopDoctors