import './BuyMehrigiyo.scss';
import Background from '../../images/LeavesBacground.png'
import Img1 from '../../images/Juice1.png';
import Img2 from '../../images/Juice2.png';
import Img3 from '../../images/Juice3.png';
import Img4 from '../../images/Juice4.png';
import Img5 from '../../images/Juice5.png';
import Img6 from '../../images/Juice6.png';
import Img7 from '../../images/Juice7.png';
import Img8 from '../../images/Juice8.png';
import Img9 from '../../images/Juice9.png';
import Img10 from '../../images/Juice10.png';
import Img11 from '../../images/Juice11.png';

export default function BuyMehrigiyo() {

    const buyinfo = [
        {
            title: 'Sharbatlar',
            img: Img1
        },
        {
            title: 'Asal',
            img: Img2
        },
        {
            title: 'Choy',
            img: Img3
        },
        {
            title: 'Ziravorlar',
            img: Img4
        },
        {
            title: 'Yog’',
            img: Img5
        },
        {
            title: 'Tabletkalar',
            img: Img6
        },
        {
            title: 'Non',
            img: Img7
        },
        {
            title: 'Lolipoplar',
            img: Img8
        },
        {
            title: 'Halva',
            img: Img9
        },
        {
            title: 'Sovun',
            img: Img10
        },
        {
            title: 'Sprey',
            img: Img11
        }, 
    ]

    return (
        <div className="boughtContainer GlobalWrapper">
            <div className="box">
                <h3>Mehrigiyodan xarid qiling</h3>
                <div className="boughtBox">
                    {buyinfo.map((item) => (
                        <div className="buyInfo" key={item.title}>
                            <p>{item.title}</p>
                            <img src={item.img} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
            <img className='background' src={Background} alt="" />
        </div>
    )
}