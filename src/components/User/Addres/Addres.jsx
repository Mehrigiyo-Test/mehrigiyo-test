import './Addres.scss';
import {IoMdCall} from 'react-icons/io';

export default function Addres() {

    return (
        <div className="addressContainer GlobalWrapper">
            <div className="addressBox">
                <div className="leftBox addres">
                    <div className="addresUsa ">
                        <h3>AQSH</h3>
                        <p>Manzil: 625 34-ave, San-Fransisko, CA 94121, AQSh.</p>
                        <span className='phone'><IoMdCall className='icon' /> +1 415 387 33 99</span>
                    </div>
                    <div className="addresBaa">
                        <h3>Saudiya Arabistoni</h3>
                        <span className='phone'><IoMdCall className='icon' />+0 53 223 52 23</span>
                    </div>
                    <div className="addresKazak">
                        <h3>Qozog'iston, Olma-Ota shahri </h3>
                        <span className='phone'><IoMdCall className='icon' />+7 747 495 35 12</span>
                    </div>
                </div>
                <div className="rightBox addres">
                    <div className="addresUzb">
                        <h3>O'zbekiston</h3>
                        <p>Manzil: Farg‘ona tumani, Uchko‘prik tumani, <br /> O‘rozimergan ko‘chasi 94-uy</p>
                        <span className='phone'><IoMdCall className='icon' />+998 97 700 78 72</span>
                    </div>
                    <div className="addresRussia">
                        <h3>Rossiya, Moskva shahri.</h3>
                        <span className='phone'><IoMdCall className='icon' />+7 995 500 34 56</span>
                    </div>
                    <div className="addresKgz">
                        <h3>Qirg'iziston, O'sh shahri</h3>
                        <span className='phone'><IoMdCall className='icon' />+996 55 828 28 22</span>
                    </div>
                </div>
            </div>
        </div>
    )
}