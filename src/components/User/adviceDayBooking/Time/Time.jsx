import React from 'react'
import "./TimeStyle.scss"

function Time({Time}) {
  return (
    <>
    <div tabIndex={1} className='TimeCArd'>
        <h5>{Time}</h5>
        <p></p>
    </div>
    </>
  )
}

export default Time