import React from 'react';
import Logo from '../../images/Mehrigiyo_logo.png';
import NavVector from '../../images/nav2_vector.png';
import NavIcon1 from '../../images/nav-icon1.png';
import NavIcon2 from '../../images/nav-icon2.png';
import NavIcon3 from '../../images/nav-icon3.png';

import './style.css'

const Navigate2 = () => {
    return (
        <div className='nav2 bc-color'>
            <div className='nav__wrapper GlobalWrapper'>
                <img className='nav-logo' src={Logo} alt="logo" />

                <ul>
                    <li className='nav-link'>Bosh sahifa</li>
                    <li>Onlayn shifokorlar
                        <img src={NavVector} alt="icon" />
                    </li>
                    <li className='nav-link'>Mahsulotlar
                        <img src={NavVector} alt="icon" />
                    </li>
                    <li className='nav-link'>Biz haqimizda</li>
                    <li className='nav-link'>Yangiliklar
                        <img src={NavVector} alt="icon" />
                    </li>
                    <li className='nav-link'>Yordam
                        <img src={NavVector} alt="icon" />
                    </li>
                </ul>

                <div className='nav-icons'>
                    <img className='nav-icons__icon' src={NavIcon1} alt="icon" />
                    <img className='nav-icons__icon' src={NavIcon2} alt="icon" />
                    <img className='nav-icons__icon' src={NavIcon3} alt="icon" />
                </div>
            </div>
        </div>
    );
}

export default Navigate2;
