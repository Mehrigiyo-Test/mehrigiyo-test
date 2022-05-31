import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// import { Pagination, Autoplay } from "swiper";
import FreeAdvice from "../../components/FreeAdvice/FreeAdvice";
import Ambulance from "../../components/Ambulance/Ambulance";
import TypeDoctor from "../../components/TypesOfDoctors/TypeDoctor";
import Warning from "../../components/Warning/Warning";
import TopDoctors from "../../components/TopDoctors/TopDoctors";
import GlobalBtn from "../../components/GlobalBtn/GlobalBtn";
import ApplicationSec from "../../components/ApplicationSec/ApplicationSec";
import img1 from "../../images/doctorBahrom.svg";
import imgLeaf from "../../images/leaf.png";
import GlobalSponsors from "../../components/GlobalSponsors/GloblaSponsors";
import "./OnlineDoctor.scss";
import Api from "../../api/requestApi";
import { useDispatch, useSelector } from "react-redux";
import { actionDoctors } from "../../store/getDoctors/action";

import Slider from "react-slick";
import Modal from "../../components/Modal";
import DoctorFullCard from "../../components/DoctorFullInfoCard/DoctorFullCard";
import AdviceDayBooking from "../../components/adviceDayBooking/adviceDayBooking";
import Waiting from "../../components/waiting/waiting";
import MeetingSucceed from "../../components/waiting/MeetingSucceed/MeetingSucceed";
import DoctorTtypeInfo from "../../components/waiting/DoctorTtypeInfo/DoctorTtypeInfo";

let settings = {
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  speed: 3000,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1370,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
  ],
};

function OnlineDoctor() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [num, setNum] = useState("");

  const { dataDoctors } = useSelector((state) => state.getDoctors);
  console.log(dataDoctors, "bu dokorlar datasi");
  const dispatch = useDispatch();
  const API = "http://207.154.244.140:8000/";

  useEffect(() => {
    Api.get("/specialist/doctors/").then((res) =>
      dispatch(actionDoctors(res?.data?.data))
    );
  }, []);
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
      <Warning />
      <FreeAdvice />
      <TypeDoctor />
      <Ambulance />
      <div className="wrapperSwiper">
        <div className="imgLeaf">
          <img src={imgLeaf} />
        </div>
        <div className="sliderTop">
          <p className="sliderTopText">Top Shifokorlar</p>
          <Link to="/OnlineDoctor/BigCompListDoctor">
            <GlobalBtn
              style={{ textDecoration: "none" }}
              text="Batafsil"
              width="144px"
            />
          </Link>
        </div>
        <Slider {...settings}>
          {dataDoctors.map((item) => (
            <div key={item.id}>
              <TopDoctors
                id={item.id}
                img={API + item.image}
                text1={item.full_name}
                text2={item.type_doctor.name}
                setopen={setOpen}
                func={func}
                setactive={setActive}
              />
            </div>
          ))}
        </Slider>
      </div>
      <ApplicationSec />
      <GlobalSponsors />

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

export default OnlineDoctor;
