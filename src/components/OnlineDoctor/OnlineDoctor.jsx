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
            title: 'Nevropatolog',
            text: '2029 shifokor',
        },
        {
            img: img2,
            title: 'Genetika',
            text: '1,870 shifokor',
        },
        {
            img: img3,
            title: 'Stomatologiya',
            text: '1,064 shifokor',
        },
        {
            img: img4,
            title: 'Jarrohlik',
            text: '1,065 shifokor',
        }
    ]
    
    return (
        <div className="containerDoctor GlobalWrapper">
            <div className="bacgroundImg"></div>
            <div className="onlineDoctorContainer">
                <h3>Har qanday sog'liq bilan bog'liq muammolar uchun
                    <span className="greenDoctor"> onlayn shifokorlarga</span> murojaat qiling</h3>
                <p>Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob berishadi.</p>
                <div className="boxContainer">
                    {data.map(item => (
                        <Profession key={item.text} data={item} />
                    ))
                }
                </div>
                <Global text="Bepul maslahat olish" width={'260px'} position={'absolute'} top={'368px'} />
            </div>
            <div className="bacgroundImg2"><img src={Bacground} alt=""/></div>
        </div>
    )
}