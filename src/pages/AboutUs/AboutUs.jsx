import React from "react";
import AboutBox from "../../components/AboutBox/AboutBox";
import Globlasponsors from "../../components/GlobalSponsors/GloblaSponsors";
import HistoryMehrigiyo from "../../components/HistoryMehrigiyo/HistoryMehrigiyo";
import OriginMehrigiyo from "../../components/OriginMehrigiyo/OriginMehrigiyo";
import Achievements from "./../../components/Achievements/Achievements";
import History from "./../../components/History/History";
import OurProducts from "../../components/OurProducts/OurProducts";
import CertificatesMehrigiyo from "../../components/CertificatesMehrigiyo/CertificatesMehrigiyo";

import svg1 from "../../images/ourProductsImg1.svg";
import svg2 from "../../images/OurProducts2.svg";
import svg3 from "../../images/OurProducts3.svg";
import svg4 from "../../images/OurProducts4.svg";
import svg5 from "../../images/OurProducts5.svg";
import svg6 from "../../images/OurProducts6.svg";
import svg7 from "../../images/OurProducts7.svg";
import svg8 from "../../images/OurProducts8.svg";
import svg9 from "../../images/OurProducts9.svg";
import svg10 from "../../images/OurProducts10.svg";
import svg11 from "../../images/OurProducts11.svg";

import dala1 from "../../images/growing1.png";
import dala2 from "../../images/growing2.png";
import "./AboutUs.scss";

import Companysupport from "../../components/CompanySupport/CompanySupport";
function AboutUs() {
  return (
    <>
      <AboutBox />
      <HistoryMehrigiyo />
      <OriginMehrigiyo />
      <Achievements />
      <History />
      <div className="GlobalWrapper">
        <div className="now">
          <p className="now__p1">Hozirda</p>
          <p className="now__p2">
            Bugungi kunda korxonada qadimiy sharq tabobati va zamonaviy
            farmatsevtika yutuqlarini o‘zida jamlagan bog‘bonlar, farmatsevtlar,
            shifokorlar, akademiklar mehnat qilmoqda. Ayni paytda korxonada
            o‘zbekistonlik va xorijiy iste’molchilarning munosib ishonchiga ega
            bo‘lgan, salomatlik uchun samarali dori vositalari ishlab
            chiqarilmoqda.
          </p>
          <p className="now__p3">
            “Mehrigiyo” korxonasining asosiy faoliyati dorivor o‘simliklar va
            mevalar asosidagi mahsulotlar ishlab chiqarishdan iborat.
          </p>
        </div>
        <div className="products">
          <p className="products__title">Bizning mahsulotlar turkumlari</p>
          <div className="products__wrapper">
            <OurProducts />
            {/* <OurProducts svg={svg1} text="Sharbatlar" bcgColor="#E4F4DF" />
            <OurProducts svg={svg2} text="Sharbatlar" bcgColor="#E1F0E8" />
            <OurProducts svg={svg3} text="Sharbatlar" bcgColor="#E4F4DF" />
            <OurProducts svg={svg4} text="Sharbatlar" bcgColor="#F1DEDD" />
            <OurProducts svg={svg5} text="Sharbatlar" bcgColor="#FBF1E4" />
            <OurProducts svg={svg6} text="Sharbatlar" bcgColor="#E4F4DF" />
            <OurProducts svg={svg7} text="Sharbatlar" bcgColor="#E6F1F9" />
            <OurProducts svg={svg8} text="Sharbatlar" bcgColor="#E4F4DF" />
            <OurProducts svg={svg9} text="Sharbatlar" bcgColor="#F9EBDE" />
            <OurProducts svg={svg10} text="Sharbatlar" bcgColor="#F0E5E0" />
            <OurProducts svg={svg11} text="Sharbatlar" bcgColor="#EEF4FC" /> */}
          </div>
          <div className="aboutGrowing">
            <div className="aboutGrowing__box">
              <div className="aboutGrowing__box__text">
                Для достижения высокого качества и увеличения эффективности
                продукции, растения и фрукты выращиваются органическим образом,
                без минеральных удобрений, без пестицидов, на частных посевных
                полях (плантациях) компании. Отбираются, готовятся и
                упаковываются в соответствии с требованиями мировых стандартов.
                <br />
                <br />
                Немаловажной частью заготовки является разделение растений по
                нужным частям — черенки, стебли, листья, бутоны, соцветия и
                семена. Кроме того, для приготовления разных продуктов рецептура
                требует различной степени измельчения, холодной или тепловой
                обработки, выдержки.
                <br />
                <br />
                Все эти процессы обеспечивают и контролируют
                высокопрофессиональные сотрудники компании, гарантируя качество
                каждого продукта.
              </div>
              <div className="aboutGrowing__box__img">
                <img src={dala1} />
              </div>
            </div>
            <div className="aboutGrowing__box">
              <div className="aboutGrowing__box__img">
                <img src={dala2} />
              </div>
              <div className="aboutGrowing__box__text">
                Секрет успеха компании заключается в том, что его высшей целью
                является забота о здоровье людей, чему благоприятствует
                географическое местоположение. Плодородные, экологически чистые
                земли Ферганской области окружены Тянь-Шаньскими и
                Памиро-Алтайскими горами, омываются рекой Сырдарья, а также
                водами реки Сох, богатой золотом, серебром, кремнием и другими
                макро- и микроэлементами.
                <br />
                <br />В регионе бывает более 300 солнечных дней в году, чистый
                воздух, плодородная земля, климат — знойный степной на западе и
                прохладный влажный на юго-востоке — все это способствует
                получению самого высококачественного сырья для производства
                продукции.
              </div>
            </div>
            <p className="aboutGrowingFinishText">
              Компания «Mehrigiyo» специализируется на производстве
              продовольственной продукции для здравоохранения, производит
              профилактические и биологические лечебные препараты. Налажено
              выращивание тропических фруктовых деревьев, таких как папайя,
              годжи, нони, фейхоа, оливковые деревья и др, а использование
              целебных трав открывает большие возможности для новых открытий.
            </p>
          </div>
        </div>
      </div>
      <CertificatesMehrigiyo />
      <Globlasponsors />
      <Companysupport />
    </>
  );
}

export default AboutUs;
