import React from 'react';
import styled from 'styled-components';

import bannerImage from './../../../../static/banners/add-entry.jpg';

import { NarrowContainer } from '../../../../components/common/containers';
import AddEntryForm from '../../../../components/backend/forms/AddEntryForm';
import Banner from '../../../../components/backend/Banner';

const AddEntryContainer = () => (
  <>
    <Banner style={{ 'background-image': `url(${bannerImage})` }}>
      Add new entry
    </Banner>
    <NarrowContainer>
      <p>
        Choose account type, write down all the needed info and select
        categories that match Your investment or saving entry.
      </p>
      <AddEntryForm />
    </NarrowContainer>
  </>
);

export default AddEntryContainer;
