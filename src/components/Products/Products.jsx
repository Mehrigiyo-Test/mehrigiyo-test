import React from 'react'
import './Products.scss'
import Aspirine1 from '../../images/aspirine1.png'
import Aspirine2 from '../../images/aspirine2.png'
import Aspirine3 from '../../images/aspirine3.png'
import Aspirine4 from '../../images/aspirine4.png'
import Aspirine5 from '../../images/aspirine5.png'
import Like from '../../images/Vector-4.png'

export default function Products() {
    return (
        <div className='Products'>
            <div className="GlobalWrapper">
                <div className="Products-content">
                    <div className="Products-top">
                        <h2 className="Products-top-h2">Mahsulotlarimiz ro'yxati</h2>
                    </div>
                    <div className="Products-link">
                        <p className='Products-link-p-active'>Hammasi</p>
                        <p className='Products-link-p'>Choy</p>
                        <p className='Products-link-p'>Yog’lar</p>
                        <p className='Products-link-p'>Ziravorlar</p>
                        <p className='Products-link-p'>Asal</p>
                        <p className='Products-link-p'>Tabletkalar</p>
                    </div>

                    

                    <div className="Products-medicine">


                        <div className="Products-aspirine">
                            <div className="aspirine-images">
                                <img src={Aspirine1} alt="" className="aspirine1" />
                                <img src={Like} alt="" className="aspirine-like" />
                            </div>
                            <h2 className='medicine-h2'>ROHAT Yog`i №2</h2>
                            <p className='medicine-p'>Mavjud</p>
                            <div className="medicine-price-btn">
                                <div className="medicine-price">
                                    <p className="none-price">17,190, uzs</p>
                                    <p className="active-price">16 000 uzs</p>
                                </div>
                                <button className="medicine-btn">+</button>
                            </div>
                            <p className="Products-more">Tafsilotlar</p>
                        </div>

                        <div className="Products-aspirine">
                            <div className="aspirine-images">
                                <img src={Aspirine2} alt="" className="aspirine1" />
                                <img src={Like} alt="" className="aspirine-like" />
                            </div>
                            <h2 className='medicine-h2'>Rohat Sirop</h2>
                            <p className='medicine-p'>Erkaklar kuchi</p>
                            <div className="medicine-price-btn">
                                <div className="medicine-price">
                                    <p className="none-price">200,190, uzs</p>
                                    <p className="active-price">150 000 uzs</p>
                                </div>
                                <button className="medicine-btn">+</button>
                            </div>
                            <p className="Products-more">Tafsilotlar</p>
                        </div>

                        <div className="Products-aspirine">
                            <div className="aspirine-images">
                                <img src={Aspirine3} alt="" className="aspirine1" />
                                <img src={Like} alt="" className="aspirine-like" />
                            </div>
                            <h2 className='medicine-h2'>Organic Bananas</h2>
                            <p className='medicine-p'>7pcs, Price</p>
                            <div className="medicine-price-btn">
                                <div className="medicine-price">
                                    <p className="none-price">17,190, uzs</p>
                                    <p className="active-price">16 000 uzs</p>
                                </div>
                                <button className="medicine-btn">+</button>
                            </div>
                            <p className="Products-more">Tafsilotlar</p>
                        </div>

                        <div className="Products-aspirine">
                            <div className="aspirine-images">
                                <img src={Aspirine4} alt="" className="aspirine1" />
                                <img src={Like} alt="" className="aspirine-like" />
                            </div>
                            <h2 className='medicine-h2'>ROHAT Yog`i №2</h2>
                            <p className='medicine-p'>Mavjud</p>
                            <div className="medicine-price-btn">
                                <div className="medicine-price">
                                    <p className="none-price">17,190, uzs</p>
                                    <p className="active-price">16 000 uzs</p>
                                </div>
                                <button className="medicine-btn">+</button>
                            </div>
                            <p className="Products-more">Tafsilotlar</p>
                        </div>

                        <div className="Products-aspirine">
                            <div className="aspirine-images">
                                <img src={Aspirine5} alt="" className="aspirine1" />
                                <img src={Like} alt="" className="aspirine-like" />
                            </div>
                            <h2 className='medicine-h2'>Rohat Sirop</h2>
                            <p className='medicine-p'>Erkaklar kuchi</p>
                            <div className="medicine-price-btn">
                                <div className="medicine-price">
                                    <p className="none-price">200,190, uzs</p>
                                    <p className="active-price">150 000 uzs</p>
                                </div>
                                <button className="medicine-btn">+</button>
                            </div>
                            <p className="Products-more">Tafsilotlar</p>
                        </div>

                        
                    </div>

                    <button className="Products-btn">Barcha mahsulotlarni ko’rish</button>
                </div>
            </div>
        </div>
    )
}
