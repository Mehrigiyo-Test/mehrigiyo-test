import React from "react";
import "./HistoryMehrigiyo.scss";
import img from "../../../images/User/imgOldPerson.png";
import imgLeaf from "../../../images/User/leafAnother.png";

const HistoryMehrigiyo = () => {
  return (
    <section className="HistoryMehrigiyo-S">
      <div className="HistoryMehrigiyo ">
        <div className="HistoryMehrigiyo__img">
          <img src={img} alt="history of Megrigiyo" />
        </div>
        <div className="HistoryMehrigiyo__text">
          <p className="HistoryMehrigiyo__text__paragraph1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="HistoryMehrigiyo__text__paragraph2">
            Hurmat bilan, Abdurazakov Alijon G‘aniyevich
          </p>
          <p className="HistoryMehrigiyo__text__paragraph3">
            “Mehrigiyo” shirkati asoschisi, farmatsevt, xalq tabibi, Turon
            Fanlar akademiyasi akademigi.
          </p>
        </div>
      </div>
      <div className="flexBtns">
          <button className="flexBtns__btn">Kelib chiqishi</button>
          <button className="flexBtns__btn">Tarixi</button>
          <button className="flexBtns__btn">Hozirda</button>
          <button className="flexBtns__btn">Yutuqlar va sertifikatlar</button>
      </div>
      <div className="imgLeaf">
          <img src={imgLeaf} />
      </div>
    </section>
  );
};

export default HistoryMehrigiyo;
