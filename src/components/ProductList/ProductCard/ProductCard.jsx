import { ReactComponent as LikeBIcon } from "../../../images/like-b-icon.svg";
import {ReactComponent as LikeIcon} from "../../../images/like-icon.svg"
import AddCardIcon from "../../../images/add-card.svg";
import ArrowRight from "../../../images/eva_arrow-ios-back-outline.svg";
import "./ProductCard.scss";
import { useState } from "react";

const ProductCard = ({ data }) => {
  const [like, setLike] = useState(false)

  return (
    <div className="product-lists-item">
      <div className="product-item__image">
        <img src={data.image} alt="" />
        {like ? (
          <LikeIcon onClick={() => setLike(!like)} />
        ) : (
          <LikeBIcon onClick={() => setLike(!like)} />
        )}
      </div>
      <div className="product-item__content">
        <p className="product-item__title">{data.title}</p>
        <p className="product-item__info">{data.info}</p>
        <div className="product-item__prices">
          <div className="product-item__price">
            <p className="product-item__previousPrice">
              {data.previousPrice} uzs
            </p>
            <p className="product-item__currentPrice">
              {data.currentPrice} uzs
            </p>
          </div>
          <div className="plus-white-icon">
            <img src={AddCardIcon} alt="" />
          </div>
        </div>

        <div className="product-item__detail">
          <p>Tafsilotlar</p>
          <img src={ArrowRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
