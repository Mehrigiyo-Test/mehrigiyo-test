import React, { useState } from 'react';
import './Warning.scss';
import VectorLogo from '../../../images/User/Vectorrr.png';
import Close from '../../../images/User/Close.png';

export default function Warning() {

    const [state, setState] = useState(true);

    const func = () => {
        setState(!state)
    }

    return (
        <div>
           {state ? (
                <div className="warning GlobalWrapper">
                <div className="textBox">
                    <div className="leftBox">
                        <img src={VectorLogo} alt="warning" />
                        <p className='text'>Bepul shifokor maslahat olish uchun avval mutaxassislikni tanlab va o’zizga ma’qul kelgan shifokorni tanlang </p>
                    </div>
                    <img onClick={func} src={Close} alt="close" />
                </div>
            </div>
           ): null}
        </div>
    )
}