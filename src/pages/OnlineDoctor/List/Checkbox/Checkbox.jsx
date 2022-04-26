import React, {useState} from 'react'
import checked from "./../../../../images/Checked.png"
import "./CeckboxStyle.css"
import box from "./../../../../images/box.png"

function Checkbox({name}) {
    const [show, setShow] = useState(false)
  return (
    <>
    <div className='Chekbox'>
        <div>
        {show ?
    <img src={checked} onClick={()=> setShow(false)} alt="" />
   : <img src={box} onClick={()=> setShow(true)} alt="" />
    }
        </div>
        <div>{name}</div>
    </div>
    </>
  )
}

export default Checkbox