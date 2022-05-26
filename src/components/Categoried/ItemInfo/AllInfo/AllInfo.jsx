import React, { useState } from "react";
import "./AllInfo.scss";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsShare, BsChevronDown, BsChevronRight } from "react-icons/bs";

export default function AllInfo({ heading, stars, price }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };
  const handleChange2 = () => {
    setShow2(!show2);
  };

  return (
    <div className="allinfo">
      <div className="head_info">
        <div className="heading">
          <strong>{heading}</strong>
        </div>
        <div className="icons_like">
          <div className="liked">
            <AiOutlineHeart />
          </div>
          <div className="shared">
            <BsShare />
          </div>
        </div>
      </div>
      <div className="stars_info">
        <img width={100} src={stars} alt="" />
      </div>
      <div className="count_info">
        <div className="counting">
          <span className="counter_minus" onClick={() => setCount(count - 1)}>
            <AiOutlineMinus />
          </span>
          <span className="counter">{count}</span>
          <span className="counter_minus" onClick={() => setCount(count + 1)}>
            <AiOutlinePlus />
          </span>
        </div>
        <div className="count_price">
          <b>{price} UZS</b>
        </div>
      </div>

      <div className="accordion2">
        <div className="section-1" onClick={handleChange}>
          <div className="text-2">
            <span className="accordion-txt-2">Mahsulot haqida</span>
          </div>
          {!show ? (
            <div className="plus">
              <BsChevronRight />
            </div>
          ) : (
            <div className="minus">
              <BsChevronDown />
            </div>
          )}
        </div>
        <div className="section-text-2">
          {show ? (
            <div className="more-text-2">
              Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi
            </div>
          ) : null}
        </div>
      </div>

      <div className="accordion2">
        <div className="section-1" onClick={handleChange2}>
          <div className="text-3">
            <span className="accordion-txt2-2">Og’irligi</span>
          </div>
          {!show2 ? (
            <div className="plus">
                <span className="weight">100 gr</span>
              <BsChevronRight />
            </div>
          ) : (
            <div className="minus">
              <BsChevronDown />
            </div>
          )}
        </div>
        <div className="section-text-2">
          {show2 ? (
            <div className="more-text-2">
              Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
