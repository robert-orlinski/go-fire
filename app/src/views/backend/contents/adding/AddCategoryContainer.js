import React from 'react';

import bannerImage from './../../../../static/banners/add-category.jpg';

import { NarrowCenterContainer } from '../../../../components/common/containers';
import AddCategoryForm from '../../../../components/backend/forms/AddCategory';
import Banner from '../../../../components/backend/Banner';

const AddCategoryContainer = () => (
  <>
    <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
      Add category
    </Banner>
    <NarrowCenterContainer>
      <p>The category you add, will be shown in the "add new result" form.</p>
      <AddCategoryForm />
    </NarrowCenterContainer>
  </>
);

export default AddCategoryContainer;