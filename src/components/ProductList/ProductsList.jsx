import SearchIcon from "../../images/Search icon.svg";
import Basket_card__img from "../../images/product-item__image.png";
import ArrowRight from "../../images/arrow-right.svg";
import ArrowBottom from "../../images/Caret.svg";
import "./ProductList.scss";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import Api from "../../api/requestApi";
import { actionGetProduct } from "../../store/getProducts/action";
import { useDispatch, useSelector } from "react-redux";
import { actionGetProductsTypes } from "../../store/getProductsTypes/action";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";



const ProductList = ({ API }) => {
  const [sortedData, setSortedData] = useState([]);
  const [active, setActive] = useState("products");
  const [types, setTypes] = useState([]);

  const { data } = useSelector((state) => state.getProducts);
  const { getType } = useSelector((state) => state.getProductsTypes);
  console.log(data, "bu daata");
  console.log(getType, "bu getType");
  const dispatch = useDispatch();

 

  useEffect(() => {
    Api.get("/shop/medicines/").then((res) =>
      dispatch(actionGetProduct(res?.data?.data))
    );
  }, []);

  useEffect(() => {
    Api.get("/shop/types/").then((respon) =>
      dispatch(actionGetProductsTypes(respon?.data?.data))
    );
  }, []);

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
          <p><select className="drDown" name="cars" id="option">
            <optgroup label="ㅤㅤㅤ">
            <option className="drDown_opt" value="volvo">narx bo'yicha</option>
            <option className="drDown_opt" value="saab">Lorem bo'yicha</option>
            <option className="drDown_opt" value="opel">Opel bo'yicha</option>
            <option className="drDown_opt" value="audi">Audi bo'yicha</option>
            </optgroup>
              </select></p>
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
        clickable: true
      }}
      modules={{FreeMode, Pagination}}
      className="mySwiper"
      >
      <div className="products-list">
        {sortedData.length === 0
          ? data.map((item) => (
            <SwiperSlide>
              <ProductCard
                cost={item.cost}
                discount={item.discount}
                id={item.id}
                image={item.image}
                name={item.name}
                title={item.title}
                type={item.type_medicine}
                api={API}
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
                api={API}
              />
              </SwiperSlide>
            ))}
      </div>
      </Swiper>

      <div className="product-list-footer">
        <button className="all-products">
          <p>Barcha mahsulotlarni ko’rish</p>
          <img src={ArrowRight} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
