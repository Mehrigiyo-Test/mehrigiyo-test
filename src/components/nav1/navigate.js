import React from 'react'
import "./styles.css"
import lokatsa from '../../images/Vector.png'
import profile from '../../images/profile.png'
// import flag_uzb from '../../images/flag_uzb-logo.png'
// import 


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
              <li>{item.name}</li>
            ))}
          </ul>
        </nav>

        <div className='navigate2'>
          <select>
            <option className='uz'>uz</option>
            <option className='ru'>ru</option>
            <option className='en'>en</option>
          </select>
          <div className='location'>
            <p>
              Toshkent shahar
            </p>
            <div className='lokatsa'>
              <img src={lokatsa} />
            </div>
          </div>
          <div className='login'>
            <p>
              Kirish
            </p>
            <div className='profil'> <img src={profile} /></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navigate

