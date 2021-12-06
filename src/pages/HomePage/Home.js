import React from 'react';
import { homeObjOne, homeObjTwo } from './Data'; //, homeObjTwo, homeObjThree, homeObjFour
import { InfoSection } from '../../components'; //, Pricing

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      {/*<InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;