import React from 'react';
import ListedResult from './atoms/ListedResult';

const ResultsListInner = ({ results }) =>
  results && results.map((result) => <ListedResult {...result} />);

export default ResultsListInner;
