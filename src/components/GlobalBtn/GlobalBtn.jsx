import "./Global.scss";
import Vector from "../../images/Vector(1).png";

export default function GlobalBtn({ text, width, color, position, top }) {
  return (
    <> 
      <button className="btnDoctor" style={{ width: width, color: color, position: position, top: top }}>
        {text}
        <img  width="16px" height="12px" src={Vector} />
      </button>
    </>
  );
}
