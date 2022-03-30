import React from "react";
import img from "../../images/mobile_img.png";
import Appstore from "../../images/AppStore.svg";
import Playstore from "../../images/PlayStore.svg";
import ApplicationSecBtn from "../ApplicationSecBtn/ApplicationSecBtn";
import "./ApplicationSec.scss";
import Bannerform from "../bannerForm/bannerForm";

const ApplicationSec = () => {
  return (
    <section className="App-sec GlobalWrapper">
      <div className="App-sec__text">
        <p className="App-sec__text__paragraphOne">
          ”Mehrigiyo” mobil ilovasini yuklab{" "}
          <span>Shifokorlardan BEPUL maslahat</span> oling
        </p>
        <p className="App-sec__text__paragraphTwo">
          O’zbekistonning yetakchi shifokorlari bilan videokonsultatsiyadan
          foydalaning.
        </p>
        <p className="App-sec__text__paragraphThree">
          Ilovani yuklab olish uchun havolani oling
        </p>
        <div>
          <Bannerform
            type="number"
            placeholder="Telefon raqamingizni kiriting"
            textBtn="SMS yuboring"
            width="471px"
            padding=" 17px 19px"
            
            />
        </div>

        <div className="App-sec__text__btns">
          <ApplicationSecBtn
            text1="Download on the"
            text2="App Store"
            img={Appstore}
          />
          <ApplicationSecBtn
            text1="Get it on"
            text2="Google Play"
            img={Playstore}
          />
        </div>
      </div>
      <div className="App-sec__img">
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default ApplicationSec;
