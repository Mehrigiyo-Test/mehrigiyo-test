import SearchIcon from "../../../images/User/Search icon.svg";
import Basket_card__img from "../../../images/User/product-item__image.png";
import ArrowRight from "../../../images/User/arrow-right.svg";
import ArrowBottom from "../../../images/User/Caret.svg";
import "./ProductList.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import ProductCard from "./ProductCard/ProductCard";
// import required modules
import { FreeMode, Pagination } from "swiper";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [sortedData, setSortedData] = useState([]);
  const [types, setTypes] = useState([]);

  const { data } = useSelector((state) => state.getProducts);
  const { getType } = useSelector((state) => state.getProductsTypes);
  console.log(data, "bu produckt data");
  const handleSort = (e) => {
    const array = [];
    const arr = getType.map((item) => item.id);
    setTypes(arr);
    if (e.target.id === "all") {
      setSortedData(data);
    } else {
      data.filter((item) => {
        types.forEach((item2) => {
          if (e.target.id == item2 && item.type_medicine === item2) {
            array.push(item);
            setSortedData(array);
          }
        });
      });
    }
  };

  return (
    <div className="ProductList">
      <div className="product-list-top-header">
        <h4>Mahsulotlarimiz ro'yxati</h4>
        <img src={SearchIcon} alt="" />

        <div className="product-select">
          <p>
            <select className="drDown" name="cars" id="option">
              <optgroup label="ㅤㅤㅤ">
                <option className="drDown_opt" value="volvo">
                  narx bo'yicha
                </option>
                <option className="drDown_opt" value="saab">
                  Lorem bo'yicha
                </option>
                <option className="drDown_opt" value="opel">
                  Opel bo'yicha
                </option>
                <option className="drDown_opt" value="audi">
                  Audi bo'yicha
                </option>
              </optgroup>
            </select>
          </p>
        </div>
      </div>

      <nav className="product-list-header">
        <p className="active" id="all" onClick={(e) => handleSort(e)}>
          Hammasi
        </p>
        <p id="2" onClick={(e) => handleSort(e)}>
          Choy
        </p>
        <p id="3" onClick={(e) => handleSort(e)}>
          Yog’lar
        </p>
        <p id="4" onClick={(e) => handleSort(e)}>
          Ziravorlar
        </p>
        <p id="5" onClick={(e) => handleSort(e)}>
          Asal
        </p>
        <p id="6" onClick={(e) => handleSort(e)}>
          Tabletkalar
        </p>
      </nav>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={{ FreeMode, Pagination }}
        className="mySwiper"
      >
        <div className="products-list">
          {sortedData.length === 0
            ? data?.map((item) => (
                <SwiperSlide>
                  <ProductCard
                    cost={item.cost}
                    discount={item.discount}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    title={item.title}
                    type={item.type_medicine}
                  
                  />
                </SwiperSlide>
              ))
            : sortedData.map((item) => (
                <SwiperSlide>
                  <ProductCard
                    cost={item.cost}
                    discount={item.discount}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    title={item.title}
                    type={item.type_medicine}
                   
                  />
                </SwiperSlide>
              ))}
        </div>
      </Swiper>

      <div className="product-list-footer">
          <Link to="/products/sortGoods">
        <button className="all-products">
            <p>Barcha mahsulotlarni ko’rish</p>
            <img src={ArrowRight} alt="" />
        </button>
          </Link>
      </div>
    </div>
  );
};

export default ProductList;
