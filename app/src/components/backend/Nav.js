import React, { useState } from 'react';

import NavContainer from './nav/NavContainer';
import Brand from './nav/Brand';
import HamburgerMenu from './nav/HamburgerMenu';
import NavList from './nav/NavList';

const Nav = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  return (
    <NavContainer>
      <Brand />
      <HamburgerMenu
        onClick={() => setMobileMenuVisibility(!isMobileMenuVisible)}
        isActive={isMobileMenuVisible}
      />
      <NavList isVisible={isMobileMenuVisible} />
    </NavContainer>
  );
};

export default Nav;
