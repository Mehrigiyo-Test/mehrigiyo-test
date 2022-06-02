import React from 'react'
import "./MeetingSucceedStyle.scss"
import succes from "./../../../../images/User/Succes.png"
import close from "./../../../../images/User/Close.png"

function MeetingSucceed({setOpen,setActive}) {
  return (
    <>
    <div className='SuccessWr'>
    <div className='succes'>
        <div><img src={succes} alt="" /></div>
        <div >
            <h5>Muvaffaqiyatli uchrashuv belgilandi</h5>
            <p>Iltimos, “Upcoming Schedule” jadvalingizni tekshirib turing</p>
        </div>
        <div className='SuccesClose' onClick={()=> setOpen(false)}><img src={close} alt="" /></div>
    </div>
    <div className='ConsultButton' onClick={()=> setActive('info')}> Konsultatsiya sahifasiga o’tish</div>
    </div>
    </>
  )
}

export default MeetingSucceed