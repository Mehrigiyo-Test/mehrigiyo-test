import React from 'react'
import "./navigate.css" 



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
   <img />
 <div >
 |      Kirish   
 </div>
 <div className='profil'></div>
 </div>
  </div>
  )
}

export default Navigate

