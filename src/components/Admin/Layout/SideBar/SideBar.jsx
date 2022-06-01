import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./SideBar.module.scss";

import Modal from "../../Modal/Modal";
import Edit from "../../Modal/_components/Edit/Edit";
import EditUpdate from "../../Modal/_components/Update/Update";

import { ReactComponent as Pen } from "./../../../icons/Sidebar/Pen.svg";
import { ReactComponent as ControlPanel } from "./../../../icons/Sidebar/ControlPanel.svg";
import { ReactComponent as Consultation } from "./../../../icons/Sidebar/Consultation.svg";
import { ReactComponent as DeliveryAddress } from "./../../../icons/Sidebar/DeliveryAddress.svg";
import { ReactComponent as LogOut } from "./../../../icons/Sidebar/LogOut.svg";
import { ReactComponent as Notification } from "./../../../icons/Sidebar/Notification.svg";
import { ReactComponent as Orders } from "./../../../icons/Sidebar/Orders.svg";
import { ReactComponent as PaymentMethods } from "./../../../icons/Sidebar/PaymentMethods.svg";
import { ReactComponent as Setting } from "./../../../icons/Sidebar/Setting.svg";
import { getCurrentUser, logout } from "../../../services/auth-service";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState("edit");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const onPushPath = (href) => {
    navigate({ pathname: `/admin${href}` });
  };

  const edit = () => {
    setOpen(true);
    setShow("edit");
  };

  const logoutUser = () => {
    logout();
    navigate("/");
    window.location.reload(false);
  };

  useEffect(() => {
    let user = getCurrentUser();
    setUser(user);
  }, []);

  const pageTitle = [
    {
      icon: <ControlPanel />,
      text: `Boshqaruv paneli`,
      href: `/control-panel`,
    },
    { icon: <Consultation />, text: `Konsultatsiya`, href: `/consultation` },
    { icon: <Orders />, text: `Buyurtmalar`, href: `/orders` },
    {
      icon: <DeliveryAddress />,
      text: `Yetkazish manzili`,
      href: `/delivery-address`,
    },
    {
      icon: <PaymentMethods />,
      text: `To'lov usullari`,
      href: `/payment-methods`,
    },
    { icon: <Notification />, text: `Bildirishnomalar`, href: `/notifications` },
    { icon: <Setting />, text: `Sozlamalar`, href: `/setting` },
  ];

  return (
    <section className={style.container}>
      {user != null && (
        <>
          <div className={style.user}>
            <div>
              <span className={style.avatar}>
                {user.avatar != null ? (
                  <img src={user.avatar} alt="user" />
                ) : (
                  <span className={style.userWithoutAvatar}>
                    {user.first_name[0] + user.last_name[0]}
                  </span>
                )}
              </span>
              <span>
                <h4 className={style.h4}>{user.first_name}</h4>
                <h4 className={style.h4}>{user.last_name}</h4>
                <p className={style.p}>+{user.username}</p>
              </span>
            </div>
            <span className={style.pen} onClick={edit}>
              <Pen />
            </span>
          </div>
          <div className={style.wrapper}>
            {pageTitle.map((item, index) => (
              <div
                className={style.pageTitle}
                key={index}
                onClick={() => onPushPath(item.href)}
              >
                <span className={style.flex}>{item.icon}</span>
                <h3 className={style.h3}>{item.text}</h3>
              </div>
            ))}
          </div>
          <div className={style.logout} onClick={logoutUser}>
            <span>
              <LogOut />
            </span>
            <p className={style.log}>
              <Link to={"/"}>Log Out</Link>
            </p>
          </div>
        </>
      )}

      {open ? (
        <div>
          {show === "edit" ? (
            <Modal children={<Edit setShow={setShow} />} prop={setOpen} />
          ) : show === "update" ? (
            <Modal children={<EditUpdate setOpen={setOpen} />} prop={setOpen} />
          ) : null}
        </div>
      ) : null}
    </section>
  );
};

export default SideBar;
