import SearchIcon from "../../images/Search icon.svg";
import Basket_card__img from "../../images/product-item__image.png";
import ArrowRight from "../../images/arrow-right.svg";
import ArrowBottom from "../../images/Caret.svg";
import "./ProductList.scss";
import { useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import Pagination from "./Pagination/Pagination";

const ProductList = () => {
  const data = [
    {
      title: "Rastaropsha MAX",
      info: "Mavjud",
      type: "oil",
      currentPrice: "16 000",
      previousPrice: "17 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rohat Sirop",
      info: "Erkaklar kuchi",
      type: "spices",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "tea",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rastaropsha MAX",
      info: "Mavjud",
      type: "honey",
      currentPrice: "16 000",
      previousPrice: "17 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rohat Sirop",
      info: "Erkaklar kuchi",
      type: "tablets",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "tablets",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rastaropsha MAX",
      info: "Mavjud",
      type: "honey",
      currentPrice: "16 000",
      previousPrice: "17 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rohat Sirop",
      info: "Erkaklar kuchi",
      type: "tea",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "spices",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "oil",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },

    {
      title: "Rastaropsha MAX",
      info: "Mavjud",
      type: "honey",
      currentPrice: "16 000",
      previousPrice: "17 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rohat Sirop",
      info: "Erkaklar kuchi",
      type: "tablets",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "tablets",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rastaropsha MAX",
      info: "Mavjud",
      type: "honey",
      currentPrice: "16 000",
      previousPrice: "17 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "5555",
      info: "Erkaklar kuchi",
      type: "tea",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "spices",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "oil",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },

    {
      title: "Rastaropsha MAX",
      info: "Mavjud",
      type: "honey",
      currentPrice: "16 000",
      previousPrice: "17 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rohat Sirop",
      info: "Erkaklar kuchi",
      type: "tablets",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "tablets",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rastaropsha MAX",
      info: "Mavjud",
      type: "honey",
      currentPrice: "16 000",
      previousPrice: "17 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rohat Sirop",
      info: "Erkaklar kuchi",
      type: "tea",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "spices",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "oil",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },

    {
      title: "Rastaropsha MAX",
      info: "Mavjud",
      type: "honey",
      currentPrice: "16 000",
      previousPrice: "17 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rohat Sirop",
      info: "Erkaklar kuchi",
      type: "tablets",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "tablets",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rastaropsha MAX",
      info: "Mavjud",
      type: "honey",
      currentPrice: "16 000",
      previousPrice: "17 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "Rohat Sirop",
      info: "Erkaklar kuchi",
      type: "tea",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "spices",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
    {
      title: "ROHAT Yog`i №2",
      info: "Mavjud",
      type: "oil",
      currentPrice: "150 000",
      previousPrice: "200 190",
      image: Basket_card__img,
      id: Math.random(),
    },
  ];

  const [sortedData, setSortedData] = useState([]);
  const [active, setActive] = useState("products");

  const [pagination, setPagination] = useState(0);

  const handleActive = (e) => {
    const arr = ["products", "tea", "oil", "spices", "honey", "tablets"];

    for (let i = 0; i < arr.length; i++) {
      if (e.target.id !== arr[i]) {
        document.getElementById(arr[i]).classList.remove("active");
      } else {
        const sorted = [];

        e.target.classList.toggle("active");
        setActive(arr[i]);
        for (let item of data) {
          setPagination(0);
          if (item.type === arr[i]) {
            sorted.push(item);
          }
        }
        setSortedData(sorted);
      }
    }
  };

  return (
    <div className="ProductList">
      <div className="product-list-top-header">
        <h4>Mahsulotlarimiz ro'yxati</h4>
        <img src={SearchIcon} alt="" />

        <div className="product-select">
          <p>narx bo'yicha</p>
          <img src={ArrowBottom} alt="" />
        </div>
      </div>

      <nav className="product-list-header">
        <p className="active" id="products" onClick={(e) => handleActive(e)}>
          Hammasi
        </p>
        <p id="tea" onClick={(e) => handleActive(e)}>
          Choy
        </p>
        <p id="oil" onClick={(e) => handleActive(e)}>
          Yog’lar
        </p>
        <p id="spices" onClick={(e) => handleActive(e)}>
          Ziravorlar
        </p>
        <p id="honey" onClick={(e) => handleActive(e)}>
          Asal
        </p>
        <p id="tablets" onClick={(e) => handleActive(e)}>
          Tabletkalar
        </p>
      </nav>

      <div className="products-list">
        {active === "products"
          ? data
              .slice(0 + 5 * pagination, 5 + pagination * 5)
              .map((item) => <ProductCard key={item.id} data={item} />)
          : sortedData
              .slice(0 + 5 * pagination, 5 + pagination * 5)
              .map((item) => <ProductCard key={item.id} data={item} />)}
      </div>

      <div className="product-list-footer">
        <button className="all-products">
          <p>Barcha mahsulotlarni ko’rish</p>
          <img src={ArrowRight} alt="" />
        </button>
        <Pagination
          data={data}
          sortedData={sortedData}
          setPagination={setPagination}
          pagination={pagination}
          active={active}
        />
      </div>
    </div>
  );
};

export default ProductList;
