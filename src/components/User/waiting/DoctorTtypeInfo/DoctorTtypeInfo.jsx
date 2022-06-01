import React from "react";
import "./DoctorTtypeInfoStyle.scss";
import Shape from "./../../../../images/User/Shape1.png";
import close from "./../../../../images/User/Close.png";

function DoctorTtypeInfo({ setOpen, props, data }) {
  return (
    <>
      <div className="TypeInfoWr">
        {data
          .filter((b) => b.id === props)
          .map((a) => (
            <div key={a}>
              <div className="TypeName">
                <div>
                  <img src={Shape} alt="" />
                </div>
                <h3>{a.job}</h3>
                <div className="TypeClose" onClick={() => setOpen(false)}>
                  <img src={close} alt="" />
                </div>
              </div>
              <div className="TypeINfoText">Lorem ipsum dolor sit amet.</div>
            </div>
          ))}
      </div>
    </>
  );
}

export default DoctorTtypeInfo;
