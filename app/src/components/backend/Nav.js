import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Brand } from './../../static/identity/go-fire.svg';
import { UnstyledList, UnstyledLink } from '../common/texts';

const NavContainer = styled.aside`
  position: fixed;

  width: var(--nav-width-desktop);
  height: 100vh;
  padding: 3rem;

  top: 0;
  left: 0;

  box-shadow: 0 4px 16px 0 var(--transparent-green-max);
`;

const StyledBrand = styled(Brand)`
  width: 130px;
  height: auto;
`;

const NavInner = styled(UnstyledList)`
  padding-top: 4rem;
`;

const NavElement = styled.li`
  font-size: 1.4rem;

  &:not(:last-of-type) {
    padding-bottom: 1rem;
  }
`;

const NavLink = styled(Link)``;

const Nav = ({ children }) => (
  <NavContainer>
    <UnstyledLink>
      <StyledBrand />
    </UnstyledLink>
    <NavInner>
      <NavElement>
        <NavLink to="/">Start</NavLink>
      </NavElement>
      <NavElement>
        <NavLink to="/entries">Entries</NavLink>
      </NavElement>
      <NavElement>
        <NavLink to="/add-entry">Add entry</NavLink>
      </NavElement>
      <NavElement>
        <NavLink to="/add-category">Add category</NavLink>
      </NavElement>
    </NavInner>
  </NavContainer>
);

export default Nav;
