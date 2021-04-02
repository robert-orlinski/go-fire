import React from 'react';
import styled from 'styled-components';

import { MainTitle } from '../components/common/titles';
import { Container } from '../components/common/containers';
import ResultsList from '../components/results/List';

const AddEntry = () => (
  <Container>
    <header>
      <MainTitle>Podgląd</MainTitle>
    </header>
    <ResultsList />
  </Container>
);

export default AddEntry;
