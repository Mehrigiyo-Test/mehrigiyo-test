import React from 'react';
import Send from '../../components/questions/send/send';
import Addres from '../../components/Addres/Addres';
import YandexMaps from '../../components/YandexMaps/Maps';
import LeavesBack from '../../images/BackgroundLeaves.png';
import Leaves from '../../images/Group3.png';

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