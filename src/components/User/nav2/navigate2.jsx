import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../images/User/Mehrigiyo_logo.png";
import NavIcon1 from "../../../images/User/nav-icon1.png";
import NavIcon2 from "../../../images/User/nav-icon2.png";
import NavIcon3 from "../../../images/User/nav-icon3.png";
import { NavLink } from "react-router-dom";
import Dropdown from "../Global_Dropdown/Dropdown";
import "./nav2.scss";
import AdminRouter from "../../Admin/AdminRouter/AdminRouter";
import { useDispatch } from "react-redux";
import { actionChangeRouter } from "../../../store/changeRouter/action";

const Navigate2 = () => {
  const [link, setLink] = useState(true);
  const navElements = {
    title1: `Bosh sahifa`,
    title2: `Onlayn shifokorlar`,
    title3: `Mahsulotlar`,
    title4: `Biz haqimizda`,
    title5: `Yangiliklar`,
    title6: `Yordam`,
  };
  const onlineDoctors = [
    { label: `Nevropotolog`, path: `/onlineDoctor` },
    { label: `Genetika`, path: `/onlineDoctor` },
    { label: `Stomatologiya`, path: `/onlineDoctor` },
    { label: `Jarrohlik`, path: `/onlineDoctor` },
    { label: `Hammasi +`, path: `/onlineDoctor` },
  ];
  const products = [
    { label: `Choy`, path: `/products` },
    { label: `Yog'lar`, path: `/products` },
    { label: `Ziravorlar`, path: `/products` },
    { label: `Asal`, path: `/products` },
    { label: `Tabletkalar`, path: `/products` },
    { label: `Hammasi +`, path: `/products` },
  ];
  const news = [
    { label: `Yangiliklar`, path: `/news` },
    { label: `Salomatlik sari`, path: `/news` },
  ];
  const helps = [
    { label: `Yordam`, path: `/help` },
    { label: `Ko'p so'raladigan savollar`, path: `/help` },
  ];
  const [adminRouter, setAdminRouter] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeUserRouter = (param) => {
    dispatch(actionChangeRouter("user"));
    setLink(param);
  };
  const changeAdminRouter = () => {
    dispatch(actionChangeRouter("admin"));
    navigate("/admin/control-panel");
  };
  const user = localStorage.getItem("user");
  return (
    <>
      <div className="nav2  GlobalWrapper">
        <div className="nav__wrapper">
          <NavLink to="/" className="nav-logo">
            <img src={Logo} alt="logo" />
          </NavLink>

          <div className="navcontainer">
            <div className="navTitles">
              <li className="title1">
                <Link to="/">{navElements.title1}</Link>
              </li>
              <li className="title2 item">
                {navElements.title2}
                <ul>
                  {onlineDoctors.map((item) => (
                    <Link to={item.path}>
                      <li>{item.label}</li>
                    </Link>
                  ))}
                </ul>
              </li>
              <li className="title3 item">
                {navElements.title3}
                <ul>
                  {products.map((item) => (
                    <Link to={item.path}>
                      <li>{item.label}</li>
                    </Link>
                  ))}
                </ul>
              </li>
              <li className="title4"><Link to="/aboutUs">{navElements.title4}</Link></li>
              <li className="title5 item">
                {navElements.title5}
                <ul>
                  {news.map((item) => (
                    <Link to={item.path}>
                      <li>{item.label}</li>
                    </Link>
                  ))}
                </ul>
              </li>
              <li className="title6 item">
                {navElements.title6}
                <ul>
                  {helps.map((item) => (
                    <Link to={item.path}>
                      <li>{item.label}</li>
                    </Link>
                  ))}
                </ul>
              </li>
            </div>
          </div>

          <div className="nav-icons">
            {user !== null ? (
              <img
                className="nav-icons__icon"
                src={NavIcon1}
                alt="icon"
                onClick={() => changeAdminRouter()}
              />
            ) : (
              <Link to={"/favoriteDoctors"}>
                <img className="nav-icons__icon" src={NavIcon1} alt="icon" />
              </Link>
            )}

            <Link to={"/favoriteDrug"}>
              {" "}
              <img className="nav-icons__icon" src={NavIcon2} alt="icon" />
            </Link>
            <img
              className="nav-icons__icon"
              src={NavIcon2}
              alt="icon"
              hidden={link}
            />

            <Link to={"/basket"}>
              <img className="nav-icons__icon" src={NavIcon3} alt="icon" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigate2;
