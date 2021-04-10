import styled from 'styled-components';

export const MainTitle = styled.h1`
  text-align: center;
`;

export const WhiteTitle = styled(MainTitle)`
  color: #fff;
`;

export const UnstyledTitle = styled.h2`
  &::after {
    content: none;
  }
`;

export const UnstyledList = styled.ul`
  padding: 0;
  list-style: none;
`;
