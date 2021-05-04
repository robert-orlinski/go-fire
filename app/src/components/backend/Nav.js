import { useState } from 'react';

import NavContainer from './Nav/NavContainer';
import Brand from './Nav/Brand';
import HamburgerMenu from './Nav/HamburgerMenu';
import NavList from './Nav/NavList';

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
