import styled from 'styled-components';

import { maxD } from '../../../common/helpers/devices';

import { UnstyledLink } from '../../common/links';

import BoxedLink from './Link';

const LinkBox = styled(UnstyledLink)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;

  padding: 3rem 2rem;
  margin: 0 var(--link-box-margin) calc(var(--link-box-margin) * 2);

  box-shadow: 0 4px 16px 0 var(--transparent-green-max);

  @media ${maxD.tablet} {
    width: calc(100% - var(--link-box-margin) * 2);
  }

  & > svg {
    width: 100%;
    height: 100px;
  }
`;

const Box = ({ to, title, children }) => (
  <li>
    <LinkBox to={to}>
      {children}
      <BoxedLink>{title}</BoxedLink>
    </LinkBox>
  </li>
);

export default Box;
