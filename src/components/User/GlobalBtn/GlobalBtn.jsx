import "./Global.scss";
import Vector from "../../../images/User/Vector(1).png";

export default function GlobalBtn({ text, width, color, position, top, left }) {
  return (
    <> 
      <button className="btnDoctor" style={{ width: width, color: color, position: position, top: top, left: left, cursor: "pointer" }}>
        {text}
        <img  width="16px" height="12px" src={Vector} />
      </button>
    </>
  );
}
