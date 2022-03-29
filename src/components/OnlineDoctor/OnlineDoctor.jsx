import React from "react";
import './OnlineDoctor.scss';
import img1 from '../../images/Shape1.png';
import img2 from '../../images/Shape2.png';
import img3 from '../../images/Shape3.png';
import img4 from '../../images/Shape4.png';
import Bacground from '../../images/Groupffff.png';
import Global from "../GlobalBtn/GlobalBtn";
import Profession from "../GlobalProfession/Profession";


export default function OnlineDoctor() {

    const data = [
        {
            img: img1,
            title: '1',
            text: 'text',
        },
        {
            img: img2,
            title: '2',
            text: 'tsxt',
        },
        {
            img: img3,
            title: '3',
            text: 'text',
        },
        {
            img: img4,
            img2: <h1 style={{background: 'red'}}>asdasdas</h1>,

            title: '4',
            text: 'text',
        }
    ]

    return (
        <div className="containerDoctor">
            <div className="onlineDoctorContainer">
                <h3>Har qanday sog'liq bilan bog'liq muammolar uchun
                    <span className="greenDoctor"> onlayn shifokorlarga</span> murojaat qiling</h3>
                <p>Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob berishadi.</p>
                {data.map(item => (
                    <Profession key={item.text} data={item} />
                ))
                }
                <Global text="Bepul maslahat olish" width={'260px'} position={'absolute'} top={'368px'} />
            </div>
            <div className="bacgroundImg"></div>
            <div className="bacgroundImg2"><img src={Bacground} /></div>
        </div>
    )
}