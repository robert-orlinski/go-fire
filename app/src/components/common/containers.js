import styled from 'styled-components';

const Container = styled.article`
  margin: 8rem 0;
  text-align: center;
`;

const NarrowContainer = styled(Container)`
  margin: 5rem auto;
  width: min(86vw, 700px);
`;

export { Container, NarrowContainer };
