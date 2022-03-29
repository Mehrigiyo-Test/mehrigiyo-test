import React from 'react';

import MainPhoto from '../../images/main.png';
import './style.css';

const Bannerinput = () => {
    return (
        <div className='banner-input bc-color bc-color2'>
            <div className='GlobalWrapper'>
                <div className='main-photo'>
                    <img src={MainPhoto} alt="photo" />
                </div>
            </div>
        </div>
    );
}

export default Bannerinput;
