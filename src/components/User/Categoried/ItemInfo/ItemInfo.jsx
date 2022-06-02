import React from 'react'
import './ItemInfo.scss';
import leaves from '../../../images/Group3.png';
import leaves2 from '../../../images/leafAnother.png';
import small_img from '../../../images/mehrigiyo2-500x500 1.png';
import small_img2 from '../../../images/mehrigiyo2-500x500 2.png';
import big_img from '../../../images/mehrigiyo2-500x500 3.png';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {IoSearchCircleOutline} from 'react-icons/io5'
import AllInfo from './AllInfo/AllInfo';
import stars from "../../../images/stars.png";

export default function ItemInfo() {
    return (
        <div className='item_modal'>
            <div className="leaves_bg"><img src={leaves} alt="" /></div>
            <div className="closing">
                <div className="empty_x"></div>
                <div ><AiOutlineCloseCircle className="close_x"/></div>
            </div>
            <div className="modal_info">
                <div className="modal_img">
                    <div className="item_small_img">
                        <div className='small_img1'><img src={small_img} alt="" /></div>
                        <div className='small_img2'><img src={small_img2} alt="" /></div>
                    </div>
                    <div className="item_big_img">
                        <img src={big_img} alt="" />
                    </div>
                    <div ><IoSearchCircleOutline className='search_icon'/></div>
                </div>
                <div className="modal_txt">
                    <AllInfo 
                        heading="Rastaropsha MAX"
                        stars={stars}
                        price="16000"
                    />
                </div>
            </div>
            <div className="parent">
                <button className='add_basket'>Savatga qo'shish</button>
            </div>
            <div className="leaves_bg2"><img src={leaves2} alt="" /></div>
        </div>
    )
}
