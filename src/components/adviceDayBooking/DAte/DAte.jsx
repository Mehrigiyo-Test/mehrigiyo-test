import React from 'react'
import "./DAteStyle.scss"

function DAte({name, day}) {
  return (
    <>
    <div tabIndex={1} className='DateCard'>
        <div>
        <p>{name}</p>
        <h5>{day}</h5>
        </div>
    </div>
    </>
  )
}

export default DAte