import React from 'react';
import { Link } from 'react-router-dom';
import "./FavoriteDrug.scss";
import Basket__img from '../../images/basket__main.png';
import Basket__number from '../../images/basket__main-number.png';
import Back1 from '../../images/basket__back1.png'
import Back2 from '../../images/basket__back2.png'

function FavoriteDrug() {
    return (
            <div className="GlobalWrapper for-height">
                <div className="link_home-page">
                    <Link className='text' to='/'>
                        Bosh sahifa
                    </Link>
                    <span className='text'>/</span>
                    <span className='text text_2'>Saqlangan dorilar</span>
                </div>
                <h1 className='text-main'>Sevimli dorilar</h1>
                <div className="basket-details">
                    <div className="with-img">
                        <img className='basket-img' src={Basket__img} alt="" />
                        <img className='basket-number' src={Basket__number} alt="" />
                    </div>
                    <h1 className='top-text'>Saqlangan dorilar bo’sh!</h1>
                    <p className="bottom-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                    <img className='back1' src={Back1} alt="" />
                </div>
            </div>
    )
}

export default FavoriteDrug;
