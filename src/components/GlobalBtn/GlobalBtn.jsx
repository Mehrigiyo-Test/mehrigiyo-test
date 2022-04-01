import "./Global.scss";
import Vector from "../../images/Vector(1).png";

export default function Global({ text, width, position, top }) {
  return (
    <>
      {/* <div className='globalBtn' style={{gap:{gap}}}> */}
      <button
        className="btnDoctor"
        style={{ width: width, position: position, top: top }}
      >
        {" "}
        {text} <img width="16px" height="12px" src={Vector} />
      </button>

      {/* </div> */}
    </>
  );
}
