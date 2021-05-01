import React from 'react';
import styled from 'styled-components';

import { VisuallyHiddenElement } from '../../common/accesibility';
import { UnstyledLink } from '../../common/links';

import { ReactComponent as BrandLogo } from './../../../static/identity/go-fire.svg';

const StyledBrand = styled(BrandLogo)`
  width: auto;
  height: min(calc(var(--nav-height) - 2.8rem), 3.8rem);
`;

const Brand = () => (
  <UnstyledLink to="/">
    <StyledBrand />
    <VisuallyHiddenElement as="h1">
      GoFIRE - the app to help you become financially independent
    </VisuallyHiddenElement>
  </UnstyledLink>
);

export default Brand;
