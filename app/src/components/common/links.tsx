import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UnstyledLink = styled(Link)`
  &::after {
    content: none;
  }
`;
