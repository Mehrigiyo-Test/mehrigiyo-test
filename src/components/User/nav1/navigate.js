import React, { useState } from "react";
import "./navStyles.scss";
import lokatsa from "../../../images/User/Vector.png";
import profile from "../../../images/User/profile.png";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../../Admin/Modal/Modal";
import Login from "../../Admin/Modal/_components/Login/Login";
import avatar from "../../../images/Admin/Men.jpg"
function Navigate() {
  const [open, setOpen] = useState(false);
  const nav = [
    {
      name: "Mahsulotlar katalogi",
    },
    {
      name: "Foto-lavhalar",
    },
    {
      name: "Yetkazib berish va to'lash",
    },
    {
      name: "Aksiya",
    },
    {
      name: "Yangi",
    },
  ];

  const user = localStorage.getItem("user");
  const userObj = JSON.parse(user);

  return (
    <div className="navigate">
      <div className="navigate__wrapper GlobalWrapper">
        <nav className="nav1">
          <ul className="ul">
            {nav.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </nav>

        <div className="navigate2">
          <Dropdown />
          <div className="location">
            <p className="locat">Toshkent shahar</p>
            <div className="lokatsa">
              <img src={lokatsa} alt="" />
            </div>
          </div>
          {user === null ? (
            <div className="login" onClick={() => setOpen(true)}>
              <p className="locat">Kirish</p>
              <div className="profil">
                <img src={profile} />
              </div>
            </div>
          ) : (
            <div className="AdminNav">
              <div className="AdminNavImg"><img src={avatar} alt=""/></div>
              <div className="AdminNavTitle">{userObj.last_name[0] + "." + userObj.first_name}</div>{" "}
            </div>
          )}
        </div>
      </div>

      {open && <Modal children={<Login setOpen={setOpen} />} prop={setOpen} />}
    </div>
  );
}

export default Navigate;
