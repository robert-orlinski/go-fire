import styled from 'styled-components';

export const Container = styled.article`
  margin: 8rem 0;
`;

export const CenterContainer = styled(Container)`
  text-align: center;
`;

export const NarrowContainer = styled(Container)`
  margin: 5rem auto;
  width: min(86vw, 700px);
`;

export const NarrowCenterContainer = styled(NarrowContainer)`
  text-align: center;
`;

export const ResultSection = styled.section`
  &:not(:first-child) {
    padding-top: 3rem;
  }
`;

export const ResultBox = styled.header`
  display: flex;
  align-items: center;
`;
