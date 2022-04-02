import React from "react";
import './FreeAdvice.scss';
import GlobalAdvice from "../GlobalAdvice/GlobalAdvice";
import Leaves from '../../images/Group3.png';
import Doctor from '../../images/GroupDoctor.png';
import Oval from '../../images/Oval.png';
import Oval2 from '../../images/Oval(1).png';
import GlobalBtn from '../GlobalBtn/GlobalBtn';
import PlayButton from '../../images/PlayButton.png';

export default function FreeAdvice() {

    const info = [
        {
            imgBackground: <img src={Leaves} />,
            clickMe: <p className="headText">Bosh sahifa  /  <span> Onlayn shifokorlar </span></p>,
            headerText: <h3>Bepul shifokor maslahatini oling</h3>,
            text: <p className="infoText">Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob berishadi.</p>,
            buttonGlobal: <GlobalBtn text='Bepul maslahat olish' width={'260px'} />,
            playBtn: <img src={PlayButton} alt="play button" />,
            img1: <img className="ovalBig" src={Oval2} />,
            img2: <img src={Doctor} />,
            img3: <img className="ovalSmall" src={Oval} />
        }
    ]

    return (

        <>
            {info.map((item) =>(
                <GlobalAdvice key={item.text} info={item}/>
            ))}
        </>
    )
}