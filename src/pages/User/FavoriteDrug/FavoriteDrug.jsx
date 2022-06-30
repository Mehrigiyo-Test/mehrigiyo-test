import React from 'react';
import { Link } from 'react-router-dom';
import "./FavoriteDrug.scss";
import Basket__img from '../../../images/User/box.gif';
import Back1 from '../../../images/User/BackgroundLeaves.png'

function FavoriteDrug() {
    return (
            <div className="GlobalWrapper for-height">
                <div className="link_home-page">
                    <Link className='text' to='/'>
                        Bosh sahifa
                    </Link>
                    <span className='text'>/</span>
                    <Link to={"/favoriteDrug"} className='text text_2'>Saqlangan dorilar</Link>
                </div>
                <h1 className='text-main'>Sevimli dorilar</h1>
                <div className="basket-details">
                    <div className="with-img">
                        <img className='basket-img' src={Basket__img} alt="" />
                        <div className="basket-number">0</div>
                    </div>
                    <h1 className='top-text'>Saqlangan dorilar bo’sh!</h1>
                    <p className="bottom-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                </div>
                <img className='back1' src={Back1} alt="" />
            </div>
    )
}

export default FavoriteDrug;
