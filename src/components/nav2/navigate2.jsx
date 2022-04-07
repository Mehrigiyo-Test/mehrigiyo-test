import React from 'react';
import Logo from '../../images/Mehrigiyo_logo.png';
import NavVector from '../../images/nav2_vector.png';
import NavIcon1 from '../../images/nav-icon1.png';
import NavIcon2 from '../../images/nav-icon2.png';
import NavIcon3 from '../../images/nav-icon3.png';
import { NavLink, Link } from 'react-router-dom';

import './style.css'

const Navigate2 = () => {
    return (
        <div className='nav2'>
            <div className='nav__wrapper GlobalWrapper'>
                <Link to='/' className='nav-logo' >
                    <img src={Logo} alt="logo" />
                </Link>

                <ul>
                    <div class="dropdown">
                        <NavLink to='/' className='nav-link'><span>Bosh sahifa</span>
                        </NavLink>
                        {/* <div className="line"></div> */}
                    </div>
                    
                    <div class="dropdown">
                        <NavLink to='/onlineDoctor' className= 'nav-link'><span>Onlayn shifokorlar</span>
                            <img src={NavVector} alt="icon" />
                        </NavLink>
                        <div class="dropdown-content">
                            <a href="#">Nevropolog</a>
                            <a href="#">Genetika</a>
                            <a href="#">Stomatologiya</a>
                            <a href="#">Jarrohlik</a>
                            <a href="#">Hammasi +</a>
                        </div>
                    </div>
                    
                    <div class="dropdown">
                        <NavLink to='/products' className='nav-link'><span>Mahsulotlar</span>
                            <img src={NavVector} alt="icon" />
                        </NavLink>
                        <div class="dropdown-content">
                            <a href="#">Choy</a>
                            <a href="#">Yog'lar</a>
                            <a href="#">Ziravorlar</a>
                            <a href="#">Asal</a>
                            <a href="#">Tabletkalar</a>
                            <a href="#">Hammasi +</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <NavLink to='/aboutUs' className='nav-link'><span>Biz haqimizda</span></NavLink>
                    </div>
                    
                    <div class="dropdown">
                        <NavLink to='/news' className='nav-link'><span>Yangiliklar</span>
                            <img src={NavVector} alt="icon" />
                        </NavLink>
                        <div class="dropdown-content">
                            <a href="#">Yangiliklar</a>
                            <a href="#">Salomatlik sari</a>
                        </div>
                    </div>
                    
                    <div class="dropdown">
                        <NavLink to='/help' className='nav-link'><span>Yordam</span>
                            <img src={NavVector} alt="icon" />
                        </NavLink>
                        <div class="dropdown-content">
                            <a href="#">Yordam</a>
                            <a href="#">Ko'p so'raladigan savollar</a>
                        </div>
                    </div>
                </ul>
                {/* <div className='optionStyleNav2'><Option/></div> */}
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
