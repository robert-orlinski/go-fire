import React from 'react';
import styled from 'styled-components';

import Nav from '../../../components/backend/Nav';
import Routes from './Routes';

const Main = styled.div`
  display: flex;

  padding-left: var(--nav-width-desktop);
`;

const BackendRoot = () => (
  <Main>
    <Nav />
    <Routes />
  </Main>
);

export default BackendRoot;
