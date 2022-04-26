import React from "react";
import Bc_leaf_support from "../../images/support-bc1.png";
import SupportBcg from "../../images/support-bc.png";
import png1 from "../../images/Number-one.png";
import png2 from "../../images/Number-two.png";
import png3 from "../../images/Number-three.png";
import "./style.css";

const Companysupport = () => {
  const arr = [
    {
      img: png1,
      text: "Очищение",
    },
    {
      img: png2,
      text: "Восполнение",
    },
    {
      img: png3,
      text: "Восстановление",
    },
  ];
  return (
    <div className="support GlobalWrapper">
      <div className="support-titles">
        <h1 className="support-titles__title">Kompaniya turli kasalliklarni</h1>
        <h1 className="support-titles__title">
          tiklash uchun tizimli yondashuvdan foydalanadi,
        </h1>
        <h1 className="support-titles__title-bottom">
          bu <span>3 bosqichdan</span> iborat:
        </h1>
      </div>

      <div className="support-cards">
        {arr.map((item, index) => (
          <div key={index} className="support-cards__card">
              <span><img src={item.img}/></span>
              <p className="support-cards__card__text">{item.text}</p>
          </div>
        ))}
        {/* <div className='support-cards__card'>
                    <span className='support-cards__card__number'>

                    </span>
                    <p className='support-cards__card__text'>Очищение</p>
                </div> */}

        {/* <div className='support-cards__card'>
                    <span className='support-cards__card__number'>
                        <svg width="52" height="74" viewBox="0 0 52 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M0.3 59.3C6.76667 54.2333 12.0667 49.8667 16.2 46.2C20.3333 42.5333 23.8 38.7667 26.6 34.9C29.4 30.9667 30.8 27.2333 30.8 23.7C30.8 21.5667 30.3 19.9 29.3 18.7C28.3667 17.5 26.9667 16.9 25.1 16.9C23.1667 16.9 21.6667 17.7333 20.6 19.4C19.5333 21 19.0333 23.3667 19.1 26.5H0.1C0.3 20.5667 1.6 15.6667 4 11.8C6.4 7.86666 9.53333 5 13.4 3.19999C17.2667 1.33333 21.5667 0.399995 26.3 0.399995C34.5 0.399995 40.6 2.43333 44.6 6.49999C48.6 10.5667 50.6 15.8333 50.6 22.3C50.6 29.2333 48.2667 35.7333 43.6 41.8C39 47.8667 33.2333 53.3 26.3 58.1H51.3V74H0.3V59.3Z" fill="#69CB3A" />
                        </svg>

                    </span>
                    <p className='support-cards__card__text'>Восполнение</p>
                </div> */}

        {/* <div className='support-cards__card'>
                    <span className='support-cards__card__number'>
                        <svg width="53" height="76" viewBox="0 0 53 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M1.28242 23.7C1.54909 16.1667 3.88242 10.4 8.28242 6.4C12.6824 2.33333 18.8158 0.299996 26.6824 0.299996C31.8158 0.299996 36.1824 1.2 39.7824 3C43.4491 4.73333 46.2158 7.13333 48.0824 10.2C49.9491 13.2 50.8824 16.6 50.8824 20.4C50.8824 24.9333 49.7824 28.5667 47.5824 31.3C45.3824 33.9667 42.8824 35.7667 40.0824 36.7V37.1C48.1491 40.1 52.1824 45.8333 52.1824 54.3C52.1824 58.5 51.2158 62.2 49.2824 65.4C47.3491 68.6 44.5491 71.1 40.8824 72.9C37.2158 74.7 32.8491 75.6 27.7824 75.6C19.4491 75.6 12.8491 73.6 7.98242 69.6C3.18242 65.5333 0.682422 59.3333 0.482422 51H19.5824C19.4491 53.6667 20.0158 55.7333 21.2824 57.2C22.5491 58.6667 24.4491 59.4 26.9824 59.4C28.9158 59.4 30.4158 58.8 31.4824 57.6C32.6158 56.4 33.1824 54.8 33.1824 52.8C33.1824 50.2667 32.3491 48.4 30.6824 47.2C29.0824 46 26.4491 45.4 22.7824 45.4H19.2824V29.5H22.6824C25.2158 29.5667 27.3491 29.1667 29.0824 28.3C30.8824 27.3667 31.7824 25.5333 31.7824 22.8C31.7824 20.7333 31.2824 19.2 30.2824 18.2C29.2824 17.1333 27.9158 16.6 26.1824 16.6C24.2491 16.6 22.8158 17.3 21.8824 18.7C21.0158 20.0333 20.5158 21.7 20.3824 23.7H1.28242Z" fill="#69CB3A" />
                        </svg>
                    </span>
                    <p className='support-cards__card__text'>Восстановление</p>
                </div> */}
      </div>

      <div className="support-bottom-titeles">
        <p className="support-bottom-titeles__text">
          “Mehrigiyo” shifobaxsh mahsulotlari kasalliklarning
        </p>
        <p className="support-bottom-titeles__text">
          oldini oladi hamda uzoq, sog‘lom va to‘kin hayot
        </p>
        <p className="support-bottom-titeles__text">
          manbai bo‘lib xizmat qiladi
        </p>
        <div className="support__bc">
          <span>
            <img src={Bc_leaf_support} alt="" />
            <img src={SupportBcg} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Companysupport;
