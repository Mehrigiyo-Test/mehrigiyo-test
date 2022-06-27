import React, { useState } from "react";
import Question from "../../../components/User/questions/asked/Question";
import leaf from "../../../images/User/Group.png";
import Sheet from "../../../images/User/Group3.png";
import accardionData from "../../../components/User/questions/asked/accardionData";
import { Link } from "react-router-dom";
import "./QuestionsAsked.scss";

function QuestionsAsked() {
  const [showQuestions, setShowQuestions] = useState(accardionData);
  return (
    <>
      <div className="asked-background_Container">
        <div className="GlobalWrapper">
          <div className="asked-wrapper_Box">
            <div className="sheetsLeft">
              <img src={Sheet} alt="" />
            </div>
            <div className="left-div">
              <div className="directionBox">
                <Link className="directionLink" to='/'>Bosh sahifa</Link>
                <span>/</span>
                <Link className="directionLink" to='/help'>Yordam</Link>
              </div>
              <h4 className="asked-heading">Ko‘p so‘raladigan savollar</h4>
              <p className="extra-p">
                Qo‘shimcha ma‘lumot uchun biz bilan bog‘laning
              </p>
            </div>
            <div className="leaf">
              <img src={leaf} alt="" />
            </div>
          </div>
          <div className="accordion">
            <div className="section">
              {showQuestions.map((item) => (
                <Question width='1244px' key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionsAsked;
