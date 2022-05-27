import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./CertificatesMehrigiyo.scss";
import img1 from "../../images/certificate1.png";
import img2 from "../../images/certificate2.png";
import img3 from "../../images/certificate3.png";
import imgLeaf from "../../images/TeamOfLeaf.png";

const CertificatesMehrigiyo = () => {
  return (
    <section className="CertificatesMehrigiyo">
      <div className="CertificatesMehrigiyo__text">
        <p className="CertificatesMehrigiyo__text__p1">
          Yutuqlar va sertifikatlar
        </p>
        <p className="CertificatesMehrigiyo__text__p2">
          2020 yil dekabr oyida kompaniya ikkita xalqaro organik sertifikatlarni
          oldi: Amerika USDA ORGANIC va Yevropa EU ORGANIC Gollandiyaning
          Control Union Certifications kompaniyasidan. Yaqin kelajakda Saudiya
          Arabistoni, Omon, AQSH, Yevropa mamlakatlariga mahsulot eksport qilish
          rejalashtirilgan.
        </p>
        <div className="CertificatesMehrigiyo__text__leav">
          <img src={imgLeaf} />
        </div>
      </div>
      <div className="CertificatesMehrigiyo__img">
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="mySwiperL">
              <img src={img1} />
              <span className="spanLeav">USDA ORGANIC</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mySwiperL">
              <img src={img2} />
              <span className="spanLeav">EU ORGANIC</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mySwiperL">
              <img src={img3} />
              <span className="spanLeav">Мужиза зелёный</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mySwiperL">
              <img src={img3} />
              <span className="spanLeav">Мужиза зелёный</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CertificatesMehrigiyo;
