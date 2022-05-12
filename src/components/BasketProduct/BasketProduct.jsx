import React from 'react'
import "./BasketProduct.scss"

import PlusIcon from "../../images/plus_icon.svg"
import MinusIcon from "../../images/minus_icon.svg"
import DeleteIcon from "../../images/delete_icon.svg"

export default function BasketProduct({data}) {
  return (
    <li className='product-item'>
        <div className="product-item__img">
            <img src={data.image} alt="" />
        </div>

        <div className="product-item__title">
            <p>{data.title}</p>
            <p>{data.info}</p>
        </div>

        <div className="product-item__quantity">
            <img src={MinusIcon} alt="" />
            <p>{data.quantity}</p>
            <img src={PlusIcon} alt="" />
        </div>

        <div className="product-item__price">
            <p>{data.previousPrice} uzs</p>
            <p>{data.currentPrice} uzs</p>
        </div>

        <button className='product-item__delete'>
            <img src={DeleteIcon} alt="" />
        </button>
    </li>
  )
}
