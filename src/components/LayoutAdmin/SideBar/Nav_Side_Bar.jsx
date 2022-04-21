import React from "react";
import "./Side_Bar.scss";
import PersonFace from "../../../images/PersonFace.png";
import Pencel from "../../../images/Pencel.png";
import Logout from "../../../images/LogOut.png";

export default function NavSideBar() {
  const information = [
    {
      name: "Nurmuhammedov Mahmudjon",
      num: "+998(99) 090-09-98",
      imgface: <PersonFace />,
      imgpen: <Pencel />,
      imglog: <Logout />,
      logtext: "Log Out",
    },
  ];

  return (
    <>
      <div className="navbar">
        <div className="navbar_Box">
          <div className="nav_Info">
            {information.map((item, index) => (
              <div key={index} className="nav_Accaunt">
                <img src={information.imgface} alt="" />
                <div className="accaunt_Name">
                  <h5>{information.name}</h5>
                  <p>{information.num}</p>
                </div>
                <img src={information.imgpen} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
