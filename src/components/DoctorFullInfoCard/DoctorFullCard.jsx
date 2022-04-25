import React from 'react'
import "./DoctorFullCardStyle.css"
import madrid from "./../../../src/images/madrid2.jpg"
import selected from "./../../images/BlIzbranniy.png"
import share from "./../../images/BlShare.png"
import stars from "./../../images/stars.png"
import close from "./../../images/Close.png"
import barg from "./../../images/leafAnother.png"
import TaemOfLeaf from "./../../images/TeamOfLeaf.png"
import kidney from "./../../images/kidney5.png"
import info from "./../../images/Vector1.png"

function DoctorFullCard() {
  return (
    <>
    <div className='DocFuulINWR'>
        <div className='centerInfo'>
            <div className='BigCircleIMg'><img src="" alt="" /></div>
            <div>
                <div className='DoctorName'>
                <h2>Gavhar Sobirova</h2>
                <div className='display gap'>
                <div className='selected'><img src={selected} alt="" /></div>
                <div className='selected'><img src={share} alt="" /></div>
                </div>
                </div>
                <div><img src={stars} alt="" /></div>
                <div className='DocInfCards'>
                <div className='DoctorPract'>
                    <div>
                    <div>Shaharlar</div>
                    <h2 className='twoHundred'>233+</h2>
                    </div>
                </div>
                <div className='DoctorPract'>
                    <div>
                    <div>Tajriba</div>
                    <h2 className='five'>5 yil</h2>
                    </div>
                </div>
                <div className='DoctorPract'>
                    <div>
                        <div className='DoctorPractINfoicon'><img src={info} alt="" /></div>
                    <div className='doctorPractImg'><img src={kidney} alt="" /></div>
                    <p>Kardiolog</p>
                    </div>
                </div>
                </div>
                <div className='DocPractInf'>
                    <h6>About Doctor</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra donec turpis integer ipsum, et enim orci amet.</p>
                </div>
            </div>
        </div>
        <div ><button className='DocButton'>Appointment</button></div>
        <div className='close'><img src={close} alt="" /></div>
        <div className='modalBak'><img src={barg} alt="" /></div>
        <div className='TeamLeaf'><img src={TaemOfLeaf} alt="" /></div>
    </div>
    </>
  )
}

export default DoctorFullCard