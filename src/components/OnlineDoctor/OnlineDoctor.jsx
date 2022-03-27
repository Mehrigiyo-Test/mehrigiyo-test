import React from "react";
import './OnlineDoctor.scss';
import img1 from '../../images/Shape1.png';
import img2 from '../../images/Shape2.png';
import img3 from '../../images/Shape3.png';
import img4 from '../../images/Shape4.png';
import Bacground from '../../images/Groupffff.png';
import Vector from '../../images/Vector(1).png';

export default function OnlineDoctor() {
    let box = [
        {  photo: img1, title:'Nevropatolog', text: '2029 shifokor' },
        {  photo: img2, title:'Genetika', text: '1,870 shifokor' },
        {  photo: img3, title:'Stomatologiya', text: '1,064 shifokor' },
        {  photo: img4, title:'Jarrohlik', text: '1,064 shifokor' },
    ]

    return (
        <div className="containerDoctor">
            <div className="onlineDoctorContainer">
                <h3>Har qanday sog'liq bilan bog'liq muammolar uchun  
                <span className="greenDoctor"> onlayn shifokorlarga</span> murojaat qiling</h3>
                <p>Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob berishadi.</p>
                <div className="boxOnline">
                    {box.map(item=> (
                        <div className="doctorBox">
                            <img src={item.photo} alt="" />
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <button className="btnDoctor">Bepul maslahat olish <img src={Vector} /></button>
            </div>
            <div className="bacgroundImg"></div>
            <div className="bacgroundImg2"><img src={Bacground} /></div>
        </div>
    )
}