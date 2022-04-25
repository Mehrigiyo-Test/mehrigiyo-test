import React from 'react'
import "./MeetingSucceedStyle.css"
import succes from "./../../../images/Succes.png"
import close from "./../../../images/Close.png"

function MeetingSucceed() {
  return (
    <>
    <div className='SuccessWr'>
    <div className='succes'>
        <div><img src={succes} alt="" /></div>
        <div>
            <h5>Muvaffaqiyatli uchrashuv belgilandi</h5>
            <p>Iltimos, “Upcoming Schedule” jadvalingizni tekshirib turing</p>
        </div>
        <div className='SuccesClose'><img src={close} alt="" /></div>
    </div>
    <div className='ConsultButton'> Konsultatsiya sahifasiga o’tish</div>
    </div>
    </>
  )
}

export default MeetingSucceed