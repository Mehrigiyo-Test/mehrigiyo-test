import React, { useEffect, useState } from "react";
import reload from "./../../../images/User/reload.png";
import down from "./../../../images/User/Down.png";
import Search from "../OnlineDoctor/Search/Search";
import ProductCard from "../../../components/User/ProductList/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import "./SortGoods.scss";
import { useSelector } from "react-redux";


function SortGoods() {
  const [all, setAll] = useState(true);
  const API = "http://207.154.244.140:8000/";
  const { getType } = useSelector((state) => state.getProductsTypes);
  const [productType, setProductType] = useState([]);
  
  const { data } = useSelector((state) => state.getProducts);
  const [products, setProducts] = useState(data);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }

    if (getType) {
      getType.forEach((item) => {
        item["checked"] = false;
        return item;
      });
      setProductType(getType);
    }
  }, [data]);

  function selectAll() {
    var ele = document.getElementsByName("good");
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == "checkbox") ele[i].checked = true;
      productType.forEach((element) => {
        element.checked = true;
      });
    }
    sortProducts();
  }

  function clean() {
    var ele = document.getElementsByName("good");
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == "checkbox") {
        ele[i].checked = false;
        getType.forEach((item) => {
          item.checked = false;
          return item;
        });
        setProductType(getType);
        setProducts(data);
      }
    }
  }

  const sortProducts = () => {
    let sortedDataIds = productType
      .filter((e) => e.checked === true)
      .map((m) => m.id);

    let res = data.filter((e) => sortedDataIds.indexOf(e.type_medicine) > -1);

    setProducts(res);
  };

  const getProductId = (e, item) => {
    document.getElementById("all").checked = false;
    item.checked = !item.checked;
    sortProducts();
    // return ;
  };

  return (
    <>
      <div className="GlobalWrapper Onlinewr">
        <div className="OnlineDoctorPg2GW">
          <div className="News1_wrapper DoctorNav title">
            <p>
              <Link to="/">Bosh sahifa</Link>
            </p>
            <span>/</span>
            <p>
              <a className="doctype" >
                Mahsulotlar
              </a>
            </p>
          </div>
          <div className="doc">
            <div className="displayLeft doc_left">
              <span>
                <h1>Mahsulotlar</h1>
              </span>
              <span className="rowFilter">
                <div className="News1_wrapper beetwenUs ">
                  <span style={{fontWeight: "700"}}>Saralash:</span>
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
                    <span className="clearFilter" onClick={clean}>
                      <img src={reload} alt="reload" />
                      <p>Tozalash</p>
                    </span>
                  </div>
                  <div className="checkGoods">
                    <div>
                      <input
                        type="checkbox"
                        id="all"
                        name="good"
                        onClick={selectAll}
                      />
                      <label for="all" style={{paddingLeft: '10px'}}>Hammasi</label>
                    </div>
                    {all ? productType.filter((_,index) => index < 8).map((item) => (
                      <div>
                        <input
                          type="checkbox"
                          id={item.id}
                          name="good"
                          onClick={(e) => getProductId(e, item)}
                        />
                        <label for={item.id} style={{paddingLeft: '10px'}}>{item.name}</label>
                      </div>
                    )):productType.map((item) => (
                      <div>
                        <input
                          type="checkbox"
                          id={item.id}
                          name="good"
                          onClick={(e) => getProductId(e, item)}
                        />
                        <label for={item.id} style={{paddingLeft: '10px'}}>{item.name}</label>
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
                {products.map((item) => (
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
