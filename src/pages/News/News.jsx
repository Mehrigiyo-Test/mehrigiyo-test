import React from 'react';
import Groupffff from "../../images/Groupffff.png";
import './NewStyle.css'
import LastNews from '../../components/NewPageComp/lastNews/lastNews';
import RowNewsCard from '../../components/NewPageComp/RowNewsCard/RowNewsCard';
import Group from "./../../images/Group.png"
import rowImg from "./../../images/rowImg.png"
import Placeholder from "./../../images/Placeholder.png"

function News() {
  return (
    <>
    <div className='News'>
    <div className='News_wrapper'>
      <div ><img className='leafs' src={Groupffff} alt="" /></div>
      <div className='plant'><img className='plantImg' src={Group} alt="" /></div>
    <div className='LastNews_p'><LastNews/></div>
    <div><RowNewsCard
    img={rowImg}
    Greenholder={Placeholder}
    events="TADBIRLAR"
    time="04 авг 2021 07:55"
    theme="BARCHA KASALLIKLAR UCHUN DORI, MEHRIGIYO KOMPANIYASIDAN ..."
    txt="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
      /></div>
    </div>
    </div>
    </>
  )
// }
}

export default News