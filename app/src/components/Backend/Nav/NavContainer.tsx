import styled from 'styled-components';

import { maxD } from '../../../common/helpers/devices';

const NavContainer = styled.nav`
  position: fixed;

  width: var(--nav-width);
  height: var(--nav-height);

  top: 0;
  left: 0;
  z-index: var(--max-z-index);

  padding: 3.5rem;

  background-color: #fff;
  box-shadow: 0 4px 0.5rem 0 var(--transparent-green-max);

  @media ${maxD.tabletL} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 min(7vw, 3rem);
  }
`;

export default NavContainer;
