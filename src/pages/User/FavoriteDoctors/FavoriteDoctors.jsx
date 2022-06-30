import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FavoriteDoctors.scss";
import Basket__img from "../../../images/User/basket__main.png";
import Back1 from "../../../images/User/BackgroundLeaves.png";
import box from "../../../images/User/box.gif";
import { useDispatch, useSelector } from "react-redux";
import { actionFavoriteDoc } from "../../../store/getFavoriteDoctors/action";
import TopDoctors from "../../../components/User/TopDoctors/TopDoctors";
import Progress from "../../../components/User/Progress/Progress";
function FavoriteDoctors() {
  const dispatch = useDispatch();
  const API = "http://207.154.244.140:8000/";

  const { favoriteDoc, loading } = useSelector(
    (state) => state.getFavoriteDoctors
  );
  const addedFav = (id) => {
    return favoriteDoc.filter((a) => a.id === id).length > 0;
  };
  console.log(loading, "bu loading dok");
  useEffect(() => {
    dispatch(actionFavoriteDoc());
  }, []);
  return (
    <div className="GlobalWrapper for-height">
      <div className="link_home-page">
        <Link className="text" to="/">
          Bosh sahifa
        </Link>
        <span className="text">/</span>
        <Link to={"/favoriteDoctors"} className="text text_2">
          Saqlangan shifokorlar
        </Link>
      </div>
      <h1 className="text-main">Sevimli shifokorlar</h1>

      {favoriteDoc.length !== 0 ? (
        <section style={{ display: "flex", flexWrap: "wrap" }}>
          {favoriteDoc.map((item) => (
            <div key={item.id}>
              <TopDoctors
                id={item.id}
                img={API + item.image}
                text1={item.full_name}
                text2={item.type_doctor.name}
                addedFav={addedFav}
                data={item}
              />
            </div>
          ))}
        </section>
      ) : (
        <section>
          <div className="basket-details">
            <div className="with-img">
              <img className="basket-img" src={box} alt="" />
              <div className="basket-number">0</div>
            </div>
            <h1 className="top-text">Saqlangan shifokorlar bo’sh!</h1>
            <p className="bottom-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor
            </p>
          </div>
          <img className="back1" src={Back1} alt="" />
        </section>
      )}
      {/* {loading && <Progress />} */}
    </div>
  );
}

export default FavoriteDoctors;
