import React from "react";
import GlobalBtn from "../GlobalBtn/GlobalBtn";
import ProductCard from "./../ProductList//ProductCard/ProductCard";
import { FreeMode, Pagination } from "swiper";
import "./TopProductStyle.scss";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopProduct = () => {
  const API = "http://207.154.244.140:8000/";

  const { data } = useSelector((state) => state.getProducts);

  return (
    <>
      <div className="ProductList TopProductWrapper">
        <div className="TopPorductTxt">
          <h3>Top maxsulotlar</h3>
          <div>
            <Link to="/products/sortGoods">
              <GlobalBtn text="Barcha mahsulotlarni ko’rish" />
            </Link>
          </div>
        </div>
        <div>
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
            {data.map((item) => (
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
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TopProduct;
