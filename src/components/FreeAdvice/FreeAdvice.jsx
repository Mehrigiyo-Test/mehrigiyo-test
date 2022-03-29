import React from "react";
import './FreeAdvice.scss';
import Leaves from '../../images/Group3.png';
import Doctor from '../../images/GroupDoctor.png';
import Oval from '../../images/Oval.png';
import Oval2 from '../../images/Oval(1).png';
import GlobalBtn from '../GlobalBtn/GlobalBtn';
import PlayButton from '../../images/PlayButton.png';

export default function FreeAdvice() {

    return (
        <div className="adviceDoctor GlobalWrapper">
            <img src={Leaves} />
            <div className="adviceText">
                <p className="headText">Bosh sahifa  /  <span> Onlayn shifokorlar </span></p>
                <h3>Bepul shifokor maslahatini oling</h3>
                <p className="infoText">Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob berishadi.</p>
                <div className="btnContainer">
                    <GlobalBtn text='Bepul maslahat olish' width={'260px'} />
                    <img src={PlayButton} alt="play button" />
                </div>
            </div>
            <div className="adviceImg">
                <img className="ovalBig" src={Oval2} />
                <img src={Doctor} />
                <img className="ovalSmall" src={Oval} />
            </div>
        </div>
    )
}