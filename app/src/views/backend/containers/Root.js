import React from 'react';
import styled from 'styled-components';

import { MainTitle } from '../../../components/common/titles';
import { Container } from '../../../components/common/containers';

import Nav from '../../../components/backend/Nav';
import Routes from '../containers/Routes';

const BackendRoot = ({ children }) => (
  <main>
    <Nav />
    <Container>
      <header>
        <MainTitle>Add category</MainTitle>
      </header>
      <Routes />
    </Container>
  </main>
);

export default BackendRoot;
