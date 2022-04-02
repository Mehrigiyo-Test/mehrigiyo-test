import React from 'react';
import ThreeBox from '../../components/ThreeBox/ThreeBox';
import NaturalProduct from '../../components/Products/Products';
import MilkTea from '../../components/MilkTea/MilkTea';
import BuyMehrigiyo from '../../components/BuyFromMehrigiyo/BuyMehrigiyo';
import ApplicationSec from '../../components/ApplicationSec/ApplicationSec';
import "./Products.scss"

function Products() {
  return (
    <>
      <NaturalProduct />
      <ThreeBox />
      <BuyMehrigiyo />
      <MilkTea />
      <ApplicationSec />
    </>
  )
}

export default Products