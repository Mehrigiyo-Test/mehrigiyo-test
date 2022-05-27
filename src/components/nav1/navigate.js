<<<<<<< HEAD
import React from "react";
import "./navStyles.css";
import lokatsa from "../../images/Vector.png";
import profile from "../../images/profile.png";
import Dropdown from "../Dropdown/Dropdown";
import Api from "../../Servis/ServisApi";


=======
import React from 'react'
import "./navStyles.scss"
import lokatsa from '../../images/Vector.png'
import profile from '../../images/profile.png'
import Dropdown from '../Dropdown/Dropdown'
import { onSubmit, onSubmit2 } from '../../api/registration'
>>>>>>> 62789142105898fac501bd435122957ecf5edad9

function Navigate() {
  const nav = [
    {
      name: "Mahsulotlar katalogi",
    },
    {
      name: "Foto-lavhalar",
    },
    {
      name: "Yetkazib berish va to'lash",
    },
    {
      name: "Aksiya",
    },
    {
      name: "Yangi",
    },
  ];

  Api.get('/specialist/doctors/')
    .then((response) => console.log(response))

  return (
    <div className="navigate">
<<<<<<< HEAD
      <div className="navigate__wrapper GlobalWrapper">
        <nav className="nav1">
          <ul className="ul">
            {nav.map((item) => (
              <li>{item.name}</li>
=======
      <div className='navigate__wrapper GlobalWrapper'>
        <nav className='nav1'>
          <ul className='ul'>
            {nav.map(item => (
              <li key={item.name}>{item.name}</li>
>>>>>>> 62789142105898fac501bd435122957ecf5edad9
            ))}
          </ul>
        </nav>

<<<<<<< HEAD
        <div className="navigate2">
          <Dropdown />
          <div className="location">
            <p className="locat">Toshkent shahar</p>
            <div className="lokatsa">
              <img src={lokatsa} />
            </div>
          </div>
          <a href="http://localhost:3001/">
            <div className="login">
              <p className="locat">Kirish</p>
              <div className="profil">
                {" "}
                <img src={profile} />
              </div>
            </div>
          </a>
=======
        <div className='navigate2'>
         <Dropdown/>
          <div className='location'>
            <p className='locat'>
              Toshkent shahar
            </p>
            <div className='lokatsa'>
              <img src={lokatsa} alt=""/>
            </div>
          </div>
          <div className='login'>
            <p className='locat' onClick={onSubmit}>
              Kirish
            </p>
            <div className='profil' onClick={onSubmit2}> <img src={profile} /></div>
          </div>

>>>>>>> 62789142105898fac501bd435122957ecf5edad9
        </div>
      </div>
    </div>
  );
}

export default Navigate;
