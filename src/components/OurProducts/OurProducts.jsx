import React from "react";
import "./OurProducts.scss";
import svg1 from "../../images/ourProductsImg1.svg";
import svg2 from "../../images/OurProducts2.svg";
import svg3 from "../../images/OurProducts3.svg";
import svg4 from "../../images/OurProducts4.svg";
import svg5 from "../../images/OurProducts5.svg";
import svg6 from "../../images/OurProducts6.svg";
import svg7 from "../../images/OurProducts7.svg";
import svg8 from "../../images/OurProducts8.svg";
import svg9 from "../../images/OurProducts9.svg";
import svg10 from "../../images/OurProducts10.svg";
import svg11 from "../../images/OurProducts11.svg";

const OurProducts = () => {
  const arr = [
    {
      img: svg1,
      text: "Sharbatlar",
      bcgColor: "#E4F4DF",
    },
    {
      img: svg2,
      text: "Sharbatlar",
      bcgColor: "#E1F0E8",
    },
    {
      img: svg3,
      text: "Sharbatlar",
      bcgColor: "#E4F4DF",
    },
    {
      img: svg4,
      text: "Sharbatlar",
      bcgColor: "#F1DEDD",
    },
    {
      img: svg5,
      text: "Sharbatlar",
      bcgColor: "#FBF1E4",
    },
    {
      img: svg6,
      text: "Sharbatlar",
      bcgColor: "#E4F4DF",
    },
    {
      img: svg7,
      text: "Sharbatlar",
      bcgColor: "#E6F1F9",
    },
    {
      img: svg8,
      text: "Sharbatlar",
      bcgColor: "#E4F4DF",
    },
    {
      img: svg9,
      text: "Sharbatlar",
      bcgColor: "#F9EBDE",
    },
    {
      img: svg10,
      text: "Sharbatlar",
      bcgColor: "#F0E5E0",
    },
    {
      img: svg11,
      text: "Sharbatlar",
      bcgColor: "#EEF4FC",
    },
  ];

  return (
    <div className="products__wrapper">
      {arr.map((item, index) => (
        <div key={index} className="OurProducts" style={{backgroundColor: item.bcgColor}}>
          <div className="OurProducts__img">
            <img src={item.img} />
          </div>
          <div className="OurProducts__text">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default OurProducts;
