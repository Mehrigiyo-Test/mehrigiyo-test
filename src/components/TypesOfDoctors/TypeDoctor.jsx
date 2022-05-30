import Profession from "../GlobalProfession/Profession";
import "./TypesDoctor.scss";
import immg from "../../images/Vector1.png";
import Backimg from "../../images/BackgroundImg.png";
import { useSelector } from "react-redux";

export default function TypeDoctor() {
  const { info } = useSelector((state) => state.getDoctorType);
  return (
    <div className="container GlobalWrapper">
      <div className="headDoctor">
        <h3>Shifokorlar turlari</h3>
        <p className="type">Barcha turlari</p>
      </div>
      <div className="typeDoctor">
        {info.map((item) => (
          <Profession key={item.id} data={item} immg={immg} />
        ))}
      </div>
      <div className="backImg">
        <img src={Backimg} alt="Background" />
      </div>
    </div>
  );
}
