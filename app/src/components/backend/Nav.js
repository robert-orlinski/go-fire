import React from 'react';
import { Link, Router } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Brand } from './../../static/identity/go-fire.svg';

const NavContainer = styled.aside``;

const NavInner = styled.ul``;

const NavElement = styled.li``;

const NavLink = styled(Link)``;

const Nav = ({ children }) => (
  <NavContainer>
    <Brand />
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
