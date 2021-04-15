import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ListWithoutSpace } from './texts';

export const UnstyledLink = styled(Link)`
  &::after {
    content: none;
  }
`;

export const CenteredLink = styled(Link)`
  left: -0.3rem;
`;

export const LinkBoxes = styled(ListWithoutSpace)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LinkBox = styled(UnstyledLink)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;

  padding: 3rem;
  margin: 0 2.5rem 5rem;

  box-shadow: 0 4px 16px 0 var(--transparent-green-max);
`;

const BoxedLinkText = styled(CenteredLink)`
  margin-top: 5rem;
`;

export const BoxedLink = ({ children }) => (
  <BoxedLinkText Name="link-text" as="span">
    {children}
  </BoxedLinkText>
);

export const boxIllustrationStyles = {
  width: 'auto',
  height: '100px',
};
