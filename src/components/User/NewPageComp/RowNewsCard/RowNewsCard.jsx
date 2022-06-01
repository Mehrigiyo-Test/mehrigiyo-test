import React from "react";
import "./RowNewStyle.scss";
import Upload2 from "./../../../../images/User/Upload2.png";

function RowNewsCard({ img, Greenholder, events, time, theme, txt }) {
  return (
    <>
      <div>
        <div className="rowNewsWrapper display">
          <div className=" display row_wrapper">
            <div className="rowImg">
              <img src={img} alt="" />
            </div>
            <div className="PLaceholderImg">
              <img src={Greenholder} alt="" />
            </div>
            <div className="PLaceholderImg events">{events}</div>
            <div className="InnerShadow">
              <div className="timeData">{time}</div>
              <div className="UploadRow">
                <img src={Upload2} alt="" />
              </div>
            </div>
            <div className="rowTxt">
              <h4>{theme}</h4>
              <p>{txt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RowNewsCard;
