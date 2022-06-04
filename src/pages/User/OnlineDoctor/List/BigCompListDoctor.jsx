import React, { useState } from "react";
import Vectorrr from "./../../../../images/User/Vectorrr.png";
import Close from "./../../../../images/User/Close.png";
import "./BigCompListDoctorStyle.scss";
import { Link } from "react-router-dom";
import Search from "./../Search/Search";
import reload from "./../../../../images/User/reload.png";
import Checkbox from "./Checkbox/Checkbox";
import down from "./../../../../images/User/Down.png";
import TopDoctors from "../../../../components/User/TopDoctors/TopDoctors";
import Bak from "./../../../../images/User/send_background.png";
import DoctorFullCard from "../../../../components/User/DoctorFullInfoCard/DoctorFullCard";
import AdviceDayBooking from "../../../../components/User/adviceDayBooking/adviceDayBooking";
import Waiting from "./../../../../components/User/waiting/waiting.jsx";
import MeetingSucceed from "../../../../components/User/waiting/MeetingSucceed/MeetingSucceed";
import DoctorTtypeInfo from "../../../../components/User/waiting/DoctorTtypeInfo/DoctorTtypeInfo";
import Modal from "../../../../components/User/Modal";

import { useSelector } from "react-redux";

function BigCompListDoctor() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("active");
  const [num, setNum] = useState("");
  const [all, setAll] = useState(true);
  const { dataDoctors } = useSelector((state) => state.getDoctors);
  const { categories } = useSelector((state) => state.sortDoctorsType);
  const { info } = useSelector((state) => state.getDoctorType);
  const API = "http://207.154.244.140:8000/";

  console.log(info, "bu info info info");

  const sortArr = categories
    .filter((e) => e.checked === true)
    .map((item) => item.name);
  const str = sortArr.map((item) => item).join("");

  const docType = dataDoctors.filter((item) =>
    str.includes(item.type_doctor.name)
  );

  const func = (param) => {
    const id = dataDoctors.filter((a) => a.id === param);
    setNum(Number(id.map((a) => a.id)));
  };

  const btn = () => {
    setActive("hh");
  };

  const set = () => {
    setTimeout(() => {
      <Waiting />;
    }, 500);
  };

  function clean() {
    var ele = document.getElementsByName("chec");
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == "checkbox") {
        ele[i].checked = false;
        categories.forEach((element) => {
          element.checked = false;
        });
      }
    }
  }
  return (
    <>
      <div className="GlobalWrapper Onlinewr">
        <div className="Attention">
          <div className="display AttentComp">
            <div>
              <img src={Vectorrr} alt="" />
            </div>
            <div className="GreyTxt">
              Bepul shifokor maslahat olish uchun avval mutaxassislikni tanlab
              va o’zizga ma’qul kelgan shifokorni tanlang{" "}
            </div>
          </div>
          <div>
            <img src={Close} alt="" />
          </div>
        </div>
        <div className="OnlineDoctorPg2GW">
          <div className="titles">
            <Link to={"/"}>
              <span className="title item">Bosh sahifa</span>
            </Link>
            <Link to={"/onlineDoctor"}>
              <span className="title item">Onlayn shifokorlar</span>
            </Link>
            <span className="title active">Shifokorlar</span>
          </div>
          <div className="docc">
            <div className="displayLeft">
              <span>
                <h1>Shifokorlar</h1>
              </span>
            </div>
            <div className="docc_r">
              <span className="rowFilter">
                <div className="News1_wrapper beetwenUs ">
                  <span style={{ fontWeight: "700" }}>Saralash:</span>
                  <span tabIndex={1} className="doctype">
                    Yangi
                  </span>
                  <span tabIndex={1} className="doctype">
                    Top
                  </span>
                  <span tabIndex={1} className="doctype">
                    Ayol
                  </span>
                  <span tabIndex={1} className="doctype">
                    Erkak
                  </span>
                </div>
              </span>

              <Search top={"50px"} />
            </div>
          </div>
          <div className="display">
            <div className="categoryFilter">
              <div className="filterBg">
                <div className="display clearFF">
                  <h5>Kategoriyalar</h5>
                  <span className="clearFilter">
                    <img src={reload} alt="reload" />
                    <p onClick={() => clean()} style={{cursor: 'pointer'}}>Tozalash</p>
                  </span>
                </div>
                <div>
                  {all
                    ? categories
                        .filter((_, index) => index < 8)
                        .map((item) => (
                          <Checkbox item={item} docType={docType} />
                        ))
                    : categories.map((item) => (
                        <Checkbox item={item} docType={docType} />
                      ))}
                </div>
                {all ? (
                  <div className="moore">
                    <div>
                      <img src={down} alt="" />
                    </div>
                    <div onClick={() => setAll(!all)}>Ko'proq</div>
                  </div>
                ) : (
                  <div className="moore">
                    <div>
                      <img src={down} alt="" className="down"/>
                    </div>
                    <div onClick={() => setAll(!all)}>Kamroq</div>
                  </div>
                )}
              </div>
            </div>

            <div className="DocInfo">
              {docType.length === 0
                ? dataDoctors.map((a) => (
                    <TopDoctors
                      id={a.id}
                      img={API + a.image}
                      text1={a.full_name}
                      setopen={setOpen}
                      func={func}
                      setactive={setActive}
                    />
                  ))
                : docType.map((a) => (
                    <TopDoctors
                      id={a.id}
                      img={API + a.image}
                      text1={a.full_name}
                      setopen={setOpen}
                      func={func}
                      setactive={setActive}
                    />
                  ))}
            </div>
          </div>
        </div>
        <div className="leaveBak">
          <img className="bak" src={Bak} alt="" />
        </div>
      </div>

      {open ? (
        <div>
          {active === "active" ? (
            <Modal
              children={
                <DoctorFullCard
                  setOpen={setOpen}
                  data={dataDoctors}
                  props={num}
                  btn={btn}
                  active={setActive}
                />
              }
            />
          ) : active === "hh" ? (
            <Modal
              children={
                <AdviceDayBooking
                  setOpen={setOpen}
                  setActive={setActive}
                  set={set}
                />
              }
            />
          ) : active === "waiting" ? (
            <Modal children={<Waiting />} />
          ) : active === "meeting" ? (
            <Modal
              children={
                <MeetingSucceed setOpen={setOpen} setActive={setActive} />
              }
            />
          ) : active === "info" ? (
            <Modal
              children={
                <DoctorTtypeInfo
                  setOpen={setOpen}
                  props={num}
                  data={dataDoctors}
                />
              }
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default BigCompListDoctor;
