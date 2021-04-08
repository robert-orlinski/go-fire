import React, { useState, useEffect } from 'react';

import { getEntries } from '../../../../common/api/requests';
import { NarrowContainer } from '../../../../components/common/containers';

import Banner from '../../../../components/backend/Banner';
import bannerImage from './../../../../static/banners/results.jpg';
import ResultsChartInner from '../../../../components/backend/results/Chart';

const ResultsChart = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getEntries(setResults);
  }, []);

  return (
    <>
      <Banner style={{ 'background-image': `url(${bannerImage})` }}>
        Results chart
      </Banner>
      <NarrowContainer>
        <ResultsChartInner results={results} />
      </NarrowContainer>
    </>
  );
};

export default ResultsChart;
