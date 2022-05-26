import React from 'react';
import { Link } from 'react-router-dom';
import "./FavoriteDoctors.scss";
import Basket__img from '../../images/basket__main.png';
import Back1 from '../../images/BackgroundLeaves.png'

function FavoriteDoctors() {
    return (
            <div className="GlobalWrapper for-height">
                <div className="link_home-page">
                    <Link className='text' to='/'>
                        Bosh sahifa
                    </Link>
                    <span className='text'>/</span>
                    <Link to={"/favoriteDoctors"} className='text text_2'>Saqlangan shifokorlar</Link>
                </div>
                <h1 className='text-main'>Sevimli shifokorlar</h1>
                <div className="basket-details">
                    <div className="with-img">
                        <img className='basket-img' src={Basket__img} alt="" />
                        <div className="basket-number">0</div>
                    </div>
                    <h1 className='top-text'>Saqlangan shifokorlar bo’sh!</h1>
                    <p className="bottom-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                </div>
                <img className='back1' src={Back1} alt="" />
            </div>
    )
}

export default FavoriteDoctors;
