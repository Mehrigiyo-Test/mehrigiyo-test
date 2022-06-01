import React, { useState } from "react";
import Vectorrr from "./../../../images/Vectorrr.png";
import Close from "./../../../images/Close.png";
import "./BigCompListDoctorStyle.scss";
import { Link } from "react-router-dom";
import Search from "./../Search/Search";
import reload from "./../../../images/reload.png";
import Checkbox from "./Checkbox/Checkbox";
import down from "./../../../images/Down.png";
import TopDoctors from "../../../components/TopDoctors/TopDoctors";
import Bak from "./../../../images/send_background.png";
import DoctorFullCard from "../../../components/DoctorFullInfoCard/DoctorFullCard";
import AdviceDayBooking from "../../../components/adviceDayBooking/adviceDayBooking";
import Waiting from "./../../../components/waiting/waiting.jsx";
import MeetingSucceed from "../../../components/waiting/MeetingSucceed/MeetingSucceed";
import DoctorTtypeInfo from "../../../components/waiting/DoctorTtypeInfo/DoctorTtypeInfo";
import Modal from "../../../components/Modal";
import { useSelector } from "react-redux";

function BigCompListDoctor() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("active");
  const [num, setNum] = useState("");
  const {dataDoctors} = useSelector((state) => state.getDoctors);
  const API = "http://207.154.244.140:8000/";

  const cate = [ 
    {
      name: "Hammasi",
    },
    {
      name: "Nevropatolog",
    },
    {
      name: "Genetika",
    },
    {
      name: "Stomatologiya",
    },
    {
      name: "Jarroh",
    },
    {
      name: "Kardiolog",
    },
    {
      name: "Dermotolog",
    },
  ];


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
          <div className="News1_wrapper DoctorNav gap">
            <p>
              <Link to="/">Bosh sahifa</Link>
            </p>
            <span>/</span>
            <p>
              <a tabIndex={1} className="doctype" href="/OnlineDoctor">
                Onlayn Shifokorlar
              </a>
            </p>
            <span>/</span>
            <p>
              <Link
                tabIndex={1}
                className="doctype"
                to="/OnlineDoctor/BigCompListDoctor"
              >
                Shifokorlar
              </Link>
            </p>
          </div>
          <div className="doc">
            <div className="displayLeft">
            <span>
              <h1>Shifokorlar</h1>
            </span>
            <span className="rowFilter">
              <div className="News1_wrapper beetwenUs ">
                <span>Saralash:</span>
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
            </div>
            <div className="displayRight">
            <span className="Qidiruv">
              <Search top={'75px'}/>
            </span>
            </div>
          </div>
          <div className="display">
            <div className="categoryFilter">
              <div className="filterBg">
                <div className="display clearFF">
                  <h5>Kategoriyalar</h5>
                  <span className="clearFilter">
                    <img src={reload} alt="reload" />
                    <p>Tozalash</p>
                  </span>
                </div>
                <div>
                  {cate.map((item) => (
                    <Checkbox name={item.name} />
                  ))}
                </div>
                <div className="moore">
                  <div>
                    <img src={down} alt="" />
                  </div>
                  <div>Ko'proq</div>
                </div>
              </div>
            </div>

            <div className="DocInfo">
              {dataDoctors.map((a) => (
                <TopDoctors
                  id={a.id}
                  img={API+a.image}
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
                <DoctorTtypeInfo setOpen={setOpen} props={num} data={dataDoctors} />
              }
            />
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default BigCompListDoctor;
