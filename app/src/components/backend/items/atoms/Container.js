import styled from 'styled-components';

const ItemContainer = styled.section`
  --vertical-padding: 2rem;
  --horizontal-padding: 3.5rem;
  --border-style: 3px solid var(--transparent-green-max);

  border: var(--border-style);

  &:not(:last-of-type) {
    margin-bottom: 2.5rem;
  }
`;

export default ItemContainer;