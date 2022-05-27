import React from 'react';
import Groupffff from "../../images/Groupffff.png";
import './NewStyle.scss'
import LastNews from '../../components/NewPageComp/lastNews/lastNews';
import RowNewsCard from '../../components/NewPageComp/RowNewsCard/RowNewsCard';
import Group from "./../../images/Group.png"
import rowImg from "./../../images/rowImg.png"
import Placeholder from "./../../images/Placeholder.png"
import ColumnCardTxt from './../../components/NewPageComp/ColumnCardNewsTxt/ColumnCardTxt'
import NewsCard from '../../components/NewsCard/NewsCard';
import sliderEx from "./../../images/sliderEx.png"
import { useSelector } from 'react-redux';

function News() {
  const { data } = useSelector((state) => state.getDoctors);
  console.log(data, "BU DATA2");
  return (
    <>
    <div className='News'>
    <div className='News_wrapper'>
       <div ><img className='leafs' src={Groupffff} alt="" /></div>
      <div className='plant'><img className='plantImg' src={Group} alt="" /></div>
    <div className='LastNews_p'><LastNews/></div>
    <div className='display'><RowNewsCard
    img={rowImg}
    Greenholder={Placeholder}
    events="TADBIRLAR"
    time="04 авг 2021 07:55"
    theme="BARCHA KASALLIKLAR UCHUN DORI, MEHRIGIYO KOMPANIYASIDAN ..."
    txt="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
      />
      <RowNewsCard
    img={rowImg}
    Greenholder={Placeholder}
    events="TADBIRLAR"
    time="04 авг 2021 07:55"
    theme="BARCHA KASALLIKLAR UCHUN DORI, MEHRIGIYO KOMPANIYASIDAN ..."
    txt="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
      />
      </div>
     <div><ColumnCardTxt/></div>
      <div className='display NewsCardpadding'><div><NewsCard
      img={sliderEx}
      category="#Ziravorlar"
      time="4 min oldin"
      theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
      info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
      />
      <NewsCard
      img={sliderEx}
      category="#Ziravorlar"
      time="4 min oldin"
      theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
      info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
      /></div>
      <div><NewsCard
      img={sliderEx}
      category="#Ziravorlar"
      time="4 min oldin"
      theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
      info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
      />
      <NewsCard
      img={sliderEx}
      category="#Ziravorlar"
      time="4 min oldin"
      theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
      info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
      /></div>
       <div><NewsCard
      img={sliderEx}
      category="#Ziravorlar"
      time="4 min oldin"
      theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
      info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
      />
      <NewsCard
      img={sliderEx}
      category="#Ziravorlar"
      time="4 min oldin"
      theme='Mehrigiyo kompaniyasi "Detaksioma - 100% tabiy vosita" mahsulotini taqdim etadi.'
      info="Uning tarkibida kimyoviy o'g'it ishlatmasdan O'zbekistonning ekologik toza hududida yetishtiril-gan tabiiy komponentlar mavjud."
      /></div></div>
    </div>
    </div>
    </>
  )
// }
}

export default News