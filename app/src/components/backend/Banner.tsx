import styled from 'styled-components';

import { ornament } from '../../common/helpers/mixins';
import { WhiteTitle } from '../common/texts';
import { InlineStyledElementType } from '../../common/types';

const BannerInner = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 100%;
  height: var(--banner-height);

  padding: 0 min(8vw, 100px);

  background-size: cover;
  background-position: center;

  &::after {
    ${ornament}

    width: 100%;
    height: 100%;

    background-color: var(--transparent-green-min);
  }
`;

const BannerTitle = styled(WhiteTitle)`
  z-index: 9;
  left: -0.35em;
`;

const Banner: React.FC<InlineStyledElementType> = ({ children, style }) => (
  <BannerInner style={style}>
    <BannerTitle>{children}</BannerTitle>
  </BannerInner>
);

export default Banner;
