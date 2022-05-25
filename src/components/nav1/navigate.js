import React from 'react'
import "./navStyles.css"
import lokatsa from '../../images/Vector.png'
import profile from '../../images/profile.png'
import Dropdown from '../Dropdown/Dropdown'
import { onSubmit, onSubmit2 } from '../../api/registration'

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
            <p className='locat' onClick={onSubmit}>
              Kirish
            </p>
<<<<<<< HEAD
            <div className='profil' onClick={onSubmit2}> <img src={profile} /></div>
=======
            <div className='profil'> <img src={profile} alt=""/></div>
>>>>>>> 29e0f65f714946beef3dd2fc261b2f3660c2f1fa
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navigate

