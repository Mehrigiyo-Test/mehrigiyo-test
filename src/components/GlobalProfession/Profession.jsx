import "./Profession.scss";

export default function Profession({ data,immg}) {
  console.log(data, "bu props data");
  const API = "http://207.154.244.140:8000/";

  return (
    <div className="boxOnline">
      <div className="doctorBox">
        <img className="logo" src={immg} alt="" />
        <img src={API + data.image} alt="" />
        <h5>{data.name}</h5>
        <p>45</p>
      </div>
    </div>
  );
}
