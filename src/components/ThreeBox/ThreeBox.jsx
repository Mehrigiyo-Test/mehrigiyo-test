import './ThreeBox.scss';
import Img1 from '../../images/GroupBox.png';
import Img2 from '../../images/GroupBox2.png';
import Img3 from '../../images/GroupBox3.png';

export default function ThreeBox() {

    return (
        <div className="threeContainer GlobalWrapper">
            <div className="text">
                <h3>Siz uchun eng yaxshi takliflar</h3>
                <p>Hammasi</p>
            </div>
            <div className="imgBox">
                <img src={Img1} alt="box" />
                <img src={Img2} alt="box" />
                <img src={Img3} alt="box" />
            </div>
        </div>
    )
}