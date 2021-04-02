import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MainTitle } from '../components/common/titles';
import { Container } from '../components/common/containers';
import ResultsList from '../components/results/List';

const Buttons = styled.article`
  display: flex;
  justify-content: space-between;
`;

const AddEntry = () => (
  <Container>
    <header>
      <MainTitle>Co chcesz zrobić?</MainTitle>
    </header>
    <Buttons>
      <Link to="/add-entry">Dodać nowy wpis</Link>
      <Link to="/results">Sprawdzić jak mi idzie</Link>
    </Buttons>
  </Container>
);

export default AddEntry;
