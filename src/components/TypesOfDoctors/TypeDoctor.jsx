import Profession from "../GlobalProfession/Profession";
import './TypesDoctor.scss';
import img from '../../images/Vector1.png';
import Backimg from '../../images/BackgroundImg.png';
import Img1 from '../../images/kidney1.png';
import Img2 from '../../images/Shape2.png';
import Img3 from '../../images/Shape3.png';
import Img4 from '../../images/Shape4.png';
import Img5 from '../../images/kidney5.png';
import Img6 from '../../images/kidney6.png';
import Img7 from '../../images/kidney7.png';
import Img8 from '../../images/kidney8.png';
import Img9 from '../../images/kidney9.png';
import Img10 from '../../images/kidney10.png';
import Img11 from '../../images/kidney11.png';
import Img12 from '../../images/kidney12.png';

export default function TypeDoctor() {

    const data = [
        {
            img: Img1,
            img2: <img className="logoDoc" src={img} />,
            title: 'Nefrolog',
            text: "2 029 shifokor",
        },
        {
            img: Img2,
            img2: <img className="logoDoc" src={img} />,
            title: 'Ginekolog',
            text: "1 870 shifokor",
        },
        {
            img: Img3,
            img2: <img className="logoDoc" src={img} />,
            title: 'Stomatologiya',
            text: "2 167 shifokor",
        },
        {
            img: Img4,
            img2: <img className="logoDoc" src={img} />,
            title: 'Jarrohlik',
            text: "4 shifokor",
        },
        {
            img: Img5,
            img2: <img className="logoDoc" src={img} />,
            title: 'Kardiolog',
            text: "12 shifokor",
        },
        {
            img: Img6,
            img2: <img className="logoDoc" src={img} />,
            title: 'Otolaringolog',
            text: "1 332 shifokor",
        },
        {
            img: Img7,
            img2: <img className="logoDoc" src={img} />,
            title: 'Dermotolog',
            text: "1 870 shifokor",
        },
        {
            img: Img8,
            img2: <img className="logoDoc" src={img} />,
            title: 'Yuqumli kasalliklar',
            text: "570 shifokor",
        },
        {
            img: Img9,
            img2: <img className="logoDoc" src={img} />,
            title: 'Endokrinolog',
            text: "3 shifokor",
        },
        {
            img: Img10,
            img2: <img className="logoDoc" src={img} />,
            title: 'Gastroenterolog',
            text: "194 shifokor",
        },
        {
            img: Img11,
            img2: <img className="logoDoc" src={img} />,
            title: 'Oftalmolog',
            text: "14 shifokor",
        },
        {
            img: Img12,
            img2: <img className="logoDoc" src={img} />,
            title: 'Pediatr',
            text: "23 shifokor",
        }
    ]

    return (
        <div className="container GlobalWrapper">
            <div className="headDoctor">
                <h3>Shifokorlar turlari</h3>
                <p className="type">Barcha turlari</p>
            </div>
           <div className="typeDoctor">
                {data.map((item) =>(
                        <Profession key={item.text} data={item}/>
                    ))}
           </div>
           <div className="backImg">
                <img src={Backimg} alt="Background" />
           </div>
        </div>
    )
}