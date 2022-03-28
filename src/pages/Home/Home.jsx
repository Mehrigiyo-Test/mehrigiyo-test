import React from 'react'
import Bannerinput from '../../components/bannerInput/bannerInput';
import Banner from '../Banner/Banner';
import Infosection from '../InfoSection/InfoSection';
import Bannercard from './../../components/bannerCard/bannerCard';
import './HomeStyle.css'
import NewsCard from '../../components/NewsCard/NewsCard'
import sliderEx from './../../images/sliderEx.png'
import ApplicationSec from '../../components/ApplicationSec/ApplicationSec'
import OrganicPlantation from './../../components/SectionPlantation/OrganicPlantation';
import OnlineDoctor from './../../components/OnlineDoctor/OnlineDoctor';
import Ambulance from './../../components/Ambulance/Ambulance';
import BannerForm from '../../components/bannerForm/bannerForm';

import BannerInputIcon from '../../images/BannerInputIcon.png';
import BannerButtonIcon from '../../images/lupa.png';



function Home() {
    const slide  = [
        {
            img: sliderEx,
            category: "#Ziravorlar",
            time: "4 min oldin",
            theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
            info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
          
        },
        {
            img: sliderEx,
            category: "#Ziravorlar",
            time: "4 min oldin",
            theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
            info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
       
        },
        {
            img: sliderEx,
            category: "#Ziravorlar",
            time: "4 min oldin",
            theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy ',
            info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
           
        },
        {
            img: sliderEx,
            category: "#Ziravorlar",
            time: "4 min oldin",
            theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.',
            info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
            
        },
        {
            img: sliderEx,
            category: "#Ziravorlar",
            time: "4 min oldin",
            theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy ',
            info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
           
        },
        {
            img: sliderEx,
            category: "#Ziravorlar",
            time: "4 min oldin",
            theme: 'Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy ',
            info: "Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.",
           
        },
    ]
    
  return (
    <>
      <Banner/>
      <BannerForm type="text" placeholder="Nima izlayapsiz?" textBtn="Qidirish" img={BannerInputIcon} img2={BannerButtonIcon}/>

      <Bannerinput/>

      <Bannercard/>
      <Infosection/>
      {/* <Infosection title="Tez to'lov" text="100% xavfsiz to'lov"/> */}
    <div className='pageStyle1'>
    <OnlineDoctor />
    <OrganicPlantation />
    <Ambulance />
    <ApplicationSec />
    <div className='GlobalWrapper '>

        <div>
    <div className='nostyle'><h3>So'nggi yangiliklar</h3></div>
        <div><nav className='navigate3'>
            <ul>
                <li style={{color: "#53B175"}}>Hammasi</li>
                <li>Mahsulotlar haqida</li>
                <li>Shifokorlar tavsiya qiladilar</li>
                <li>Ozish</li>
                <li>Salomatlik</li>
                <li>Detoks</li>
            </ul>
            </nav></div></div>
       
            <div className='slideComp'> {slide.map(item => (
       <NewsCard
       img={item.img}
       category={item.category}
       time={item.time}
       theme={item.theme}
       info={item.info}
       />
        ))}
        </div>
    </div>
    </div>
  
    </>
  );
}

export default Home;
