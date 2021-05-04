import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { maxD } from '../../../common/helpers/devices';

const BoxedLinkText = styled(Link)`
  margin-top: 5rem;

  @media ${maxD.mobileL} {
    margin-top: 3rem;
  }
`;

export const BoxedLink = ({ children }) => (
  <BoxedLinkText Name="link-text" as="span">
    {children}
  </BoxedLinkText>
);

export default BoxedLink;
