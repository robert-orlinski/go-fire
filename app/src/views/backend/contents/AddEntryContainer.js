import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Wallet } from './../../../static/illustrations/wallet.svg';

import { MainTitle } from '../../../components/common/texts';
import { Container } from '../../../components/common/containers';

import AddEntryForm from '../../../components/backend/forms/AddEntryForm';

const HeaderFigure = styled(Wallet)`
  max-width: 200px;
  height: auto;

  margin: 3rem auto 4rem;
`;

const AddEntryContainer = () => (
  <Container>
    <header>
      <HeaderFigure />
      <MainTitle>Update your entries</MainTitle>
    </header>
    <AddEntryForm />
  </Container>
);

export default AddEntryContainer;
