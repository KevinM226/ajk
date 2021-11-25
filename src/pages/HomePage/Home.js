import React from 'react';
import { homeObjOne } from './Data'; //, homeObjTwo, homeObjThree, homeObjFour
import { InfoSection } from '../../components'; //, Pricing

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;