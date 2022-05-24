import React, { useState } from "react";
import './dropdownStyle.css';
import uzbFlag from "./../../images/uzbFlag.png"
import NavVector from './../../images/nav2_vector.png';
import rusFlag from "./../../images/rusFlag.png"
import engFlag from "./../../images/engFlag.png"
import Polygon from "./../../images/Polygon.png"



function Dropdown(
    img,
    text,
) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [flag, setFlag] = useState(uzbFlag)


    
    const handleClick = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }

    const uzb = () =>{
        setFlag(uzbFlag)
        handleClose()
    }
    const rus = () =>{
        setFlag(rusFlag)
        handleClose()
    }
    const eng = () =>{
        setFlag(engFlag)
        handleClose()
    }
    // const flags = (id) => {
    //     if(id === "rus" ){
    //        return setFlag(rusFlag)
    //     }
    //     else if (id === "uzb"){
    //        return setFlag(uzbFlag)
    //     }
    //     else if (id === "eng"){
    //        return setFlag(engFlag)
    //     }
    //     else{
    //        return setFlag(uzbFlag)
    //     }
       
    // }

    return (
        <>
            <div className="flex gap" onClick={handleClick}>
                <div className="relativ">
                    <img className="changableFlag" src={flag} alt="uz" />
                </div>
                <div style={{paddingTop: "3px"}}> 
                    <img src={NavVector} alt="" />
                </div>
            </div>

            {isOpen ?
                <div className="dropdown_wrapper" >
                    <div className="polyAbsolutes"><img  src={Polygon} alt="" /></div>
                    <div className="flex hover space-between"  onClick={uzb}>
                        <div className="ddImg ii"><img id="uzb" src={uzbFlag} alt="" /></div>
                        <div className="langText">O'zbekcha</div>
                    </div>
                    <div className="flex pdleft hover space-between" onClick={rus}>
                        <div className="ddImg"><img id="rus" src={rusFlag} alt="" /></div>
                        <div className="centerText">Russkiy</div>
                    </div>
                    <div className="flex pdleft hover space-between" onClick={eng}>
                        <div className="ddImg"><img id="eng" src={engFlag} alt="" /></div>
                        <div className="centerText">English</div>
                    </div>
                </div> : null}
        </>
    )

}

export default Dropdown