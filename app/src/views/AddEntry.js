import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Wallet } from './../static/images/wallet.svg';

import { MainTitle } from '../components/common/titles';
import AddingForm from '../components/forms/Add';

const Container = styled.main`
  width: max(50vw, 900px);
  margin: 100px auto;
`;

const HeaderFigure = styled(Wallet)`
  max-width: 200px;
  height: auto;

  margin: 3rem auto 4rem;
`;

const AddEntry = () => (
  <Container>
    <header>
      <HeaderFigure />
      <MainTitle>Zaktualizuj swoje inwestycje</MainTitle>
    </header>
    <AddingForm />
  </Container>
);

export default AddEntry;
