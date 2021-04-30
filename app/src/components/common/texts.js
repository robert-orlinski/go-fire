import styled, { css } from 'styled-components';

const noPadding = css`
  padding: 0;
`;

export const MainTitle = styled.h1`
  text-align: center;

  &::after {
    content: '';
  }
`;

export const WhiteTitle = styled(MainTitle)`
  color: #fff;
`;

export const CenteredText = styled.p`
  text-align: center;
`;

export const TextWithoutSpace = styled.p`
  ${noPadding}
`;

export const HeaderWithoutSpace = styled.h2`
  ${noPadding}
`;

export const ListWithoutSpace = styled.ul`
  ${noPadding}

  list-style: none;
`;
