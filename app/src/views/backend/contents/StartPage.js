import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import startBannerImage from './../../../static/banners/start.jpg';

import { Container } from '../../../components/common/containers';
import Banner from '../../../components/backend/Banner';

const Buttons = styled.article`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StartPage = () => (
  <>
    <Banner style={{ 'background-image': `url(${startBannerImage})` }}>
      What you want to do?
    </Banner>
    <Container>
      <Buttons>
        <Link to="/add-entry">Add new entry</Link>
        <Link to="/add-category">Add new category</Link>
        <Link to="/results">Check how it's going</Link>
      </Buttons>
    </Container>
  </>
);

export default StartPage;
