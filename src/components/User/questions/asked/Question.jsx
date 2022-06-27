import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import "./Question.scss";

function Question({ num, title, text, width }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <section className="question" style={{width: width}}>
        <header className="headBox"onClick={() => setShowInfo(!showInfo)}>
          <div className="headBoxLeft">
            <span className="number">{num}</span>
            <p className="accardionHeader">{title}</p>
          </div>
            <button className="accardionBtn" onClick={() => setShowInfo(!showInfo)} >
              {showInfo ? <AiOutlineClose /> : <AiOutlinePlus />}
            </button>
        </header>
        {showInfo && <p className="accardionText">{text}</p>}
      </section>
    </>
  );
}

export default Question;
