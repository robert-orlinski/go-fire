import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Categories } from './../static/images/categories.svg';

import { MainTitle } from '../components/common/titles';
import { Container } from '../components/common/containers';
import AddCategoryForm from '../components/forms/AddCategoryForm';

const HeaderFigure = styled(Categories)`
  max-width: 200px;
  height: auto;

  margin: 3rem auto 4rem;
`;

const AddCategoryContainer = () => (
  <Container>
    <header>
      <HeaderFigure />
      <MainTitle>Add category</MainTitle>
    </header>
    <AddCategoryForm />
  </Container>
);

export default AddCategoryContainer;
