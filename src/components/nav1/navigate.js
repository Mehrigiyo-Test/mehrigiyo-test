import React from "react";
import "./navStyles.css";
import lokatsa from "../../images/Vector.png";
import profile from "../../images/profile.png";
import Dropdown from "../Dropdown/Dropdown";
import Api from "../../Servis/ServisApi";



function Navigate() {
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

  Api.get('/specialist/doctors/')
    .then((response) => console.log(response))

  return (
    <div className="navigate">
      <div className="navigate__wrapper GlobalWrapper">
        <nav className="nav1">
          <ul className="ul">
            {nav.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </nav>

        <div className="navigate2">
          <Dropdown />
          <div className="location">
            <p className="locat">Toshkent shahar</p>
            <div className="lokatsa">
              <img src={lokatsa} />
            </div>
          </div>
          <a href="http://localhost:3001/">
            <div className="login">
              <p className="locat">Kirish</p>
              <div className="profil">
                {" "}
                <img src={profile} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigate;
