import React from 'react';
import BargRasm from '../../images/Group1.png';
import AchievementsIcon1 from '../../images/achievementsIcon1.png';
import AchievementsIcon2 from '../../images/achievementsIcon2.png';
import AchievementsIcon3 from '../../images/achievementsIcon3.png';
import AchievementsIcon4 from '../../images/achievementsIcon4.png';
import './style.css';



const Achievements = () => {
    return (
        <div className='achievements GlobalWrapper'>
            <div className='achievements-left '>
                <div className='leaff'>
                    <img src={BargRasm} alt="leaf" />
                </div>
                <div className='achievements__titles GlobalWrapper'>
                    <h1 className='achievements__titles__title'>30 yillik yutuqlarimiz</h1>
                    <p className='achievements__titles__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <div className='achievements__number GlobalWrapper'>
                <div className='achievements__number-top'>
                    <div className='achievements__number-top-1'>
                        <img src={AchievementsIcon1} alt="icon" />
                        <div className='achievements__number-top-1__titles'>
                            <h3 className='achievements__number-top-1__titles__title'>10,000+</h3>
                            <p className='achievements__number-top-1__titles__text'>yuklab olish</p>
                        </div>
                    </div>
                    <div className='achievements__number-top-1'>
                        <img src={AchievementsIcon2} alt="icon" />
                        <div className='achievements__number-top-1__titles'>
                            <h3 className='achievements__number-top-1__titles__title'>2 million</h3>
                            <p className='achievements__number-top-1__titles__text'>Foydalanuvchilar</p>
                        </div>
                    </div>
                </div>


                <div className='achievements__number-top'>
                    <div className='achievements__number-top-1'>
                        <img src={AchievementsIcon3} alt="icon" />
                        <div className='achievements__number-top-1__titles'>
                            <h3 className='achievements__number-top-1__titles__title'>50 000+</h3>
                            <p className='achievements__number-top-1__titles__text'>Mijozlar</p>
                        </div>
                    </div>
                    <div className='achievements__number-top-1'>
                        <img src={AchievementsIcon4} alt="icon" />
                        <div className='achievements__number-top-1__titles'>
                            <h3 className='achievements__number-top-1__titles__title'>12</h3>
                            <p className='achievements__number-top-1__titles__text'>Mamlakatlar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;