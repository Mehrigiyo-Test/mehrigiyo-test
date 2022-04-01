import React from 'react'
import "./LastNewsStyle.css"
import Madrid2 from "./../../../images/madrid2.jpg"
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Upload1 from "./../../../images/Upload1.png"
import Global from '../../GlobalBtn/GlobalBtn';


function LastNews({img, category, time, theme, info}) {
    return (
        <>
        <div className='NewsPg1'>
            <div>
                <div className='News1_wrapper padding1 gap'>
                    <p><a href="#">Bosh sahifa </a></p>
                    <span>/</span>
                    <p><a href="#">Yangiliklar</a></p>
                </div>
                <h2 className='lasteNews_txt'>So’ngi yangiliklar</h2>
            </div>       

            <section className='display sectiona'>
                    <div className='bigImgNews'>
                        <img   src={Madrid2} alt="" />
                    </div>
                    <div className='NewsTxtWrapper'>
                        
                    <div className="txt1">
                    <div className='UploadWrapper'><img src={Upload1} alt="Upload" /></div>
                    <div className="category1 display">
                        <p>{category}#Ziravorlar</p>
                        <li>{time}4 min oldin</li>
                    </div>
                    <h4>{theme}Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.</h4>
                    <h6>{info}Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud.</h6>
                    <div >
                        <Global
                        text={"Ko'proq o'qish"}
                        width={"188px"}
                        color={"#53B175"}
                        />
                    </div>
                    </div>
                    </div>
            </section>
            </div>
        </>
    )
}

export default LastNews