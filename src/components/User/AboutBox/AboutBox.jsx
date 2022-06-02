import ImgRight from '../../../images/User/organicLogos1.png';
import PlayButton from '../../../images/User/PlayButton.png';
import Leaves from '../../../images/User/Group3.png';
import GlobalAdvice from "../GlobalAdvice/GlobalAdvice";

export default function AboutBox() {

    const info = [
        {
            imgBackground: <img src={Leaves} />,
            clickMe: <p className="headText">Bosh sahifa  /  <span> Biz haqimizda </span></p>,
            headerText: <h3>Mehrigiyo</h3>,
            text: <p className="infoText">shifobaxsh o'simliklar etishtirish va salomatlik va uzoq umr ko'rish <br /> uchun mahsulotlar ishlab chiqarish kompaniyasi.</p>,
            playBtn: <img src={PlayButton} alt="play button" />,
            img2: <img className='imgRight' src={ImgRight} />
        }
    ]

    return (
        <>
            {info.map((item) =>(
                <GlobalAdvice key={item.text} info={item}/>
            ))}
        </>
    )
}