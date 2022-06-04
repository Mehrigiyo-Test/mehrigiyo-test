import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo2 from "../../../icons/Header/Logo.svg";
import NavIcon1 from "../../../images/User/nav-icon1.png";
import NavIcon2 from "../../../images/User/nav-icon2.png";
import NavIcon3 from "../../../images/User/nav-icon3.png";
import "./nav2.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionChangeRouter } from "../../../store/changeRouter/action";

const Navigate2 = () => {
  const navElements = {
    title: `Bosh sahifa`,
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const { changeRouterData } = useSelector((state) => state.changeRouter);
  const changeUserRouter = (param) => {
    if (changeRouterData === "admin") {
      dispatch(actionChangeRouter("user"));
      navigate(param);
    } else {
      navigate(param);
    }
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
          <Link to="/" className="nav-logo">
            <img src={logo2} alt="logo" />
          </Link>
          <div className="navcontainer">
            <div className="navTitles">
              <li
                className={path === "/" && "title nav_Item"}
                onClick={() => changeUserRouter("/")}
              >
                <p>{navElements.title}</p>
              </li>
              <li
                className={
                  path.includes('/onlineDoctor') ? "title2 item title" : "title2 item"
                }
              >
                <p>{navElements.title2}</p>
                <ul>
                  {onlineDoctors.map((item) => (
                    <li onClick={() => changeUserRouter(item.path)}>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={
                  path === "/products" ? "title3 item title" : "title3 item"
                }
              >
                <p>{navElements.title3}</p>
                <ul>
                  {products.map((item) => (
                    <li onClick={() => changeUserRouter(item.path)}>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={path === "/aboutUs" && "title nav_Item"}
                onClick={() => changeUserRouter("/aboutUs")}
              >
                <p>{navElements.title4}</p>
              </li>
              <li
                className={
                  path === "/news" ? "title5 item title" : "title5 item"
                }
              >
                <p>{navElements.title5}</p>
                <ul>
                  {news.map((item) => (
                    <li onClick={() => changeUserRouter(item.path)}>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={
                  path === "/help" ? "title6 item title" : "title6 item"
                }
              >
                <p>{navElements.title6}</p>
                <ul>
                  {helps.map((item) => (
                    <li onClick={() => changeUserRouter(item.path)}>
                      {item.label}
                    </li>
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
              <img className="nav-icons__icon" src={NavIcon2} alt="icon" />
            </Link>

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
