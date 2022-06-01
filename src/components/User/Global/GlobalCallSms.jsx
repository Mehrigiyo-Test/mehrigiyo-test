import React from 'react';
import CallIcon from '../../../images/User/call-icon.png';
import MessageIcon from '../../../images/User/message-icon.png';
import "./GlobalCallSms.scss";


const GlobalCallSms = () => {
  return (
    <div className='banner-card__icons'>
      <a href="tel:+998901234567"><img src={CallIcon} alt="icon" /></a>
      <img src={MessageIcon} alt="icon" />
    </div>
  )
}

export default GlobalCallSms