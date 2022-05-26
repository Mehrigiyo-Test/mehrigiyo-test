import React, { useState, useEffect } from 'react';
import "./waitingStyle.scss"
import LinearProgress from '@mui/material/LinearProgress';
import Progress from "./../../images/Progress.gif"

function Waiting() {
   const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 20;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <>
    <div className='progrWr'>
        <h2>Iltimos, kuting, biz shifokor bilan bog'lanmoqchimiz</h2>
        <div className='progstyl'> 
        <div className='AnimeWrap'>
            <img className='progAnime' src={Progress} alt="" />
        </div>
            <div className='pregress'>
            <LinearProgress variant="determinate" value={progress} />
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Waiting