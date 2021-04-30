import React from 'react';

import { ReactComponent as NewEntryImage } from './../../../static/illustrations/new-entry.svg';
import { ReactComponent as CategoriesImage } from './../../../static/illustrations/categories.svg';
import { ReactComponent as EntriesImage } from './../../../static/illustrations/entries.svg';
import bannerImage from './../../../static/banners/start.jpg';

import { CenterContainer } from '../../../components/common/containers';
import {
  boxIllustrationStyles,
  LinkBoxes,
  LinkBox,
  BoxedLink,
} from '../../../components/common/links';

import Banner from '../../../components/backend/Banner';

const StartPage = () => (
  <>
    <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
      What you want to do?
    </Banner>
    <CenterContainer>
      <LinkBoxes as="ul">
        <LinkBox to="/results">
          <EntriesImage style={boxIllustrationStyles} />
          <BoxedLink>Read about my decisions</BoxedLink>
        </LinkBox>
        <LinkBox to="/add-entry">
          <NewEntryImage style={boxIllustrationStyles} />
          <BoxedLink>Add new entry</BoxedLink>
        </LinkBox>
        <LinkBox to="/add-category">
          <CategoriesImage style={boxIllustrationStyles} />
          <BoxedLink>Add new category</BoxedLink>
        </LinkBox>
      </LinkBoxes>
    </CenterContainer>
  </>
);

export default StartPage;
