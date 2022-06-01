import React from "react";
import reload from "./../../images/reload.png";
import down from "./../../images/Down.png";
import Search from "../OnlineDoctor/Search/Search";
import Checkbox from "../OnlineDoctor/List/Checkbox/Checkbox";
import ProductCard from "../../components/ProductList/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import './SortGoods.scss';
import { useSelector } from "react-redux";

function SortGoods() {
  const API = "http://207.154.244.140:8000/";

  const goods = [
    {
      name: "Hammasi",
    },
    {
      name: "Choy",
    },
    {
      name: "Asal",
    },
    {
      name: "Yog’",
    },
    {
      name: "Non",
    },
    {
      name: "Ziravorlar",
    },
    {
      name: "Sharbatlar",
    },
    {
      name: "Lolipoplar",
    },
    {
      name: "Tabletkalar",
    },
  ];

  const {data} = useSelector((state) => state.getProducts);
console.log(data);
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
                    Ayol
                  </span>
                  <span tabIndex={1} className="doctype">
                    Erkak
                  </span>
                </div>
              </span>
            </div>
            <div className="displayRight">
              <span className="Qidiruv">
                <Search top={"75px"} right={'60px'} />
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
                    {goods.map((item, index) => (
                      <Checkbox key={index} name={item.name} />
                      ))}
                </div>
                <div className="moore">
                  <div>
                    <img src={down} alt="" />
                  </div>
                  <div>Ko'proq</div>
                </div>
                      </div>
              </div>
              
              <div className="productGoods">
                {data.map(item => (
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
