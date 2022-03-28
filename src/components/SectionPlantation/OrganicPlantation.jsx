import React from "react";
import './OrganicPlantation.scss';
import Organic from '../../images/organicLogos1.png';
import GroupOrganic from '../../images/BackgroundBubble.png';
import Vector from '../../images/Vector(1).png';
import PlayButton from '../../images/PlayButton.png';

export default function OrganicPlantation() {

    return (
        <>
            <div    className="organicContiner GlobalWrapper">
                <div className="organicText">
                    <div className="organicBody">
                        <p className="organicWelcome">MEHRIGIYOGA Xush kelibsiz</p>
                        <h4>Yaxshi kelajak uchun salomatlik</h4>
                        <p className="text">1992-yildan buyon shifokorlar, oʻsimlikshunoslar, sharq tabobati izdoshlari, fermer va texnologlardan iborat “MEHRIGIYO” professional jamoasi Fargʻona vodiysi va oʻz plantatsiyalarida yetishtirib, zamonaviy farmatsevtika sanoati yutuqlari va qadimiy taʼlimot tajribasini muvaffaqiyatli oʻzida mujassamlashtirib kelmoqda. shifobaxsh choy, asal, moy, sirop, holva va boshqalar ishlab chiqaradi.</p>
                        <img src={Organic} alt="organic" />
                    </div>
                    <div className="organicSection">
                        <button>Batafsil
                            <img src={Vector} />
                        </button>
                        <img src={PlayButton} alt="play button" />
                    </div>
                </div>
                <div className="organicImg">
                    <img src={GroupOrganic} alt="organic" />
                </div>
            </div>
        </>
    )
}