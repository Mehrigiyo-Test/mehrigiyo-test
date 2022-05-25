import GlobalAdvice from "../GlobalAdvice/GlobalAdvice";
import PlayButton from '../../images/PlayButton.png';
import Medicine from '../../images/Medicine.png';
import Leaves from '../../images/Group3.png';
import BackgroundLeaves from "../../images/BackgroundImg.png";

export default function NaturalProduct() {

    const info = [
        {
            imgBackground: <img src={Leaves} alt=""/>,
            clickMe: <p className="headText">Bosh sahifa  /  <span> Mahsulotlar </span></p>,
            headerText: <h3>Mehrigiyo tabiiy mahsulotlari</h3>,
            text: <p className="infoText">Shifobaxsh o'simliklardan foydalanish, salomatlik va <br/>
            uzoq umr ko'rishingi uchun asosiy omildir.</p>,
            playBtn: <img src={PlayButton} alt="play button" />,
            img2: <img className="doctors" alt="" src={Medicine} />,
            back: <img className="background" alt="" src={BackgroundLeaves} />
        }
    ]

    return (
        <>
        <div className="NaturalContainer" style={{"margin-top": '110px'}}>
            {info.map((item) =>(
                <GlobalAdvice key={item.text} info={item}/>
            ))}
        </div>
        </>
    )
}