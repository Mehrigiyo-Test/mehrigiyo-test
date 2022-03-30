import './Warning.scss';
import VectorLogo from '../../images/Vectorrr.png';
import Close from '../../images/Close.png';

export default function Warning() {

    return (
        <div className="warning GlobalWrapper">
            <div className="textBox">
                <div className="leftBox">
                    <img src={VectorLogo} alt="warning" />
                    <p className='text'>Bepul shifokor maslahat olish uchun avval mutaxassislikni tanlab va o’zizga ma’qul kelgan shifokorni tanlang </p>
                </div>
                <img src={Close} alt="close" />
            </div>
        </div>
    )
}