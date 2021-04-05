import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as NewEntryImage } from './../../../static/illustrations/new-entry.svg';
import { ReactComponent as CategoriesImage } from './../../../static/illustrations/categories.svg';
import { ReactComponent as EntriesImage } from './../../../static/illustrations/entries.svg';
import startBannerImage from './../../../static/banners/start.jpg';

import { Container } from '../../../components/common/containers';
import {
  boxIllustrationStyles,
  LinkBoxes,
  LinkBox,
  BoxedLink,
} from '../../../components/common/links';

import Banner from '../../../components/backend/Banner';

const StartPage = () => (
  <>
    <Banner style={{ 'background-image': `url(${startBannerImage})` }}>
      What you want to do?
    </Banner>
    <Container>
      <LinkBoxes>
        <LinkBox to="/add-entry">
          <NewEntryImage style={boxIllustrationStyles} />
          <BoxedLink>Add new entry</BoxedLink>
        </LinkBox>
        <LinkBox to="/add-category">
          <CategoriesImage style={boxIllustrationStyles} />
          <BoxedLink>Add new category</BoxedLink>
        </LinkBox>
        <LinkBox to="/results">
          <EntriesImage style={boxIllustrationStyles} />
          <BoxedLink>Check how it's going</BoxedLink>
        </LinkBox>
      </LinkBoxes>
    </Container>
  </>
);

export default StartPage;
