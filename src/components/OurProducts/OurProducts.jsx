import React from 'react'
import "./OurProducts.scss"

const OurProducts = ({svg, text, bcgColor}) => {

  return (
    <div className='OurProducts' style={{backgroundColor: bcgColor}}>
        <div className='OurProducts__img'>
            <img src={svg} />
        </div>
        <div className='OurProducts__text'>
            {text}
        </div>
    </div>
  )
}

export default OurProducts