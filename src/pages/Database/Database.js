import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';

function Database() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Database;
