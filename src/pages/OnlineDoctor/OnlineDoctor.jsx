import React from 'react';
import FreeAdvice from '../../components/FreeAdvice/FreeAdvice';
import Ambulance from '../../components/Ambulance/Ambulance';
import TypeDoctor from '../../components/TypesOfDoctors/TypeDoctor';
import Warning from '../../components/Warning/Warning';
function OnlineDoctor() {
  
  return (
    <>
      <Warning />
      <FreeAdvice />
      <TypeDoctor />
      <Ambulance />
    </>
  )
}

export default OnlineDoctor