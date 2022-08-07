import "./Profession.scss";

export default function Profession({ data, immg, info }) {

 

  return (
    <div className="boxOnline">
      <div className="doctorBox">
        {/* <img className="logo" src={immg} alt="" /> */}
        <img src={data.image} alt="" />
        <h5>{data.name}</h5>
        <p>{data.get_doctors_count} shifokor</p>
      </div>
    </div>
  );
}
