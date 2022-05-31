import './BuyMehrigiyo.scss';
import Background from '../../images/LeavesBacground.png';
import { useSelector } from 'react-redux';

export default function BuyMehrigiyo() {

    const { getType } = useSelector((state) => state.getProductsTypes);
    console.log(getType, "bu getType");

    const API = "http://207.154.244.140:8000/";


    return (
        <div className="boughtContainer GlobalWrapper">
            <div className="box">
                <h3>Mehrigiyodan xarid qiling</h3>
                <div className="boughtBox">
                    {getType.map((item) => (
                        <div className="buyInfo" key={item.id}>
                            <p>{item.name}</p>
                            <img src={API + item.image} alt="icon" />
                        </div>
                    ))}
                </div>
            </div>
            <img className='background' src={Background} alt="icon" />
        </div>
    )
}