import React from 'react';
import Send from '../../../components/User/questions/send/send';
import Addres from '../../../components/User/Addres/Addres';
import YandexMaps from '../../../components/User/YandexMaps/Maps';
import LeavesBack from '../../../images/User/BackgroundLeaves.png';
import Leaves from '../../../images/User/Group3.png';

function Help() {

  const help = 
    {
      img1: <img className='leavesss' src={Leaves}/>,
      text: <p className='textSlash'>Bosh sahifa  /  <span> Yordam </span></p>,
      headtext: <h3 className='headText'>Mehrigiyo sizga yordam beradi</h3>,
      img2: <img className='backgroundImg' src={LeavesBack} />
    }

  return (
    <>
      <Send top={'60px'} img1={help.img1}  text={help.text} headtext={help.headtext} img2={help.img2} />
      <Addres />
      <YandexMaps />
    </>
  )
}

export default Help