import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';
import Table from './Table';

function Database() {
  return (
    <>
      <Table />
      {//<InfoSection {...homeObjOne} />
      //<InfoSection {...homeObjTwo} />
      }</>
  );
}

export default Database;
