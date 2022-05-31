import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./OnlineDoctor.scss";

import { useDispatch, useSelector } from "react-redux";
import { actionDoctorType } from "../../store/getDoctorType/action";

import Bacground from "../../images/Groupffff.png";

import Global from "../GlobalBtn/GlobalBtn";
import Profession from "../GlobalProfession/Profession";
import Api from "../../api/requestApi";

export default function OnlineDoctor() {
  const { info } = useSelector((state) => state.getDoctorType);
  const { dataDoctors } = useSelector((state) => state.getDoctors);
  
  const dispatch = useDispatch();
  useEffect(() => {
    Api.get("/specialist/types/").then((res) =>
      dispatch(actionDoctorType(res?.data?.data))
    );
  }, []);

  return (
    <div className="containerDoctor GlobalWrapper">
      <div className="bacgroundImg"></div>
      <div className="onlineDoctorContainer">
        <h3>
          Har qanday sog'liq bilan bog'liq muammolar uchun
          <Link to="/onlineDoctor" className="greenDoctor">
            onlayn shifokorlarga
          </Link>
          murojaat qiling
        </h3>
        <p>
          Eng yaxshi shifokorlarimiz, Sizning barcha savolaringizga javob
          berishadi.
        </p>
        <div className="boxContainer">
          {info.filter((_, index) => index < 4).map((item) => (
            <Profession key={item.id} data={item} info={dataDoctors} />
          ))}
        </div>
        <Global
          text="Bepul maslahat olish"
          width={"260px"}
          position={"absolute"}
          top={"368px"}
        />
      </div>
      <div className="bacgroundImg2">
        <img src={Bacground} alt="" />
      </div>
    </div>
  );
}
