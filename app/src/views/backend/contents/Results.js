import React, { useState, useEffect } from 'react';

import { getEntries, deleteEntry } from '../../../common/api/requests';
import { NarrowContainer } from '../../../components/common/containers';

import Banner from '../../../components/backend/Banner';
import bannerImage from '../../../static/banners/results.jpg';
import ResultsListInner from '../../../components/backend/results/List';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getEntries(setResults);
  }, []);

  const handleEntryDelete = (_id) => {
    const resultsWithoutDeletedEntry = results.filter((entry) => {
      return entry._id !== _id;
    });
    setResults(resultsWithoutDeletedEntry);

    deleteEntry(_id);
  };

  return (
    <>
      <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
        Results list
      </Banner>
      <NarrowContainer>
        <ResultsListInner
          results={results}
          handleEntryDelete={handleEntryDelete}
        />
      </NarrowContainer>
    </>
  );
};

export default Results;
