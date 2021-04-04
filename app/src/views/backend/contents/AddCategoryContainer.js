import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Categories } from './../../../static/illustrations/categories.svg';

import { MainTitle } from '../../../components/common/titles';
import { Container } from '../../../components/common/containers';
import AddCategoryForm from '../../../components/backend/forms/AddCategoryForm';

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
