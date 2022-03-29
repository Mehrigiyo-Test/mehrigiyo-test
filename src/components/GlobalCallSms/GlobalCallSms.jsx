import React from 'react';
import CallIcon from '../../images/call-icon.png';
import MessageIcon from '../../images/message-icon.png';
import "./GlobalCallSms.scss";


const GlobalCallSms = () => {
  return (
    <div className='banner-card__icons'>
      <img src={CallIcon} alt="icon" />
      <img src={MessageIcon} alt="icon" />
    </div>
  )
}

export default GlobalCallSms