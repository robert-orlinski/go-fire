import React from 'react';
import styled from 'styled-components';

import { ReactComponent as NewEntryImage } from './../../../static/illustrations/new-entry.svg';
import { ReactComponent as CategoriesImage } from './../../../static/illustrations/categories.svg';
import { ReactComponent as EntriesImage } from './../../../static/illustrations/entries.svg';
import startBannerImage from './../../../static/banners/start.jpg';

import { CenteredLink, UnstyledList } from '../../../components/common/texts';
import { Container } from '../../../components/common/containers';

import Banner from '../../../components/backend/Banner';

const LinkBoxes = styled(UnstyledList)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding-top: 5rem;
`;

const LinkBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;

  padding: 3rem;
  margin: 0 2.5rem 5rem;

  box-shadow: 0 4px 16px 0 var(--transparent-green-max);
`;

const LinkBoxed = styled(CenteredLink)`
  margin-top: 5rem;
`;

const illustrationStyle = {
  width: 'auto',
  height: '100px',
};

const StartPage = () => (
  <>
    <Banner style={{ 'background-image': `url(${startBannerImage})` }}>
      What you want to do?
    </Banner>
    <Container>
      <LinkBoxes>
        <LinkBox>
          <NewEntryImage style={illustrationStyle} />
          <LinkBoxed to="/add-entry">Add new entry</LinkBoxed>
        </LinkBox>
        <LinkBox>
          <CategoriesImage style={illustrationStyle} />
          <LinkBoxed to="/add-category">Add new category</LinkBoxed>
        </LinkBox>
        <LinkBox>
          <EntriesImage style={illustrationStyle} />
          <LinkBoxed to="/results">Check how it's going</LinkBoxed>
        </LinkBox>
      </LinkBoxes>
    </Container>
  </>
);

export default StartPage;
