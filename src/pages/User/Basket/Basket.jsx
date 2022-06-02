import React, {useEffect, useState} from "react";
import "./Basket.scss";
import Basket_card__img from "../../../images/User/basket_product.png"
import BasketEmpty from "./Empty/BasketEmpty";
import BasketProducts from "./Empty/BasketProducts";
import { Link } from "react-router-dom";

function Basket() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(
      [
        {
          title: "Rastaropsha MAX",
          info: "Mavjud",
          quantity: 0,
          currentPrice: "16 000",
          previousPrice: "17 190", 
          image: Basket_card__img
        },
        {
          title: "Rohat Sirop",
          info: "Erkaklar kuchi",
          quantity: 0,
          currentPrice: "150 000",
          previousPrice: "200 190", 
          image: Basket_card__img
        }
      ]
    )
  }, [])
  

  return (
    <div className="GlobalWrapper for-height">
      <div className="link_home-page">
        <Link className="text" to="/">
          Bosh sahifa
        </Link>
        <span className="text">/</span>
        <Link to={"/basket"} className="text text_2">
          Savatcha
        </Link>
      </div>
      {data.length ? <BasketProducts data = {data}  /> : <BasketEmpty />}
    </div>
  );
}

export default Basket;
