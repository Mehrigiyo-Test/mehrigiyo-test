import React from 'react';
import MainPhoto from '../../images/main.png';
import './style.scss';

const Bannerinput = () => {
    return (
        <div className='banner-input bc-color bc-color2'>
            <div className='GlobalWrapper'>
                <div className='main-photo'>
                    <img src={MainPhoto} alt="photo" onMouseDown={()=> alert('This image is Copyrighted')}/>
                </div>
            </div>
        </div>
    );
}

export default Bannerinput;
