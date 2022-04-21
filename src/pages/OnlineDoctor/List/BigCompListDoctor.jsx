import React from 'react'
import Vectorrr from "./../../../images/Vectorrr.png"
import Close from "./../../../images/Close.png"
import "./BigCompListDoctorStyle.css"
import { Link } from 'react-router-dom'
import Search from './../Search/Search'
import reload from "./../../../images/reload.png"

function BigCompListDoctor() {
  return (
    <>
    <div className='GlobalWrapper'>
    <div className='Attention'>
        <div className='display AttentComp'>
            <div><img src={Vectorrr} alt="" /></div>
        <div className='GreyTxt'>Bepul shifokor maslahat olish uchun avval mutaxassislikni tanlab va o’zizga ma’qul kelgan shifokorni tanlang </div>
        </div>
        <div><img src={Close} alt="" /></div>
    </div>
    <div>
        <div className='News1_wrapper DoctorNav gap'>
                    <p><Link to="/">Bosh sahifa</Link></p>
                    <span>/</span>
                    <p><a tabIndex={1} className='doctype' href="/OnlineDoctor">Onlayn Shifokorlar</a></p>
                    <span>/</span>
                    <p><Link tabIndex={1} className='doctype' to="/OnlineDoctor/BigCompListDoctor">Shifokorlar</Link></p>
        </div>
        <div className='display doc'>
        <span><h1>Shifokorlar</h1></span>
        <span className='display gap'>
            <span>Saralash:</span>
          <div className='gap News1_wrapper '>
            <span tabIndex={1} className='doctype'>Yangi</span>
            <span tabIndex={1} className='doctype'>Top</span>
            <span tabIndex={1} className='doctype'>Ayol</span>
            <span tabIndex={1} className='doctype'>Erkak</span>
            </div>
        </span>
        <span><Search/></span>
        </div>
        <div>
          <div>
            <span>Kategoriyalar</span>
            <span>
              <img src={reload} alt="reload" />
              <div>Tozalash</div>
            </span>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default BigCompListDoctor