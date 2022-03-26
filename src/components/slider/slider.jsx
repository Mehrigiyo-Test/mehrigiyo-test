import React from 'react'
import './sldStyle.css'
import sliderEx from './../../images/sliderEx.png'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"


function slider() {
  
    
  return (
    <>
   <div className='wrapper'>
       <div><img src={sliderEx}/></div>
       <div className='txt'>
           <div className='category'><p>#Ziravorlar</p>
           <li>4 min oldin</li></div>
           <h4>Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.</h4>
           <h6>Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.</h6>
           <div className='more'><p>Ko'proq o'qish</p>
           <HiOutlineArrowNarrowRight size={20} className='arrow'/></div>
       </div>
   </div>
    </>
  )
}

export default slider