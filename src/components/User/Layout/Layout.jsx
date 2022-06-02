import React from 'react'
import Navigate from '../nav1/navigate'
import Navigate2 from "../nav2/navigate2"
import GlobalCallSms from "../Global/GlobalCallSms"
import Footer from "../footer/footer"
import ScrollTop from '../ScrollTop/ScrollTop'
const LayoutUser = ({children}) => {
  return (
   <>
   <Navigate/>
   <Navigate2/>
   <GlobalCallSms />
    {children}
    <Footer/>
    <ScrollTop/>
   </>
  )
}

export default LayoutUser