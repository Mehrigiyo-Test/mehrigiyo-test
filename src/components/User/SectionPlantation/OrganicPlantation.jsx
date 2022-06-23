import React from "react";
import './OrganicPlantation.scss';
import Organic from '../../../images/User/organicLogos1.png';
import GroupOrganic from '../../../images/User/BackgroundBubble.png';
import PlayButton from '../../../images/User/PlayButton.png';
import Global from "../GlobalBtn/GlobalBtn";

export default function OrganicPlantation() {

    return (
        <>
            <div className="organicContiner GlobalWrapper">
                <div className="organicText">
                    <div className="organicBody">
                        <p className="organicWelcome">MEHRIGIYOGA Xush kelibsiz</p>
                        <h4>Yaxshi kelajak uchun salomatlik</h4>
                        <p className="text">1992-yildan buyon shifokorlar, oʻsimlikshunoslar, sharq tabobati izdoshlari, fermer va texnologlardan iborat “MEHRIGIYO” professional jamoasi Fargʻona vodiysi va oʻz plantatsiyalarida yetishtirib, zamonaviy farmatsevtika sanoati yutuqlari va qadimiy taʼlimot tajribasini muvaffaqiyatli oʻzida mujassamlashtirib kelmoqda. shifobaxsh choy, asal, moy, sirop, holva va boshqalar ishlab chiqaradi.</p>
                        <img src={Organic} alt="organic" />
                    </div>
                    <div className="organicSection">
                        <a href="/aboutUs/#historyMehrigiyo">
                            <Global text="Batafsil" width={'200px'} />
                        </a>
                        <a target="_blank" href="https://youtube.com">
                            <img src={PlayButton} alt="play button" />
                        </a>
                    </div>
                </div>
                <div className="organicImg">
                    <img src={GroupOrganic} alt="organic" />
                </div>
            </div>
        </>
    )
}