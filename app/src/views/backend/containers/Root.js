import React from 'react';
import styled from 'styled-components';

import Nav from '../../../components/backend/Nav';
import Routes from '../containers/Routes';

const Main = styled.div`
  display: flex;

  padding-left: var(--nav-width-desktop);
`;

const BackendRoot = ({ children }) => (
  <Main>
    <Nav />
    <Routes />
  </Main>
);

export default BackendRoot;
