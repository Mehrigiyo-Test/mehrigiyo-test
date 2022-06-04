import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSortDoctorsType } from "../../../../../store/sortDoctorsType/action";
import "./CeckboxStyle.scss";

const Checkbox = ({ item,docType}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.sortDoctorsType);

  function selects() {
    var ele = document.getElementsByName("chec");
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == "checkbox") ele[i].checked = true;
      categories.forEach((element) => {
        element.checked = true;
      });
    }
    return console.log();
  }

  const gg = (e) => {
    if (e.target.id === "Hammasi") {
      selects();
      return dispatch(actionSortDoctorsType({}));
    } else {
      item.checked = !item.checked;
      return dispatch(actionSortDoctorsType({}));
    }
  };
  return (
    <>
      <div className="Chekbox">
        <input
          type="checkbox"
          id={item.name}
          onClick={(e) => gg(e)}
          name="chec"
        />
        <label for={item.name}>{item.name}</label>
        <br></br>
      </div>
    </>
  );
};

export default Checkbox;
