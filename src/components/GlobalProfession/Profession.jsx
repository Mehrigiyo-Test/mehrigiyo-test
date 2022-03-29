import './Profession.scss';

export default function Profession({data}) {
    return (
        <div className="boxOnline">
            <div className="doctorBox">
                <img src={data.img} alt="" />
                <h5>{data.title}</h5>
                <p>{data.text}</p>

                {data.img2}
        
            </div>
        </div>
    )
}