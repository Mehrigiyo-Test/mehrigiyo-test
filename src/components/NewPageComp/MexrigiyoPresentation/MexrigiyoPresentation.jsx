import React from 'react'
import Groupffff from "./../../../images/Groupffff.png"
import Group from "./../../../images/Group.png"
import "./MexrigiyoPresentation.scss"
import { Link } from 'react-router-dom';
import Madrid from "./../../../images/madrid2.jpg"
import Ractangle from "././../../../images/Rectangle.png"
import RectangleNewsCard from './RectangleNewsCard/RectangleNewsCard';

function MexrigiyoPresentation() {
  return (
    <>
    <div>
        <div className='MexrigiyoPresent GlobalWrapper'>
          <div ><img className='leafs Bgleafs' src={Groupffff} alt="" /></div>
          <div className='plant bgPlant'><img className='plantImg' src={Group} alt="" /></div>
          <div className='News1_wrapper gap'> 
                    <p><Link to="/">Bosh sahifa </Link></p>
                    <span>/</span>
                    <p><Link to="/news">Yangiliklar</Link></p>
                    <span>/</span>
                    <p><Link to="/news/MexrigiyoPresentation">Mehrigiyo kompaniyasi ...</Link></p>
                    <span>/</span>
                    <p><Link to="/news/BeingHealthy">Salomatlik sari</Link></p>
                    </div>
            <h1>Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.</h1>
            <div className='display ctM'>
            <a className='ctM_a'>#Ziravorlar</a>
            <li>4 min oldin</li>
            </div>
        </div>
        <div className='GlobalWrapper ImgTxtPres display'>
          <div>
            <div className='BigImgpresent'><img src={Madrid} alt="" /></div>
            <div className='BigPresentTxt'>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra lacus non quisque gravida tortor. Enim id ornare nunc id quis vitae viverra dignissim. Enim nisi, pellentesque congue dictum faucibus. Ipsum risus platea arcu tristique. Sed arcu vitae ac interdum pretium turpis magna id ipsum. Turpis aenean habitant sit elementum vel diam nibh tellus at. Tortor risus eu lorem risus a nibh feugiat neque. Volutpat rhoncus ut at cursus in accumsan, consectetur. Tortor lorem vulputate convallis sagittis, non. Faucibus dignissim odio est eleifend volutpat neque. Integer elementum, rutrum lectus iaculis sapien, morbi turpis tincidunt at. Auctor at quisque ut et proin id purus id id. At turpis nibh maecenas integer augue sed vulputate elit sed. Quam senectus congue et in sem. In id viverra blandit facilisis enim, orci nibh. Sem egestas sed justo, sagittis, sapien aliquam tempor ac viverra. Quam ultricies nulla odio rhoncus elit malesuada condimentum tincidunt. Rutrum purus nibh mauris ultrices amet, commodo. Nulla at diam pulvinar at sed. Egestas in sed sit nisl, odio egestas metus in turpis. Tellus curabitur eget nulla leo pellentesque consectetur tortor. Id varius malesuada eget neque felis semper semper ac. Faucibus id libero lacus vitae gravida et diam nulla arcu. Leo amet nibh odio tortor, risus. Amet ac bibendum porttitor placerat rhoncus volutpat id sagittis dolor. Urna nunc elit eget accumsan. Scelerisque quis sed egestas risus nascetur dui id at. Eu amet, massa sit phasellus mauris lacus. Sed semper massa consequat sit faucibus eu enim tristique. Nulla fames egestas posuere cum urna, ullamcorper eu. Sit nulla diam eget mollis vitae. Pellentesque nibh euismod augue sociis. Sed lectus sed nibh amet. Duis interdum in vitae volutpat sit. Sit malesuada ut sed ultrices mattis lobortis dolor interdum ac. Libero justo, massa mauris interdum tincidunt tortor at. Sed orci volutpat amet dictumst semper. Vel eget sem mi nibh consectetur eros. Risus arcu nulla lacus, gravida aliquam. Habitasse at dui etiam turpis quam tortor.</p>
            </div>
          </div>
            <div>
              <div className='display rectangle'>
                <div className='Ractangle'><img src={Ractangle} alt="" /></div>
                <div className='RactNews'>So’ngi yangiliklar</div>
              </div>
              <div className='rectangle'><RectangleNewsCard
              date="12.09.2021"
              time="15:12"
              info='BARCHA KASALLIKLAR UCHUN DORI, MEHRIGIYO KOMPANIYASIDAN "SUMBUL SHIFO" TOPLAMI'
              />
              <RectangleNewsCard
              date="12.09.2021"
              time="15:12"
              info='Dream Tea-choy, bir kishi orzu qilgan choy!'
              />
              </div>
              
            </div>
        </div>
    </div>
    </>
  )
}

export default MexrigiyoPresentation