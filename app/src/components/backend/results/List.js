import React from 'react';

import ListedResult from './atoms/ListedResult';
import { NarrowCenterContainer } from '../../common/containers';

const ResultsListInner = ({ results, handleEntryDelete }) =>
  results.length > 0 ? (
    results.map((result) => (
      <ListedResult
        key={result._id}
        handleEntryDelete={handleEntryDelete}
        {...result}
      />
    ))
  ) : (
    <NarrowCenterContainer>
      <p>There is no results :c</p>
    </NarrowCenterContainer>
  );

export default ResultsListInner;
