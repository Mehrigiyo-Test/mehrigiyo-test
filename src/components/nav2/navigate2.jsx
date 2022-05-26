import React, { useState } from "react";
import Logo from "../../images/Mehrigiyo_logo.png";
// import { useNavigate } from 'react-router-dom';
import NavIcon1 from "../../images/nav-icon1.png";
import NavIcon2 from "../../images/nav-icon2.png";
import NavIcon3 from "../../images/nav-icon3.png";
import { Link } from "react-router-dom";
import Dropdown from "../Global_Dropdown/Dropdown";
import "./nav2.scss";

const Navigate2 = () => {
const [link, setLink]=useState(true)
  const navinfo = [
    {
      title: "Bosh sahifa",
      link: "/",
      set: true

    },
    {
      title: "Onlayn shifokorlar",
      link: "/onlineDoctor",
      dropdown: [
        { title: "Nevropolog", link: "/" },
        { title: "Genetika", link: "/" },
        { title: "Stomatologiya", link: "/" },
        { title: "Jarrohlik", link: "/" },
        { title: "Hammasi +", link: "/" },
      ],
    },
    {
      title: "Mahsulotlar",
      link: "/products",
      dropdown: [
        { title: "Choy", link: "/" },
        { title: "Yog'lar", link: "/" },
        { title: "Ziravorlar", link: "/" },
        { title: "Asal", link: "/" },
        { title: "Tabletkalar", link: "/" },
        { title: "Hammasi +", link: "/" },
      ],
    },
    {
      title: "Biz haqimizda",
      link: "/aboutUs",
      set : false
      // dropdown: []
    },
    {
      title: "Yangiliklar",
      link: "/news",
      dropdown: [
        { title: "Yangiliklar", link: "/" },
        { title: "Salomatlik sari", link: "/" },
      ],
    },
    {
      title: "Yordam",
      link: "/help",
      dropdown: [
        { title: "Yordam", link: "/" },
        { title: `Ko'p so'raladigan savollar`, link: "/" },
      ],
    },
  ];

  return (
    <div className="nav2  GlobalWrapper">
      <div className="nav__wrapper">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt="logo" />
        </Link>

        <div className="navcontainer">
          {navinfo.map((item, index) => (
            <div key={index} className={`nav_Head bg gb`}>
              {item.dropdown ? (
                <Dropdown
                  title={item.title}
                  link={item.link}
                  items={item.dropdown}
                  setLink={setLink}
                />
              ) : (
                <Link className="nav_Item" to={item.link} onClick={()=> setLink(item.set)}>
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="nav-icons">
          <a href="http://localhost:3001/">
            <img className="nav-icons__icon" src={NavIcon1} alt="icon" />
          </a>


          <img className="nav-icons__icon" src={NavIcon2} alt="icon" />
          <img className="nav-icons__icon" src={NavIcon2} alt="icon" hidden={link} />


          <img className="nav-icons__icon" src={NavIcon3} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navigate2;
