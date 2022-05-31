import React, { useState } from "react";
import "./TopDoctors.scss";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdOutlineBookmarkAdded } from "react-icons/md";

const TopDoctors = ({ text1,  img, setopen, func, id, setactive,}) => {
  const gg = () => {
    setopen("open");
    setactive("active");
    func(id);
  };
  const [clickSave, setClickSave] = useState(true);

  const ggg = (item) => {
    const firstName = item.split('')[0]
    const lastName = item.split(' ')[1]
    return `${firstName}. ${lastName}`
  }
 

  return (
    <div className="topDoctors">
      <div className="topDoctors__img">
        <div className="imgFirst">
          <img src={img} alt="  " />
          <button className="imgFirst__btn">TOP</button>
        </div>
        <span className="imgSecond">
          {clickSave ? (
            <MdOutlineBookmarkAdd onClick={() => setClickSave(!clickSave)} />
          ) : (
            <MdOutlineBookmarkAdded onClick={() => setClickSave(!clickSave)} />
          )}
        </span>
      </div>
      <p className="topDoctors__paragraph1">{ggg(text1)}</p>
      {/* <p className="topDoctors__paragraph2">{text2}</p> */}
      <button className="topDoctors__btn" onClick={gg}>
        Appoinment
      </button>
    </div>
  );
};

export default TopDoctors;
