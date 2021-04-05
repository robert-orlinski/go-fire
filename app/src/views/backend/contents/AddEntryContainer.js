import React from 'react';
import styled from 'styled-components';

import startBannerImage from './../../../static/banners/add-entry.jpg';

import { NarrowContainer } from '../../../components/common/containers';
import AddEntryForm from '../../../components/backend/forms/AddEntryForm';
import Banner from '../../../components/backend/Banner';

const AddEntryContainer = () => (
  <>
    <Banner style={{ 'background-image': `url(${startBannerImage})` }}>
      Add new entry
    </Banner>
    <NarrowContainer>
      <AddEntryForm />
    </NarrowContainer>
  </>
);

export default AddEntryContainer;
