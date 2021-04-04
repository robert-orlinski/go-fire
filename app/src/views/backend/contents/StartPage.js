import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MainTitle } from '../../../components/common/titles';
import { Container } from '../../../components/common/containers';

const Buttons = styled.article`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StartPage = () => (
  <Container>
    <header>
      <MainTitle>Co chcesz zrobić?</MainTitle>
    </header>
    <Buttons>
      <Link to="/add-entry">Dodać nowy wpis</Link>
      <Link to="/add-category">Dodać nową kategorię</Link>
      <Link to="/results">Sprawdzić jak mi idzie</Link>
    </Buttons>
  </Container>
);

export default StartPage;
