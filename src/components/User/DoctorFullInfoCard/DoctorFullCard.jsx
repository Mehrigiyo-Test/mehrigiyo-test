import React from "react";
import "./DoctorFullCardStyle.css";

import selected from "./../../../images/User/BlIzbranniy.png";
import share from "./../../../images/User/BlShare.png";
import stars from "./../../../images/User/stars.png";
import close from "./../../../images/User/Close.png";
import barg from "./../../../images/User/leafAnother.png";
import TaemOfLeaf from "./../../../images/User/TeamOfLeaf.png";
import info from "./../../../images/User/Vector1.png";

function DoctorFullCard({ setOpen, data, props, btn, active }) {
  const gg = () => {
    setOpen("");
  };
  const API = "http://207.154.244.140:8000/";

  return (
    <>
      <div className="DocFuulINWR">
        {data
          .filter((b) => b.id === props)
          .map((a) => (
            <div className="centerInfo" key={a.id}>
              <div className="BigCircleIMg">
                <img src={API + a.image} alt="" />
              </div>
              <div>
                <div className="DoctorName">
                  <h2>{a.full_name}</h2>
                  <div className="display gap">
                    <div className="selected">
                      <img src={selected} alt="" />
                    </div>
                    <div className="selected">
                      <img src={share} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <img src={stars} alt="" />
                </div>
                <div className="DocInfCards">
                  <div className="DoctorPract">
                    <div>
                      <div>Shaharlar</div>
                      <h2 className="twoHundred">233+</h2>
                    </div>
                  </div>
                  <div className="DoctorPract">
                    <div>
                      <div>Tajriba</div>
                      <h2 className="five">{a.experience}</h2>
                    </div>
                  </div>
                  <div className="DoctorPract">
                    <div>
                      <div className="DoctorPractINfoicon">
                        <img src={info} alt="" />
                      </div>
                      <div className="doctorPractImg">
                        <img src={API + a.type_doctor.image} alt="" />
                      </div>
                      <p>{a.type_doctor.name}</p>
                    </div>
                  </div>
                </div>
                <div className="DocPractInf">
                  <h6>About Doctor</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pharetra donec turpis integer ipsum, et enim orci amet.
                  </p>
                </div>
              </div>
            </div>
          ))}
        <div>
          <button className="DocButton" onClick={btn}>
            Appointment
          </button>
        </div>
        <div className="close" onClick={gg}>
          <img src={close} alt="" />
        </div>
        <div className="modalBak">
          <img src={barg} alt="" />
        </div>
        <div className="TeamLeaf">
          <img src={TaemOfLeaf} alt="" />
        </div>
      </div>
    </>
  );
}

export default DoctorFullCard;
