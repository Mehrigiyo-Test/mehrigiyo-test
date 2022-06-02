import React from 'react';
import ThreeBox from '../../../components/User/ThreeBox/ThreeBox';
import NaturalProduct from '../../../components/User/Products/Products';
import MilkTea from '../../../components/User/MilkTea/MilkTea';
import BuyMehrigiyo from '../../../components/User/BuyFromMehrigiyo/BuyMehrigiyo';
import ApplicationSec from '../../../components/User/ApplicationSec/ApplicationSec';
import GlobalSponsors from '../../../components/User/GlobalSponsors/GloblaSponsors';
import "./Products.scss"
import TopProduct from "../../../components/User/TopProduct/TopProduct"

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