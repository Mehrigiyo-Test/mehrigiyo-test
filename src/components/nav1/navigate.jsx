import React, { useState } from "react";
import "./navStyles.css";
import lokatsa from "../../images/Vector.png";
import profile from "../../images/profile.png";
import Dropdown from "../Dropdown/Dropdown";

import Modal from "../Modal";

import Login from "./Login";
import Verification from "./Verification";

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
  const [modalACtive, setModalActive] = useState("Login");

  const [tab, setTab] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <div className="navigate">
      <div className="navigate__wrapper GlobalWrapper">
        <nav className="nav1">
          <ul className="ul">
            {nav.map((item) => (
              <li>
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navigate2">
          <div className="absDropdown">
            <Dropdown />
          </div>
          <div className="location">
            <p className="locat">Buxoro shahar</p>
            <div className="lokatsa">
              <img className="locImg" src={lokatsa} />
            </div>
          </div>
          {/* <div className="login" onClick={() => setShow(true)}> */}
           {/* <a href="http://localhost:3001/">  */}
           <p className="locat">Kirish</p>
            <div className="profil">
              <img className="locImg" src={profile} />
            </div>
            {/* </a> */}
          {/* </div> */}
        </div>
      </div>
     {show ?  <section>
        {modalACtive === "Login" ? (
          <Modal
            children={
              <Login
                setModalActive={setModalActive}
                tab={tab}
                setTab={setTab}
                setShow={setShow}
              />
            }
          />
        ) : modalACtive === "Verification" ? (
          <Modal children={<Verification  setModalActive={setModalActive} setShoww={setShow} setTab={setTab}/>} />
        ) : null}
      </section> : null}
      {/* <ModalLogin active={ModalACtive} setActive={setModalActive}/> */}
    </div>
  );
}

export default Navigate;
