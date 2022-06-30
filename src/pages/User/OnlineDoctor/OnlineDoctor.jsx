import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import FreeAdvice from "../../../components/User/FreeAdvice/FreeAdvice";
import Ambulance from "../../../components/User/Ambulance/Ambulance";
import TypeDoctor from "../../../components/User/TypesOfDoctors/TypeDoctor";
import Warning from "../../../components/User/Warning/Warning";
import TopDoctors from "../../../components/User/TopDoctors/TopDoctors";
import GlobalBtn from "../../../components/User/GlobalBtn/GlobalBtn";
import ApplicationSec from "../../../components/User/ApplicationSec/ApplicationSec";
import imgLeaf from "../../../images/User/leaf.png";
import GlobalSponsors from "../../../components/User/GlobalSponsors/GloblaSponsors";
import "./OnlineDoctor.scss";

import { useDispatch, useSelector } from "react-redux";

import Slider from "react-slick";
import Modal from "../../../components/User/Modal";
import DoctorFullCard from "../../../components/User/DoctorFullInfoCard/DoctorFullCard";
import AdviceDayBooking from "../../../components/User/adviceDayBooking/adviceDayBooking";
import Waiting from "../../../components/User/waiting/waiting";
import MeetingSucceed from "../../../components/User/waiting/MeetingSucceed/MeetingSucceed";
import DoctorTtypeInfo from "../../../components/User/waiting/DoctorTtypeInfo/DoctorTtypeInfo";
import FavoriteDoctors from "../FavoriteDoctors/FavoriteDoctors";
import { actionFavoriteDoc } from "../../../store/getFavoriteDoctors/action";
import { actionDoctors } from "../../../store/getDoctors/action";
import Api from "../../../Servis/api/requestNotToken";

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
  const { favoriteDoc=[] } = useSelector((state) => state.getFavoriteDoctors);

  const API = "http://207.154.244.140:8000/";

  const addedFav = (id) => {
    return favoriteDoc.filter((a) => a.id === id).length > 0;
  };
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(actionFavoriteDoc())
  },[])

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
          <p className="sliderTopText" id="topdoc">Top Shifokorlar</p>
          <Link to={"/onlineDoctor/BigCompListDoctor"}>
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
                data={item}
                id={item.id}
                img={API + item.image}
                text1={item.full_name}
                text2={item.type_doctor.name}
                setopen={setOpen}
                func={func}
                setactive={setActive}
                addedFav={addedFav}
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
