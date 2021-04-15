import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Brand } from './../../static/identity/go-fire.svg';
import { ListWithoutSpace } from '../common/texts';
import { UnstyledLink } from '../common/links';

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

const NavInner = styled(ListWithoutSpace)`
  padding-top: 4rem;
`;

const NavElement = styled.li`
  font-size: 1.4rem;

  &:not(:last-of-type) {
    padding-bottom: 1rem;
  }
`;

const Nav = ({ children }) => (
  <NavContainer>
    <UnstyledLink to="/">
      <StyledBrand />
    </UnstyledLink>
    <NavInner>
      <NavElement key="start">
        <Link to="/">Start</Link>
      </NavElement>
      <NavElement key="results">
        <Link to="/results">Results</Link>
      </NavElement>
      <NavElement key="addEntry">
        <Link to="/add-entry">Add entry</Link>
      </NavElement>
      <NavElement key="addCategory">
        <Link to="/add-category">Add category</Link>
      </NavElement>
    </NavInner>
  </NavContainer>
);

export default Nav;
