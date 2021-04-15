import React from 'react';
import ListedResult from './atoms/ListedResult';

const ResultsListInner = ({ results }) =>
  results &&
  results.map((result) => <ListedResult key={result._id} {...result} />);

export default ResultsListInner;
