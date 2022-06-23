import React from "react";
import { Link } from "react-router-dom";
import "./OnlineDoctor.scss";

import { useSelector } from "react-redux";

import Bacground from "../../../images/User/Groupffff.png";

import Global from "../GlobalBtn/GlobalBtn";
import Profession from "../GlobalProfession/Profession";

export default function OnlineDoctor() {
  const { info } = useSelector((state) => state.getDoctorType);
  const { dataDoctors } = useSelector((state) => state.getDoctors);

  return (
    <div className="containerDoctor GlobalWrapper">
      <div className="bacgroundImg"></div>
      <div className="onlineDoctorContainer">
        <div>
          <h3>Har qanday sog'liq bilan bog'liq muammolar  uchun<br />
            <Link to="/onlineDoctor" className="greenDoctor">
              onlayn shifokorlarga
            </Link> <span></span>
            murojaat qiling</h3>
        </div>
        <p>
          Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob
          berishadi.
        </p>
        <div className="boxContainer">
          {info
            .filter((_, index) => index < 4)
            .map((item) => (
              <Profession key={item.id} data={item} info={dataDoctors} />
            ))}
        </div>
        <a style={{cursor: "pointer"}} href="/onlineDoctor">
          <Global
            text="Bepul maslahat olish"
            width={"260px"}
            position={"absolute"}
            top={"368px"}
            left={"36rem"}
          />
        </a>
      </div>
      <div className="bacgroundImg2">
        <img src={Bacground} alt="" />
      </div>
    </div>
  );
}
