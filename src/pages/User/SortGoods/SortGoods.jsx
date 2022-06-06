import React, { useState } from "react";
import reload from "./../../../images/User/reload.png";
import down from "./../../../images/User/Down.png";
import Search from "../OnlineDoctor/Search/Search";
import Checkbox from "../OnlineDoctor/List/Checkbox/Checkbox";
import ProductCard from "../../../components/User/ProductList/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import "./SortGoods.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionSortProduct } from "../../../store/sortProduct/action";

function SortGoods() {
  const [all, setAll] = useState(true);
  const [sortData, setSortData] = useState([])
  const API = "http://207.154.244.140:8000/";
  const { productType } = useSelector((state) => state.sortProductType);
  const { getType } = useSelector((state) => state.getProductsTypes);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getProducts);
  console.log(data);
  console.log(productType, " bu productType data ");






  function selects() {
    var ele = document.getElementsByName("good");
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == "checkbox") ele[i].checked = true;
      productType.forEach((element) => {
        element.checked = true;
      });
    }
    return console.log();
  }
  const sortArr = productType
    .filter((e) => e.checked === true)
    .map((item) => item.name);
  const str = sortArr.map((item) => item).join("");
  console.log(str, "bu bosilgan type");
  
  


//   const prodType = productType.filter((item) =>
//   str.includes(item)
// );
// console.log(prodType, " bu prod fddfdf");


  const getProductId = (e,item) => {
    if (e.target.id === "Hammasi") {
      selects();
      return dispatch(actionSortProduct({}));
    } else {
      item.checked = !item.checked;
      return dispatch(actionSortProduct({}));
    }
  };

  return (
    <>
      <div className="GlobalWrapper Onlinewr">
        <div className="OnlineDoctorPg2GW">
          <div className="News1_wrapper DoctorNav">
            <p>
              <Link to="/">Bosh sahifa</Link>
            </p>
            <span>/</span>
            <p>
              <a tabIndex={1} className="doctype" href="/OnlineDoctor">
                Mahsulotlar
              </a>
            </p>
          </div>
          <div className="doc">
            <div className="displayLeft">
              <span>
                <h1>Mahsulotlar</h1>
              </span>
              <span className="rowFilter">
                <div className="News1_wrapper beetwenUs ">
                  <span>Saralash:</span>
                  <span tabIndex={1} className="doctype">
                    Yangi
                  </span>
                  <span tabIndex={1} className="doctype">
                    Top
                  </span>
                  <span tabIndex={1} className="doctype">
                    Narx
                  </span>
                  <span tabIndex={1} className="doctype">
                    Erkak
                  </span>
                </div>
              </span>
            </div>
            <div className="displayRight">
              <span className="Qidiruv">
                <Search top={"75px"} right={"60px"} />
              </span>
            </div>
          </div>
          <div className="headContainer">
            <div className="containerBox">
              <div>
                <div className="filterWr">
                  <div className="display clearFF">
                    <h5>Kategoriyalar</h5>
                    <span className="clearFilter">
                      <img src={reload} alt="reload" />
                      <p>Tozalash</p>
                    </span>
                  </div>
                  <div className="checkGoods">
                    {productType.map((item) => (
                      <div>
                        <input
                          type="checkbox"
                          id={item.name}
                          name="good"
                          onClick={(e) => getProductId(e,item)}
                          
                        />
                        <label for={item.name}>{item.name}</label>
                      </div>
                    ))}
                  </div>
                  {all ? (
                    <div className="moore">
                      <div>
                        <img src={down} alt="" />
                      </div>
                      <div onClick={() => setAll(!all)}>Ko'proq</div>
                    </div>
                  ) : (
                    <div className="moore">
                      <div>
                        <img src={down} alt="" className="down" />
                      </div>
                      <div onClick={() => setAll(!all)}>Kamroq</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="productGoods">
                {data.map((item) => (
                  <ProductCard
                    image={item.image}
                    name={item.name}
                    title={item.title}
                    cost={item.cost}
                    discount={item.discount}
                    api={API}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SortGoods;
