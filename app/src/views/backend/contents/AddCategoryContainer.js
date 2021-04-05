import React from 'react';
import styled from 'styled-components';

import startBannerImage from './../../../static/banners/add-entry.jpg';

import { NarrowContainer } from '../../../components/common/containers';
import AddCategoryForm from '../../../components/backend/forms/AddCategoryForm';
import Banner from '../../../components/backend/Banner';

const AddCategoryContainer = () => (
  <>
    <Banner style={{ 'background-image': `url(${startBannerImage})` }}>
      Add category
    </Banner>
    <NarrowContainer>
      <AddCategoryForm />
    </NarrowContainer>
  </>
);

export default AddCategoryContainer;
