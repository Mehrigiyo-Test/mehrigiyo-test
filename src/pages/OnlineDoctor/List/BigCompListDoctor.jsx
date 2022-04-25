import React from 'react'
import Vectorrr from "./../../../images/Vectorrr.png"
import Close from "./../../../images/Close.png"
import "./BigCompListDoctorStyle.css"
import { Link } from 'react-router-dom'
import Search from './../Search/Search'
import reload from "./../../../images/reload.png"
import Checkbox from './Checkbox/Checkbox'
import down from "./../../../images/Down.png"
import TopDoctors from '../../../components/TopDoctors/TopDoctors'
import img1 from "./../../../images/doctorBahrom.svg";
import Bak from "./../../../images/send_background.png"
import DoctorFullCard from '../../../components/DoctorFullInfoCard/DoctorFullCard'
import AdviceDayBooking from '../../../components/adviceDayBooking/adviceDayBooking'
import Waiting from "./../../../components/waiting/waiting.jsx"
import MeetingSucceed from '../../../components/waiting/MeetingSucceed/MeetingSucceed'
import DoctorTtypeInfo from '../../../components/waiting/DoctorTtypeInfo/DoctorTtypeInfo'

function BigCompListDoctor() {
  const cate = [
    {
      name: "Hammasi"
    },
    {
      name: "Nevropatolog"
    },
    {
      name: "Genetika"
    },
    {
      name: "Stomatologiya"
    },
    {
      name: "Jarroh"
    },
    {
      name: "Kardiolog"
    },
    {
      name: "Dermotolog"
    }
  ];

  return (
    <>
    <div className='GlobalWrapper Onlinewr'>
    <div className='Attention'>
        <div className='display AttentComp'>
            <div><img src={Vectorrr} alt="" /></div>
        <div className='GreyTxt'>Bepul shifokor maslahat olish uchun avval mutaxassislikni tanlab va o’zizga ma’qul kelgan shifokorni tanlang </div>
        </div>
        <div><img src={Close} alt="" /></div>
    </div>
    <div className='OnlineDoctorPg2GW'>
        <div className='News1_wrapper DoctorNav gap'>
                    <p><Link to="/">Bosh sahifa</Link></p>
                    <span>/</span>
                    <p><a tabIndex={1} className='doctype' href="/OnlineDoctor">Onlayn Shifokorlar</a></p>
                    <span>/</span>
                    <p><Link tabIndex={1} className='doctype' to="/OnlineDoctor/BigCompListDoctor">Shifokorlar</Link></p>
        </div>
        <div className='display doc'>
        <span><h1>Shifokorlar</h1></span>
        <span className='display rowFilter gap'>
            <span>Saralash:</span>
          <div className='gap News1_wrapper '>
            <span tabIndex={1} className='doctype'>Yangi</span>
            <span tabIndex={1} className='doctype'>Top</span>
            <span tabIndex={1} className='doctype'>Ayol</span>
            <span tabIndex={1} className='doctype'>Erkak</span>
            </div>
        </span>
        <span className='Qidiruv'><Search/></span>
        </div>
        <div className='display'>
          <div className='categoryFilter'>
            <div className='filterBg'>
            <div className='display clearFF'>
            <h5>Kategoriyalar</h5>
            <span className='clearFilter'>
              <img src={reload} alt="reload" />
              <p>Tozalash</p>
            </span>
            </div>
            <div>
              {cate.map((item)=>(<Checkbox name={item.name}/>))}
              </div>
              <div className='moore'>
                <div><img src={down} alt="" /></div>
                <div>Ko'proq</div>
              </div>
              </div>
          </div>
        
        <div className='DocInfo'>
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        <TopDoctors
              img={img1}
              text1="A. Bahrom"
              text2="⭐️ 4.5 (135 reviews)"
            />
        </div>
        </div>
    </div>
    <div><img className='bak' src={Bak} alt="" /></div>

    </div>
        <div><DoctorFullCard/></div>
        <div className='AdvDay'><AdviceDayBooking/></div>
        <div className='GlobalWrapper'><Waiting/></div>
        <div className='AdvDay'><MeetingSucceed/></div>
        <div className='AdvDay GlobalWrapper'><DoctorTtypeInfo/></div>
    </>
  )
}

export default BigCompListDoctor