import React from 'react'
import Bannerinput from '../../components/bannerInput/bannerInput';
import Banner from '../Banner/Banner';
import Infosection from '../InfoSection/InfoSection';
import Bannercard from './../../components/bannerCard/bannerCard';

function Home() {
  return (
    <>
      <Banner/>
      <Bannerinput/>
      <Bannercard/>
      <Infosection/>
      {/* <Infosection title="Tez to'lov" text="100% xavfsiz to'lov"/> */}
    </>
  )
}

export default Home;
