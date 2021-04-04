import React from 'react';
import styled from 'styled-components';

import { ornament } from '../../common/helpers/mixins';
import { WhiteTitle } from '../common/texts';

const BannerInner = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: calc(100%);
  height: var(--banner-height-desktop);

  padding: 0 min(8vw 100px);

  background-size: cover;
  background-position: center;

  &::after {
    ${ornament}

    width: 100%;
    height: 100%;

    background-color: var(--transparent-green-min);
  }
`;

const Banner = ({ children, ...props }) => (
  <BannerInner {...props}>
    <WhiteTitle>{children}</WhiteTitle>
  </BannerInner>
);

export default Banner;
