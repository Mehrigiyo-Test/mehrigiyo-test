import './GlobalAdvice.scss';


export default function GlobalAdvice({info}) {
    return (
        <div className="adviceDoctor GlobalWrapper">
            {info.imgBackground}
            <div className="adviceText">
                {info.clickMe}
                {info.headerText}
                {info.text}
                <div className="btnContainer">
                    {info.buttonGlobal}
                    {info.playBtn}
                </div>
            </div>
            <div className="adviceImg">
                {info.img1}
                {info.img2}
                {info.img3}
                {info.back}
            </div>
            
        </div>
    )
}
        