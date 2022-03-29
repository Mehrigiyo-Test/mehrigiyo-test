import React from 'react'
import './NewsCardStyle.css'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"


function NewsCard({
    img,
    category,
    time,
    theme,
    info,
}) {
    
    
  return (
    <>
   <div className='wrapper'>
       <div className='img_wrapper'><img className='sldImg' src={img}/>
        
       </div>
       <div className='txt'>
           <div className='category'><p>{category}</p>
           <li>{time}</li></div>
           <h4>{theme}</h4>
           <h6>{info}</h6>
           <div className='more'><p>Ko'proq o'qish</p>
           <HiOutlineArrowNarrowRight size={20} className='arrow'/></div>
       </div>
   </div>
   
    </>
  )
}

export default NewsCard