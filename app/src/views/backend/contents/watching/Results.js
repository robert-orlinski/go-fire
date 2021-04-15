import React from 'react';

import { ReactComponent as ListImage } from './../../../../static/illustrations/list.svg';
import { ReactComponent as ChartImage } from './../../../../static/illustrations/chart.svg';
import { ReactComponent as PredictionsImage } from './../../../../static/illustrations/predictions.svg';
import bannerImage from './../../../../static/banners/results.jpg';

import { Container } from '../../../../components/common/containers';
import {
  boxIllustrationStyles,
  LinkBoxes,
  LinkBox,
  BoxedLink,
} from '../../../../components/common/links';

import Banner from '../../../../components/backend/Banner';

const StartPage = () => (
  <>
    <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
      Which kind of results do you want?
    </Banner>
    <Container>
      <LinkBoxes>
        <LinkBox to="/results/list">
          <ListImage style={boxIllustrationStyles} />
          <BoxedLink>List</BoxedLink>
        </LinkBox>
        <LinkBox to="/results/chart">
          <ChartImage style={boxIllustrationStyles} />
          <BoxedLink>Chart</BoxedLink>
        </LinkBox>
        <LinkBox to="/results/predictions">
          <PredictionsImage style={boxIllustrationStyles} />
          <BoxedLink>Predictions</BoxedLink>
        </LinkBox>
      </LinkBoxes>
    </Container>
  </>
);

export default StartPage;
