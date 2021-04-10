import React from 'react';
import styled from 'styled-components';

import bannerImage from './../../../../static/banners/add-entry.jpg';

import { NarrowCenterContainer } from '../../../../components/common/containers';
import AddEntryForm from '../../../../components/backend/forms/AddEntry';
import Banner from '../../../../components/backend/Banner';

const AddEntryContainer = () => (
  <>
    <Banner style={{ 'background-image': `url(${bannerImage})` }}>
      Add new entry
    </Banner>
    <NarrowCenterContainer>
      <p>
        Choose account type, write down all the needed info and select category
        that'll match Your investment or saving entry.
      </p>
      <AddEntryForm />
    </NarrowCenterContainer>
  </>
);

export default AddEntryContainer;
