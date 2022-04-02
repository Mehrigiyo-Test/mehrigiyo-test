import React from 'react';
import AboutBox from '../../components/AboutBox/AboutBox';
import HistoryMehrigiyo from "../../components/HistoryMehrigiyo/HistoryMehrigiyo";
import OriginMehrigiyo from "../../components/OriginMehrigiyo/OriginMehrigiyo";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <>
      <AboutBox />
      <HistoryMehrigiyo />
      <OriginMehrigiyo />
    </>
  )
}

export default AboutUs;
