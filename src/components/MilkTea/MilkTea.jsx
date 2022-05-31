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
                    <div className='text-group'>
                        <p className='headText'>Mehrigiyo</p>
                        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                            <h3>50% chegirma </h3>
                            <h3> sutli choyda</h3>
                        </div>
                    </div>
                    <p className='bodyText'>1+1 choy bilan xarid qilganingizda</p>
                    <div className="rightImg">
                        <img src={RightImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}