import './MilkTea.scss';
import LeftImg from '../../images/RightImg.png';
import RightImg from '../../images/LeftImg.png';

export default function MilkTea() {

    return (
        <div className="milkTeaContainer GlobalWrapper">
            <div className="milkBox">
                <div className="leftImg">
                    <img src={LeftImg} />
                </div>
                <div className="text">
                    <p className='headText'>Mehrigiyo</p>
                    <h3>50% chegirma <br /> sutli choyda</h3>
                    <p className='bodyText'>1+1 choy bilan xarid qilganingizda</p>
                    <div className="rightImg">
                        <img src={RightImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}