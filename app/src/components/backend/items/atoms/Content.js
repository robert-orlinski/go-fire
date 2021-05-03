import styled from 'styled-components';

const ItemContent = styled.article`
  padding: calc(var(--item-vertical-padding) * 1.6)
    var(--item-horizontal-padding) calc(var(--item-vertical-padding) * 2.4);
  border-top: var(--item-border-style);
`;

export default ItemContent;
