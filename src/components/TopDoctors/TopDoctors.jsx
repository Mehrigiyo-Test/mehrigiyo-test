import React from "react";
import "./TopDoctors.scss";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const TopDoctors = ({ text1, text2, img, setopen, func , id , setactive}) => {
  const gg = () =>{
    setopen('open')
    setactive('active')
    func(id)
  }
  return (
    <div className="topDoctors">
      <div className="topDoctors__img">
        <div className="imgFirst">
          {" "}
          <img src={img} alt="  " />
          <button className="imgFirst__btn">TOP</button>
        </div>
        <span className="imgSecond" >
          <MdOutlineBookmarkAdd className="colorYellow" tabIndex={1}/>
        </span>
      </div>
      <p className="topDoctors__paragraph1">{text1}</p>
      <p className="topDoctors__paragraph2">{text2}</p>
      <button className="topDoctors__btn" onClick={gg}>Appoinment</button>
    </div>
  );
};

export default TopDoctors;
