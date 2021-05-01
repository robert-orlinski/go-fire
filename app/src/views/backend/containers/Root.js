import React from 'react';
import styled from 'styled-components';

import { minD, maxD } from './../../../common/helpers/devices';

import Nav from '../../../components/backend/Nav';
import Routes from './Routes';

const Main = styled.div`
  display: flex;

  @media ${minD.tabletL} {
    padding-left: var(--nav-width);
  }

  @media ${maxD.tabletL} {
    padding-top: var(--nav-height);
  }
`;

const BackendRoot = () => (
  <Main>
    <Nav />
    <Routes />
  </Main>
);

export default BackendRoot;
