import React from "react";
import './FreeAdvice.scss';
import GlobalAdvice from "../GlobalAdvice/GlobalAdvice";
import Leaves from '../../../images/User/Group3.png';
import Doctor from '../../../images/User/GroupDoctor.png';
import Oval from '../../../images/User/Oval.png';
import Oval2 from '../../../images/User/Oval(1).png';
import GlobalBtn from '../GlobalBtn/GlobalBtn';
import PlayButton from '../../../images/User/PlayButton.png';

export default function FreeAdvice() {

    const info = [
        {
            imgBackground: <img id="leav" src={Leaves} />,
            clickMe: <p className="headText">Bosh sahifa  /  <span> Onlayn shifokorlar </span></p>,
            headerText: <h3>Bepul shifokor maslahatini oling</h3>,
            text: <p className="infoText">Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob berishadi.</p>,
            buttonGlobal: <a href="/onlineDoctor/BigCompListDoctor/#sortGoods"><GlobalBtn text='Bepul maslahat olish' width={'260px'} /></a> ,
            playBtn: <a href="https://youtube.com"><img src={PlayButton} alt="play button" /></a> ,
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