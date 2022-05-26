import React from 'react'
import './InfoBanner.scss'
import Homepng from '../../images/banner-home.png'
import Sheet from '../../images/Group3.png'
import Field from '../../images/Field.png'
import Branch from '../../images/branch.png'

export default function InfoBanner() {
    return (
        <div className="InfoBanner">
            <div className="GlobalWrapper">
                <img src={Branch} alt="" className="InfoBanner-img"/>
                <div className="InfoBanner-content">
                    <div className="InfoBanner-left">
                        <h2 className="InfoBanner-h2">Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz</h2>
                        <p className="InfoBanner-p">Farg‘ona vodiysi tabiati bergan bu xilma-xilliklarning barchasi noyob mahsulotlar yaratishga asos bo‘lmoqda.</p>
                        <img src={Homepng} alt="Home" className="InfoBanner-left-img"/>
                    </div>
                    <div className="InfoBanner-center">
                        <img src={Sheet} alt="Sheet" className="InfoBanner-center-img"/>
                    </div>
                    <div className="InfoBanner-right">
                        <img src={Field} alt="Field" className="InfoBanner-right-img"/>
                    </div>
                </div>
            </div>

            <div className="info-banner-back">
                <img src={Branch} alt="" />
            </div>
        </div>
    )
}
