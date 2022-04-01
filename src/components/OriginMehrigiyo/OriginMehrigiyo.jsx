import React from "react";
import "./OriginMehrigiyo.scss";
import bcgImg from "../../images/BackgroundBubble.png";

const OriginMehrigiyo = () => {
  return (
    <section className="overflow">
      <div className=" originMehrigiyo GlobalWrapper">
        <div className="originMehrigiyo__text">
          <p className="originMehrigiyo__text__paragraph1">Kelib chiqish</p>
          <p className="originMehrigiyo__text__paragraph2">
            1992-yildan buyon yuqori malakali shifokorlar, o‘simlikshunoslar,
            sharq tabobati izdoshlari, fermer va texnologlardan tashkil topgan
            “MEHRIGIYO” kompaniyasining professional jamoasi zamonaviy
            farmatsevtika sanoati yutuqlari va qadimiy ta’limotlar tajribasini
            muvaffaqiyatli sintez qilib, o‘z plantatsiyalarida yetishtirmoqda.
            Farg'ona vodiysi va sog'lom balzamlar, shifobaxsh choylar, yog'lar,
            asal, holva va boshqalarni ishlab chiqarish.
          </p>
        </div>
        <div className="originMehrigiyo__img">
          <img src={bcgImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OriginMehrigiyo;
