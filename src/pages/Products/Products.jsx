import React from 'react';
import ThreeBox from '../../components/ThreeBox/ThreeBox';
import NaturalProduct from '../../components/Products/Products';
import MilkTea from '../../components/MilkTea/MilkTea';
import BuyMehrigiyo from '../../components/BuyFromMehrigiyo/BuyMehrigiyo';
import ApplicationSec from '../../components/ApplicationSec/ApplicationSec';
import GlobalSponsors from '../../components/GlobalSponsors/GloblaSponsors';
import "./Products.scss"
import TopProduct from "../../components/TopProduct/TopProduct"

function Products() {
  return (
    <>
      <NaturalProduct />
      <ThreeBox />
      <BuyMehrigiyo />
      <MilkTea />
      <TopProduct/>
      <ApplicationSec />
      <GlobalSponsors />
    </>
  )
}

export default Products