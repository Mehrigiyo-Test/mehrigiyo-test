
import React from 'react';
import './style.scss'

const Bannerform = ({type,placeholder,img,textBtn,img2}) => {
    return (
        <div className='banner-input bc-color'>

        <form className='form'>
            <input className='banner-input__input' type={type} placeholder={placeholder} />
            <img className='banner-input__icon' src={img}/>
            <button className='banner-input-btn'>
                <img src={img2}/>
                {textBtn}
            </button>
        </form>
        </div>
    );
}

export default Bannerform;
