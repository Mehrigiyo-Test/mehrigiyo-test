import React, { useEffect, useState } from "react";
import "./TopDoctors.scss";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { useDispatch } from "react-redux";
import { actionFavoriteDocId } from "../../../store/postFavoriteDoctorId/action";
import { deletedFavoriteDocId } from "../../../store/deleteFavoriteDoctorId/action";
import { actionFavoriteDoc } from "../../../store/getFavoriteDoctors/action";

const TopDoctors = ({
  text1,
  img,
  setopen,
  func,
  id,
  data,
  setactive,
  addedFav,
}) => {
  const gg = () => {
    setopen("open");
    setactive("active");
    func(id);
  };

  const ggg = (item) => {
    const firstName = item.split("")[0];
    const lastName = item.split(" ")[1];
    return `${firstName}. ${lastName}`;
  };

  const dispatch = useDispatch();

  const addFavoriteDoctors = async (id) => {
    await dispatch(actionFavoriteDocId(id));
    await dispatch(actionFavoriteDoc());
    window.location.reload(false)
    return <a href="#topdoc"></a>
  };
  const deleteFavoriteDoctors = async (id) => {
    await dispatch(deletedFavoriteDocId(id));
    await dispatch(actionFavoriteDoc());
  };

  return (
    <div className="topDoctors">
      <div className="topDoctors__img">
        <div className="imgFirst">
          <img src={img} alt="  " />
          <button className="imgFirst__btn">TOP</button>
        </div>
        <span className="imgSecond">
          {!addedFav(data.id) ? (
            <MdOutlineBookmarkAdd onClick={() => addFavoriteDoctors(data.id)} />
          ) : (
            <MdOutlineBookmarkAdded
              onClick={() => deleteFavoriteDoctors(data.id)}
              color={"green"}
            />
          )}
        </span>
      </div>
      <p className="topDoctors__paragraph1">{ggg(text1)}</p>
      <p className="topDoctors__paragraph2">⭐️ 4.7 (233 reviews)</p>
      <button className="topDoctors__btn" onClick={gg}>
        Appoinment
      </button>
    </div>
  );
};

export default TopDoctors;
