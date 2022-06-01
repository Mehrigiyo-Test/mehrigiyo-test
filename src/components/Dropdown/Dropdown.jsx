import React, { useState } from "react";
import './dropdownStyle.scss';
import uzbFlag from "./../../images/uzbFlag.png"
import NavVector from './../../images/nav2_vector.png';
import rusFlag from "./../../images/rusFlag.png"
import engFlag from "./../../images/engFlag.png"
import Polygon from "./../../images/Polygon.png"



function Dropdown(img, text) {

    const [isOpen, setIsOpen] = useState(false);
    const [flag, setFlag] = useState(uzbFlag);



    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const uzb = () => {
        setFlag(uzbFlag)
        handleClick()
    }
    const rus = () => {
        setFlag(rusFlag)
        handleClick()
    }
    const eng = () => {
        setFlag(engFlag)
        handleClick()
    }
    return (
        <>
        <div className="drwr">

            <div className="flex gap" onClick={handleClick}>
                <div className="relativ">
                    <img className="changableFlag" src={flag} alt="uz" />
                </div>
                <div style={{ paddingTop: "3px" }}>
                    <img src={NavVector} alt="" />
                </div>
            </div>

            {isOpen ?
                <div className="dropdown_wrapper" >
                    <div className="polyAbsolutes"><img src={Polygon} alt="" /></div>
                    <div className="flex hover space-between" onClick={uzb}>
                        <div className="ddImg ii"><img id="uzb" src={uzbFlag} alt="" /></div>
                        <div className="langText">O'zbekcha</div>
                    </div>
                    <div className="flex pdleft hover space-between" onClick={rus}>
                        <div className="ddImg"><img id="rus" className="rusFlag" src={rusFlag} alt="" /></div>
                        <div className="centerText Russian">Русский</div>
                    </div>
                    <div className="flex pdleft hover space-between" onClick={eng}>
                        <div className="ddImg"><img id="eng" className="rusFlag" src={engFlag} alt="" /></div>
                        <div className="centerText">English</div>
                    </div>
                </div> : null}
                    </div>
        </>
    )

}

export default Dropdown;