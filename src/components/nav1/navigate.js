import React from 'react'
import "./navStyles.css"
import lokatsa from '../../images/Vector.png'
import profile from '../../images/profile.png'
import Dropdown from '../Dropdown/Dropdown'

function Navigate() {
  const nav = [
    {
      name: "Mahsulotlar katalogi"
    },
    {
      name: "Foto-lavhalar"
    },
    {
      name: "Yetkazib berish va to'lash"
    },
    {
      name: "Aksiya"
    },
    {
      name: "Yangi"
    }
  ]

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
            <p className='locat'>
              Kirish
            </p>
            <div className='profil'> <img src={profile} alt=""/></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navigate

