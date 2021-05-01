import React from 'react';

import { ReactComponent as NewEntryImage } from './../../../static/illustrations/new-entry.svg';
import { ReactComponent as CategoriesImage } from './../../../static/illustrations/categories.svg';
import { ReactComponent as EntriesImage } from './../../../static/illustrations/entries.svg';
import bannerImage from './../../../static/banners/start.jpg';

import { NarrowCenterContainer } from '../../../components/common/containers';
import {
  boxIllustrationStyles,
  LinkBoxes,
  LinkBox,
  BoxedLink,
} from '../../../components/common/links';

import Banner from '../../../components/backend/Banner';

const Start = () => (
  <>
    <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
      What you want to do?
    </Banner>
    <NarrowCenterContainer>
      <LinkBoxes>
        <li>
          <LinkBox to="/entries">
            <EntriesImage style={boxIllustrationStyles} />
            <BoxedLink>Read about my decisions</BoxedLink>
          </LinkBox>
        </li>
        <li>
          <LinkBox to="/add-entry">
            <NewEntryImage style={boxIllustrationStyles} />
            <BoxedLink>Add new entry</BoxedLink>
          </LinkBox>
        </li>
        <li>
          <LinkBox to="/add-category">
            <CategoriesImage style={boxIllustrationStyles} />
            <BoxedLink>Add new category</BoxedLink>
          </LinkBox>
        </li>
      </LinkBoxes>
    </NarrowCenterContainer>
  </>
);

export default Start;
