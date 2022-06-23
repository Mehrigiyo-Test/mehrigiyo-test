import React from "react";
import './Ambulance.scss';
import DoctorImg from "../../../images/User/imageDoctor.png";
import Barg from '../../../images/User/Group1.png';
import Logo from '../../../images/User/online1.png';
import Global from "../GlobalBtn/GlobalBtn";

export default function Ambulance() {

    return (
        <>
            <section className="container">
                <img className="background" src={Barg} alt="" />
                <div className="box boxSize">
                    <div className="textBox" md="5">
                        <h3>Shoshilinch onlayn yordam</h3>
                        <p>Bizga shoshilinch sog'liq bo'yicha maslahatchini ayting
                            va biz 60 soniya ichida eng yaxshi shifokorni tayinlaymiz.</p>
                        <a href="/onlineDoctor">
                            <Global text="Onlayn uchrashuv belgilash" width={'306px'} />
                        </a>
                    </div>
                    <div className="imgBox" md="5">
                        <div className="logodiv">
                            <div className="logoImg">
                                <img src={Logo} alt="icon" />
                                <h5>Onlayn shifokorlar</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consec-tetur adipiscing elit. Ut ullamcorper in et amet.</p>
                        </div>
                        <img className="doctorImg" src={DoctorImg} alt="doctor" />
                    </div>
                </div>
            </section>
        </>
    )
}