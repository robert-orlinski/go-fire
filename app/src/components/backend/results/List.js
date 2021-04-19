import React from 'react';
import { NarrowCenterContainer } from '../../common/containers';
import ListedResult from './atoms/ListedResult';

const ResultsListInner = ({ results }) =>
  results ? (
    results.map((result) => <ListedResult key={result._id} {...result} />)
  ) : (
    <NarrowCenterContainer>
      <p>There is no results :c</p>
    </NarrowCenterContainer>
  );

export default ResultsListInner;
