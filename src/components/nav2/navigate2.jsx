import React from 'react';
import Logo from '../../images/Mehrigiyo_logo.png';
import NavVector from '../../images/nav2_vector.png';
import NavIcon1 from '../../images/nav-icon1.png';
import NavIcon2 from '../../images/nav-icon2.png';
import NavIcon3 from '../../images/nav-icon3.png';
import { Link } from 'react-router-dom';

import './style.css'

const Navigate2 = () => {
    return (
        <div className='nav2 bc-color'>
            <div className='nav__wrapper GlobalWrapper'>
<<<<<<< HEAD
                <div className='nav-logo-wrapper'>
                <img className='nav-logo' src={Logo} alt="logo" />
                </div>
=======
                <Link to='/' className='nav-logo' >
                    <img src={Logo} alt="logo" />
                </Link>
>>>>>>> 99045d7e1bd4eb16dd5af57dc12d34cca1bd4551

                <ul>
                    <Link to='/' className='nav-link'>Bosh sahifa</Link>
                    <Link to='/onlineDoctor'>Onlayn shifokorlar
                        <img src={NavVector} alt="icon" />
                    </Link>
                    <Link to='/products' className='nav-link'>Mahsulotlar
                        <img src={NavVector} alt="icon" />
                    </Link>
                    <Link to='/aboutUs' className='nav-link'>Biz haqimizda</Link>
                    <Link to='/news' className='nav-link'>Yangiliklar
                        <img src={NavVector} alt="icon" />
                    </Link>
                    <Link to='/help' className='nav-link'>Yordam
                        <img src={NavVector} alt="icon" />
                    </Link>
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
