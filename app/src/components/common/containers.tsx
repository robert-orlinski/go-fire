import styled from 'styled-components';

export const Container = styled.article`
  width: min(86%, 950px);
  margin: min(8rem, 10vw) auto;
`;

export const CenterContainer = styled(Container)`
  text-align: center;
`;

export const NarrowContainer = styled(Container)`
  max-width: 700px;
  margin: 5rem auto;
`;

export const NarrowCenterContainer = styled(NarrowContainer)`
  text-align: center;
`;

export const ItemSection = styled.section`
  &:not(:first-child) {
    padding-top: 3rem;
  }
`;

export const ItemBox = styled.header`
  display: flex;
  align-items: center;
`;
