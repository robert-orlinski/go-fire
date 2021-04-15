import React, { useState, useEffect } from 'react';

import { getEntries } from '../../../../common/api/requests';
import { NarrowContainer } from '../../../../components/common/containers';

import Banner from '../../../../components/backend/Banner';
import bannerImage from './../../../../static/banners/results.jpg';
import ResultsListInner from '../../../../components/backend/results/List';

const ResultsList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getEntries(setResults);
  }, []);

  return (
    <>
      <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
        Results list
      </Banner>
      <NarrowContainer>
        <ResultsListInner results={results} />
      </NarrowContainer>
    </>
  );
};

export default ResultsList;
