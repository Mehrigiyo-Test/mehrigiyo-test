import React from 'react'
import "./navStyles.scss"
import lokatsa from '../../../images/User/Vector.png'
import profile from '../../../images/User/profile.png'
import Dropdown from '../Dropdown/Dropdown'
// import { onSubmit, onSubmit2 } from '../../api/registration'

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

  // Api.get('/specialist/doctors/')
  //   .then((response) => console.log(response))

  return (
    <div className="navigate">
      <div className='navigate__wrapper GlobalWrapper'>
        <nav className='nav1'>
          <ul className='ul'>
            {nav.map(item => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </nav>

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
            <p className='locat' >
              Kirish
            </p>
            <div className='profil'> <img src={profile} /></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navigate;
