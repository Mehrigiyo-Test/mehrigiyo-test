import React from 'react';
import CallIcon from '../../../images/User/call-icon.png';
import MessageIcon from '../../../images/User/message-icon.png';
import "./GlobalCallSms.scss";



const GlobalCallSms = () => {
  return (
    <div className='banner-card__icons'>
      <div id="app">
          <i className='fas fa-phone' id='app__call'></i>
          <i class="fa-solid fa-comment" id='app__sms'></i>
      </div>
    </div>
  )
}

export default GlobalCallSms;