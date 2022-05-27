import React from 'react';
import BannerCardImg1 from '../../images/bannerCard-icon1.png';
import BannerCardImg2 from '../../images/bannerCard-icon2.png';

import './style.scss';

const Bannercard = () => {
    return (
        <div className='banner-card-wrapper GlobalWrapper'>
            <div className='banner-card'>
                <div className='banner-card__titles'>
                    <img className='banner-card__icon' src={BannerCardImg1} alt="icon" />
                    <h4 className='banner-card__titles__title'>Consultant</h4>
                </div>
                <p className='banner-card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper in et amet.</p>
            </div>

            <div className='banner-card card2'>
                <div className='banner-card__titles'>
                    <img className='banner-card__icon' src={BannerCardImg2} alt="icon" />
                    <h4 className='banner-card__titles__title'>24/7 xizmatlar</h4>
                </div>
                <p className='banner-card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper in et amet.</p>
            </div>
            
        </div>
    );
}

export default Bannercard;
