import React from "react";
import "./DoctorTtypeInfoStyle.css";
import Shape from "./../../../images/Shape1.png";
import close from "./../../../images/Close.png";

function DoctorTtypeInfo({ setOpen, props, data }) {
  return (
    <>
      <div className="TypeInfoWr">
        {data
          .filter((b) => b.id === props)
          .map((a) => (
            <div>
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
