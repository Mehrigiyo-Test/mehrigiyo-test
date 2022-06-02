import React from 'react';
import './History.scss';
import BackroundLeaf from '../../../images/User/BackgroundImg.png';

const History = () => {
    return (
        <div className='history GlobalWrapper'>
            <div className='history-title'>
                <h2 className='history-title__title'>Tarix</h2>
                <p className='history-title__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='history-bottom'>
                <div className='history-bottom__titles'>
                    <div className='history-bottom__titles__top__title'>
                        <span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6" cy="6" r="6" fill="#53B175" />
                            </svg>
                        </span>
                        <p className='history-bottom__titles__top__title__title'>2005 — 2006 года</p>
                    </div>
                    <div className='history-bottom__texts'>
                        <p className='history-bottom__texts__text'>2007 год</p>
                        <p className='history-bottom__texts__text'>2010 — 2013 года</p>
                        <p className='history-bottom__texts__text'>2015 год</p>
                        <p className='history-bottom__texts__text tt5'>2016 — 2017 года</p>
                        <p className='history-bottom__texts__text tt6'>апрель 2018 года</p>
                        <p className='history-bottom__texts__text tt7'>декабрь 2020 года</p>
                    </div>
                </div>
                <div className='history-bottom__card'>
                    <p className='history-bottom__card__text'>«Mehrigiyo» заняла 2-ое место в республиканском конкурсе «Ташаббус»</p>
                    <span className='bottom-line'>
                        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99981 0.25C6.16557 0.25 6.32454 0.315848 6.44175 0.433058C6.55897 0.550268 6.62481 0.70924 6.62481 0.875V15.6163L10.5573 11.6825C10.6747 11.5651 10.8338 11.4992 10.9998 11.4992C11.1658 11.4992 11.325 11.5651 11.4423 11.6825C11.5597 11.7999 11.6256 11.959 11.6256 12.125C11.6256 12.291 11.5597 12.4501 11.4423 12.5675L6.44231 17.5675C6.38426 17.6257 6.31529 17.6719 6.23935 17.7034C6.16342 17.7349 6.08202 17.7511 5.99981 17.7511C5.9176 17.7511 5.8362 17.7349 5.76027 17.7034C5.68434 17.6719 5.61537 17.6257 5.55731 17.5675L0.557313 12.5675C0.439955 12.4501 0.374023 12.291 0.374023 12.125C0.374023 11.959 0.439954 11.7999 0.557313 11.6825C0.674671 11.5651 0.833843 11.4992 0.999813 11.4992C1.16578 11.4992 1.32495 11.5651 1.44231 11.6825L5.37481 15.6163V0.875C5.37481 0.70924 5.44066 0.550268 5.55787 0.433058C5.67508 0.315848 5.83405 0.25 5.99981 0.25Z" fill="#53B175" />
                        </svg>
                    </span>
                </div>
                <div className='bc-leaf'>
                    <img src={BackroundLeaf} />
                </div>
            </div>
        </div>
    );
}

export default History;
