import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Wallet } from './../static/images/wallet.svg';

import { MainTitle } from './common/titles';
import AddingForm from './forms/AddingForm';

const Container = styled.main`
  width: max(50vw, 900px);
  margin: 120px auto;
`;

const Header = styled.header``;

const HeaderFigure = styled(Wallet)`
  max-width: 200px;
  height: auto;

  margin: 3rem auto 4rem;
`;

const AddEntry = () => (
  <Container>
    <Header>
      <HeaderFigure />
      <MainTitle>Zaktualizuj swój budżet</MainTitle>
    </Header>
    <AddingForm />
  </Container>
);

export default AddEntry;
