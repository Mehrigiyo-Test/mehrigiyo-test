import './Profession.scss';

export default function Profession({data}) {
    return (
        <div className="boxOnline">
            <div className="doctorBox">
                <img className='logo' src={data.img} alt="" />
                {data.img2}
                <h5>{data.title}</h5>
                <p>{data.text}</p>
            </div>
        </div>
    )
}