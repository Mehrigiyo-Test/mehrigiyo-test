import React from 'react'
import "./styles.css" 
import lokatsa from '../../images/Vector.png'
import profile from '../../images/profile.png'
// import flag_uzb from '../../images/flag_uzb-logo.png'
// import 


function Navigate(){
  const nav = [
    {
      name:"Mahsulotlar katalogi"
    },
    {
      name:"Foto-lavhalar"
    },
    {
      name:"Yetkazib berish va to'lash"
    },
    {
      name:"Aksiya"
    },
    {
      name:"Yangi"
    }
  ]

  return (
  <div className="navigate">
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
   <div> 
 |      Toshkent shahar   
   </div>
   <div className='lokatsa'></div>
   <img src={lokatsa}/>
 <div >
 |      Kirish   
 </div>
 <div className='profil'></div>
 <img src={profile}/>
 </div>
  </div>
  )
}

export default Navigate

