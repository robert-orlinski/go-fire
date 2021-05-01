import React from 'react';
import styled from 'styled-components';

import { ItemBox, ItemSection } from '../../../common/containers';

const ItemStyledEntry = styled.span`
  &::after {
    display: inline-block;
    position: relative;
    content: '';

    height: 2px;

    top: -4px;
    margin: 0 20px;

    background-color: var(--primary-green);
  }
`;

const ItemDate = styled(ItemStyledEntry)`
  &::after {
    width: 60px;
  }
`;

const ItemAmount = styled(ItemStyledEntry)`
  &::after {
    width: 30px;
  }
`;

const ItemDataLine = styled(ItemBox)`
  justify-content: space-between;

  &:not(:last-of-type) {
    padding-bottom: 0.7rem;
  }
`;

const ItemData = ({ price, amount, date, wholePrice }) => {
  return (
    <ItemSection>
      <h3>Data:</h3>
      <ItemDataLine as="p">
        <span>
          <ItemDate>{date}</ItemDate>
          <ItemAmount>{amount} papers</ItemAmount>
          <span>{price} zł</span>
        </span>
        <span>Total: {wholePrice}</span>
      </ItemDataLine>
    </ItemSection>
  );
};

export default ItemData;
