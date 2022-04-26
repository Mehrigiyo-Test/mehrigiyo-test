import React, { useState } from 'react'
import "./adviceDayBookingStyle.css"
import SelectDay from "./../../images/SelectDay.png" 
import CAlendar from "./../../images/CalendarIcon.png"
import DAte from './DAte/DAte'
import Time from './Time/Time'
import close from "./../../images/Close.png"
import TaemOfLeaf from "./../../images/TeamOfLeaf.png"
import bgLeaf from "./../../images/GroupBacground(1).png"
import Modal from '../Modal'
import Waiting from '../waiting/waiting'

function AdviceDayBooking({setOpen,setActive,set}) {

    const date = [
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        {name: "Today",
        day: 8
        },
        
    ]
   
  return (
    <>
    <div className='SalectDayBgWrap'>
        <div>
            <div className='advHead'>
                <div>
                <h2>Maslahat kunni bron qiling</h2>
                <p>Iltimos, maslahat kuniga borishdan oldin kun va vaqtni tanlang</p>
                </div>
                <div><img src={SelectDay} alt="" /></div>
            </div>
            <div className='adviceDate'>
                <p>Yanvar, 2022 yil</p>
                <div><img src={CAlendar} alt="" /></div>
            </div>
            <div className='Datestilnat'>{date.map((item)=>(<DAte name={item.name} day={item.day}/>))}
            </div>
            <div className='Timestil'>
                <Time
                Time="09:00 - 10:00"
                />
                <Time
                Time="09:00 - 10:00"
                />
                <Time
                Time="09:00 - 10:00"
                />
                <Time
                Time="09:00 - 10:00"
                />
                <Time
                Time="09:00 - 10:00"
                />
                <Time
                Time="09:00 - 10:00"
                />
            </div>
        </div>
        <div className='close' onClick={()=> setOpen('')}><img src={close} alt="" /></div>
        <div ><button className='DocButton' onClick={()=> setActive('waiting')}>Appointment</button></div>
        <div className='TeamLeafDate'><img src={TaemOfLeaf} alt="" /></div>
        <div className='modalBakDAte'><img src={bgLeaf} alt="" /></div>
    </div>
    </>
  )
}

export default AdviceDayBooking