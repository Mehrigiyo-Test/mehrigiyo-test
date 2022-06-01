import React from 'react';
import ThreeBox from '../../components/ThreeBox/ThreeBox';
import NaturalProduct from '../../components/Products/Products';
import MilkTea from '../../components/MilkTea/MilkTea';
import BuyMehrigiyo from '../../components/BuyFromMehrigiyo/BuyMehrigiyo';
import ApplicationSec from '../../components/ApplicationSec/ApplicationSec';
import GlobalSponsors from '../../components/GlobalSponsors/GloblaSponsors';
import SortGoods from '../SortGoods/SortGoods';
import "./Products.scss"

function Products() {
  return (
    <>
      <NaturalProduct />
      <ThreeBox />
      <BuyMehrigiyo />
      <MilkTea />
      <ApplicationSec />
      <GlobalSponsors />
      <SortGoods/>
    </>
  )
}

export default Products