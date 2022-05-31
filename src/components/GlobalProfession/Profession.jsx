import "./Profession.scss";

export default function Profession({ data, immg, info }) {
  const API = "http://207.154.244.140:8000/";
  const ff = info.map((a) => a.type_doctor.name);
  
  const gg = (param) => {
    const filtered = ff.filter((a) => a === param);
    return `${filtered.length} shifokor`;
  };

  return (
    <div className="boxOnline">
      <div className="doctorBox">
        <img className="logo" src={immg} alt="" />
        <img src={API + data.image} alt="" />
        <h5>{data.name}</h5>
        <p>{gg(data.name)}</p>
      </div>
    </div>
  );
}
