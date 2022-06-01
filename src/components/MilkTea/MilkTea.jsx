import "./MilkTea.scss";
import LeftImg from "../../images/RightImg.png";
import RightImg from "../../images/LeftImg.png";

export default function MilkTea() {
<<<<<<< HEAD

    return (
        <div className="milkTeaContainer GlobalWrapper">
            <div className="milkBox">
                <div className="leftImg">
                    <img src={LeftImg} />
                </div>
                <div className="text">
                    <div className='text-groupM'>
                        <p className='headText'>Mehrigiyo</p>
                        <div className='text-groupM__texts'>
                            <h3>50% chegirma </h3>
                            <h3> sutli choyda</h3>
                        </div>
                        <p className='bodyText'>1+1 choy bilan xarid qilganingizda</p>
                    </div>
                    <div className="rightImg">
                        <img src={RightImg} />
                    </div>
                </div>
            </div>
=======
  return (
    <div className="milkTeaContainer GlobalWrapper">
      <div className="milkBox">
        <div className="leftImg">
          <img src={LeftImg} />
>>>>>>> 4b464057eb6620a24450a9c7efd52b679df745de
        </div>
        <div className="text">
          <div className="text-groupM">
            <p className="headText">Mehrigiyo</p>
            <div className="text-groupM__texts">
              <h3>50% chegirma </h3>
              <h3> sutli choyda</h3>
            </div>
            <p className="bodyText">1+1 choy bilan xarid qilganingizda</p>
          </div>
          <div className="rightImg">
            <img src={RightImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
