import React from 'react'
import './HomeStyle.css'
import NewsCard from '../../components/NewsCard/NewsCard'
import sliderEx from './../../images/sliderEx.png'
import ApplicationSec from '../../components/ApplicationSec/ApplicationSec'

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
    <div className='pageStyle1'>
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
