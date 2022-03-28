import React from 'react';

import MainPhoto from '../../images/main.png'
// import Barg from '../../images/barg.png';
import './style.css';

const Bannerinput = () => {
    return (
        <div className='banner-input bc-color bc-color2'>
            <div className='GlobalWrapper'>
                {/* <form className='form'>
                    <input className='banner-input__input' type="text" placeholder='Nima izlayapsiz?' />
                    <img className='banner-input__icon' src={BannerInputIcon} alt="icon" />
                    <button className='banner-input-btn'>
                        <img src={BannerInputLupa} alt="icon" />
                        Qidirish
                    </button>
                </form> */}
            </div>
            <div className='main-photo'>
                <img src={MainPhoto} alt="" />
            </div>
        </div>
    );
}

export default Bannerinput;
