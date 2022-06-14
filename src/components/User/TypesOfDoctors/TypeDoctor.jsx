import React, { useState } from "react";
import Profession from "../GlobalProfession/Profession";
import "./TypesDoctor.scss";
import immg from "../../../images/User/Vector1.png";
import Backimg from "../../../images/User/BackgroundImg.png";
import { useSelector } from "react-redux";

export default function TypeDoctor() {
  const { info } = useSelector((state) => state.getDoctorType);
  const { dataDoctors } = useSelector((state) => state.getDoctors);
  const [sort, setSort] = useState(false);
 
  return (
    <div id="typeDoctor" className="container GlobalWrapper">
      <div className="headDoctor">
        <h3>Shifokorlar turlari</h3>
        <p className="type" onClick={() => setSort(!sort)}>
          {!sort ? "Barcha turlari" : "Orqaga"}
        </p>
      </div>
      <div className="typeDoctor">
        {!sort
          ? info
              .filter((_, index) => index < 12)
              .map((item) => (
                <Profession key={item.id} data={item} immg={immg} info={dataDoctors} />
              ))
          : info.map((item) => (
              <Profession key={item.id} data={item} immg={immg} info={dataDoctors}  />
            ))}
      </div>
      <div className="backImg">
        <img src={Backimg} alt="Background" />
      </div>
    </div>
  );
}
