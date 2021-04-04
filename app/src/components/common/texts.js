import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ornament } from '../../common/helpers/mixins';

export const MainTitle = styled.h1`
  text-align: center;
`;

export const WhiteTitle = styled(MainTitle)`
  color: #fff;
`;

export const UnstyledList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export const UnstyledLink = styled(Link)`
  &::after {
    content: none;
  }
`;
