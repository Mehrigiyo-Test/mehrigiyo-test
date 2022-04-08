import React from 'react';
import AboutBox from '../../components/AboutBox/AboutBox';
import Globlasponsors from '../../components/GlobalSponsors/GloblaSponsors';
import HistoryMehrigiyo from "../../components/HistoryMehrigiyo/HistoryMehrigiyo";
import OriginMehrigiyo from "../../components/OriginMehrigiyo/OriginMehrigiyo";
import Achievements from './../../components/Achievements/Achievements';
import "./AboutUs.scss";

import History from './../../components/History/History';
import Companysupport from '../../components/CompanySupport/CompanySupport';

function AboutUs() {
  return (
    <>
      <AboutBox />
      <HistoryMehrigiyo />
      <OriginMehrigiyo />
      <Achievements />
      <History/>
      <Globlasponsors/>
      <Companysupport/>
    </>
  )
}

export default AboutUs;
