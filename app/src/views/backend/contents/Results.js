import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { MainTitle } from '../../../components/common/titles';
import { Container } from '../../../components/common/containers';
import ResultsList from '../../../components/backend/results/List';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/get-all-entries`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      response.json().then((data) => setResults(Object.values(data)));
    });
  }, []);

  return (
    <Container>
      <header>
        <MainTitle>Results</MainTitle>
      </header>
      <ResultsList results={results} />
    </Container>
  );
};

export default Results;
