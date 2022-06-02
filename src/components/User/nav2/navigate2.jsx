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
  const navinfo = [
    {
      title: "Bosh sahifa",
      link: "/",
      set: true,
      path: "user",
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
      set: false,
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
            {navinfo.map((item, index) => (
              <div key={index} className={`nav_Head `}>
                {item.dropdown ? (
                  <Dropdown
                    title={item.title}
                    link={item.link}
                    items={item.dropdown}
                    setLink={setLink}
                  />
                ) : (
                  <NavLink
                    className="nav_Item"
                    to={item.link}
                    onClick={() => changeUserRouter(item.set)}
                  >
                    {item.title}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          <div className="nav-icons">
          { user !== null ?
           <img
              className="nav-icons__icon"
              src={NavIcon1}
              alt="icon"
              onClick={() => changeAdminRouter()}
            /> 
            :  <Link to={'/favoriteDoctors'}>
            <img
            className="nav-icons__icon"
            src={NavIcon1}
            alt="icon" />
            </Link>
            }

         <Link to={'/favoriteDrug'}>   <img className="nav-icons__icon" src={NavIcon2} alt="icon" /></Link>
            <img
              className="nav-icons__icon"
              src={NavIcon2}
              alt="icon"
              hidden={link}
            />

            <Link to={'/basket'}><img className="nav-icons__icon" src={NavIcon3} alt="icon" /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigate2;
