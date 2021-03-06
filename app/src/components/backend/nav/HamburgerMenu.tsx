import styled from 'styled-components';

import { maxD } from '../../../common/helpers/devices';
import { ButtonType } from '../../../common/types';

const Hamburger = styled.button`
  display: none;

  width: 30px;
  height: 30px;

  isolation: isolate;
  z-index: var(--max-z-index);

  background-color: transparent;

  @media ${maxD.tabletL} {
    display: block;
  }
`;

const HamburgerInner = styled.span`
  position: relative;
  width: 30px;

  &,
  &::before,
  &::after {
    display: block;
    background-color: #000;
    height: 2px;
    transition: transform 200ms ease;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 15px;
  }

  &::before {
    top: -8px;
    left: 0;
  }

  &::after {
    top: 8px;
    right: 0;
  }

  &.active {
    transform: rotate(-45deg);

    &::before {
      transform: rotate(90deg) translateY(-8px);
    }

    &::after {
      transform: rotate(90deg) translateY(7px);
    }
  }
`;

const HamburgerMenu: React.FC<ButtonType> = ({ onClick, isActive }) => (
  <Hamburger
    onClick={onClick}
    aria-label={isActive ? 'Close navigation' : 'Open navigation'}
  >
    <HamburgerInner className={isActive ? 'active' : ''} />
  </Hamburger>
);

export default HamburgerMenu;
