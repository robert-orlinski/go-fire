import React from 'react';

import { ReactComponent as NewEntryImage } from './../../../static/illustrations/new-entry.svg';
import { ReactComponent as CategoriesImage } from './../../../static/illustrations/categories.svg';
import { ReactComponent as EntriesImage } from './../../../static/illustrations/entries.svg';
import BannerImage from './../../../static/banners/start.jpg';

import { CenterContainer } from '../../../components/common/containers';

import BoxesContainer from '../../../components/backend/link-boxes/BoxesContainer';
import Box from '../../../components/backend/link-boxes/Box';
import Banner from '../../../components/backend/Banner';

const Start = () => (
  <>
    <Banner style={{ backgroundImage: `url(${BannerImage})` }}>
      What you want to do?
    </Banner>
    <CenterContainer>
      <BoxesContainer>
        <Box to="/entries" title="Read about my decisions">
          <EntriesImage />
        </Box>
        <Box to="/add-entry" title="Add new entry">
          <NewEntryImage />
        </Box>
        <Box to="/add-category" title="Add new category">
          <CategoriesImage />
        </Box>
      </BoxesContainer>
    </CenterContainer>
  </>
);

export default Start;
