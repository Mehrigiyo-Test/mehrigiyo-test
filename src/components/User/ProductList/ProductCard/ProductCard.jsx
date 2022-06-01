import { ReactComponent as LikeBIcon } from "../../../../images/User/like-b-icon.svg";
import { ReactComponent as LikeIcon } from "../../../../images/User/like-icon.svg";
import AddCardIcon from "../../../../images/User/add-card.svg";
import ArrowRight from "../../../../images/User/eva_arrow-ios-back-outline.svg";
import "./ProductCard.scss";
import { useState } from "react";

const ProductCard = ({ cost, discount, id, image, name, title, type , api }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="product-lists-item" tabIndex={10}>
      <div className="product-item__image">
        <img src={api + image} alt="" />
        {like ? (
          <LikeIcon onClick={() => setLike(!like)} />
        ) : (
          <LikeBIcon onClick={() => setLike(!like)} />
        )}
      </div>
      <div className="product-item__content">
        <p className="product-item__title">{name}</p>
        <p className="product-item__info">{title}</p>
        <div className="product-item__prices">
          <div className="product-item__price">
            <p className="product-item__previousPrice">
              {cost} uzs
            </p>
            <p className="product-item__currentPrice">
              {discount} uzs
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
