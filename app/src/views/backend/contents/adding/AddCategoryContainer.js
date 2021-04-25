import React from 'react';

import bannerImage from './../../../../static/banners/add-category.jpg';

import { NarrowContainer } from '../../../../components/common/containers';
import { CenteredText } from '../../../../components/common/texts';
import AddCategoryForm from '../../../../components/backend/forms/AddCategory';
import Banner from '../../../../components/backend/Banner';

const AddCategoryContainer = () => (
  <>
    <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
      Add category
    </Banner>
    <NarrowContainer>
      <CenteredText>
        The category you add, will be shown in the "add new result" form.
      </CenteredText>
      <AddCategoryForm />
    </NarrowContainer>
  </>
);

export default AddCategoryContainer;
