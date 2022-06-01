import React,{useState, useEffect} from 'react'
import Scrolltop from "./../../images/Scrolltop.png"
import "./ScrollTopStyle.scss"

import {classNames} from "./utils/utils"

const ScrollTop = () => {
    const[isVisible, setIsVisible] = useState(false)

    const toggleVisibility =()=>{
        if(window.PagaYOffset > 300){
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    useEffect(()=>{
        window.addEventListener('scroll', toggleVisibility)
        
        return()=>{
            window.removeEventListener("scroll", toggleVisibility)
        }

    },[])
  return (
    <>
    <div className='Scrollbar' >
     <img onClick={scrollToTop} className={classNames(isVisible ?  "opacity-100" : "opacity-0",)} src={Scrolltop} alt="" />
    {/* top */}
    </div>
    </>
  )
}

export default ScrollTop