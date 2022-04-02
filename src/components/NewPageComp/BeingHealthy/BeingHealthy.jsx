import React from 'react'
import "./BeingHealthy.css"
import { Link } from 'react-router-dom'
import Groupffff from "./../../../images/Groupffff.png"
import Group from "./../../../images/Group.png"
import NewsCard from '../../NewsCard/NewsCard'
import sliderEx from "./../../../images/sliderEx.png"

function BeingHealthy() {
    const Menu =[
        {
            name: "Hammasi",
            id: 1
        },
        {
            name: "Mahsulotlar haqida",
            id: 2
        },
        {
            name: "Shifokorlar tavsiya qiladilar",
            id: 3
        },
        {
            name: "Ozish",
            id: 4
        },
        {
            name: "Salomatlik",
            id: 5
        },
        {
            name: "Detoks",
            id: 6
        },
        ]
    
  return (
    <>
    <div className='GlobalWrapper MexrigiyoPresent BeingHealthyWrapper'>
         <div ><img className='leafs Bgleafs' src={Groupffff} alt="" /></div>
          <div className='plant bgPlant'><img className='plantImg' src={Group} alt="" /></div>
          <div className='News1_wrapper gap'> 
                    <p><Link to="/">Bosh sahifa </Link></p>
                    <span>/</span>
                    <p><Link to="/news">Yangiliklar</Link></p>
                    <span>/</span>
                    <p><Link to="/news/MexrigiyoPresentation">Mehrigiyo kompaniyasi ...</Link></p>
                    <span>/</span>
                    <p><Link to="/news/BeingHealthy">Salomatlik sari</Link></p>
            </div>
            <div>
                <h1>Salomatlik sari</h1>
            </div>
            <div className='flex menucl'>
               {Menu.map((item, index) => (
                   <a href="">
                       <li key={index}>
                           {item.name}
                       </li>
                   </a>
               ))}
            </div>
           
    </div>
    <div className='GlobalWrapper'>
         <div className='display sCardsStyle'><NewsCard
         img={sliderEx}
         category="#Ziravorlar"
         time="4 min oldin"
         theme='Mehrigiyo kompaniyasi "Detaksioma - '
         info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida"
         display="none"
         />
         <NewsCard
         img={sliderEx}
         category="#Ziravorlar"
         time="4 min oldin"
         theme='Mehrigiyo kompaniyasi "Detaksioma - '
         info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida"
         display="none"
         />
         <NewsCard
         img={sliderEx}
         category="#Ziravorlar"
         time="4 min oldin"
         theme='Mehrigiyo kompaniyasi "Detaksioma - '
         info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida"
         display="none"
         />
         </div>
    </div>
    </>
  )
    
}

export default BeingHealthy