import React, { useEffect } from 'react';
import Line from '../../../images/User/line.png';
import InfoSectionIcon1 from '../../../images/User/infoCard-icon1.png';
import InfoSectionIcon2 from '../../../images/User/infoCard-icon2.png';
import InfoSectionIcon3 from '../../../images/User/infoCard-icon3.png';
import InfoSectionIcon4 from '../../../images/User/infoCard-icon1.png';
import './style.scss';


const Infosection = () => {
    
    return (
        <div className='info-section GlobalWrapper'>
            <div className='line-group'>
                <img className='line l2' src={Line} alt="line" />
            </div>
            <div className='info-section__cards'>
                <div className='info-section__card'>
                    <img src={InfoSectionIcon1} alt="icon" />
                    <div className='info-section__card__titles'>
                        <h4 className='info-section__card__titles__title'>Yetkazib berish bepul</h4>
                        <p className='info-section__card__titles__text'>100 000 so'mdan ortiq buyurtma berganingizda</p>
                    </div>
                </div>

                <div className='info-section__card'>
                    <img src={InfoSectionIcon2} alt="icon" />
                    <div className='info-section__card__titles'>
                        <h4 className='info-section__card__titles__title'>Tez to'lov</h4>
                        <p className='info-section__card__titles__text'>100% xavfsiz to'lov</p>
                    </div>
                </div>

                <div className='info-section__card'>
                    <img src={InfoSectionIcon3} alt="icon" />
                    <div className='info-section__card__titles'>
                        <h4 className='info-section__card__titles__title'>Doimiy chegirmalar</h4>
                        <p className='info-section__card__titles__text'>Ular allaqachon ishlamoqda</p>
                    </div>
                </div>

                <div className='info-section__card'>
                    <img src={InfoSectionIcon4} alt="icon" />
                    <div className='info-section__card__titles'>
                        <h4 className='info-section__card__titles__title'>Onlayn yordam</h4>
                        <p className='info-section__card__titles__text'>Ish vaqti: 08:00 - 18:00</p>
                    </div>
                </div>
            </div>
            <div className='line-group'>
                <img className='line l2' src={Line} alt="line" />
            </div>
        </div>
    );
}

export default Infosection;
