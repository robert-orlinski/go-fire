import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { maxD } from '../../../common/helpers/devices';

import { ListWithoutSpace } from '../../common/texts';
import { ToggledElementType } from '../../../common/types';

const NavInner = styled(ListWithoutSpace)`
  padding: 4rem 0 0;

  @media ${maxD.tabletL} {
    position: fixed;
    top: 0;
    right: 0;

    width: min(250px, 60vw);
    height: 100vh;

    background-color: #fff;
    padding: calc(2rem + var(--nav-height)) 1.8rem;
    box-shadow: 0 4px 0.5rem 0 var(--transparent-green-max);

    transform: translateX(250px);
    transition: transform 650ms cubic-bezier(0.77, 0, 0.175, 1);

    &.visible {
      transform: translateX(0);
    }
  }
`;

const NavElement = styled.li`
  font-size: 1.4rem;

  &:not(:last-of-type) {
    padding-bottom: 1rem;
  }
`;

const NavList: React.FC<ToggledElementType> = ({ isVisible }) => (
  <NavInner as="ul" className={isVisible ? 'visible' : ''}>
    <NavElement key="start">
      <Link to="/">Start</Link>
    </NavElement>
    <NavElement key="entries">
      <Link to="/entries">Entries</Link>
    </NavElement>
    <NavElement key="categories">
      <Link to="/categories">Categories</Link>
    </NavElement>
    <NavElement key="addEntry">
      <Link to="/add-entry">Add entry</Link>
    </NavElement>
    <NavElement key="addCategory">
      <Link to="/add-category">Add category</Link>
    </NavElement>
  </NavInner>
);

export default NavList;
