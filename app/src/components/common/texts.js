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

export const UnstyledTitleWithoutSpace = styled(UnstyledTitle)`
  padding: 0;
`;

export const ElementWithoutSpace = styled.p`
  padding: 0;
`;

export const ListWithoutSpace = styled(ElementWithoutSpace).attrs({ as: 'ul' })`
  list-style: none;
`;
