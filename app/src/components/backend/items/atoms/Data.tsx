import styled from 'styled-components';

import { minD, maxD } from '../../../../common/helpers/devices';

import { ItemBox, ItemSection } from '../../../common/containers';

const ItemDataLine = styled(ItemBox)`
  justify-content: space-between;

  &:not(:last-of-type) {
    padding-bottom: 0.7rem;
  }

  @media ${maxD.tabletL} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ItemDataEntry = styled.span`
  padding-bottom: 0.8rem;

  &::after {
    display: inline-block;
    position: relative;

    height: 2px;

    background-color: var(--primary-green);

    @media ${minD.mobileL} {
      top: -4px;
      margin: 0 20px;
    }
  }
`;

const ItemDataGroup = styled(ItemDataEntry)`
  @media ${maxD.mobileL} {
    display: flex;
    flex-direction: column;

    &::after {
      content: '';
      width: 50px;
    }
  }
`;

const ItemDate = styled(ItemDataEntry)`
  @media ${minD.mobileL} {
    &::after {
      content: '';
      width: 60px;
    }
  }
`;

const ItemAmount = styled(ItemDataEntry)`
  @media ${minD.mobileL} {
    &::after {
      content: '';
      width: 30px;
    }
  }
`;

interface Props {
  price: number;
  amount: number;
  date: Date;
  wholePrice: string;
}

const ItemData: React.FC<Props> = ({ price, amount, date, wholePrice }) => {
  return (
    <ItemSection>
      <h3>Data:</h3>
      <ItemDataLine as="p">
        <ItemDataGroup>
          <ItemDate>{date}</ItemDate>
          <ItemAmount>{amount} papers</ItemAmount>
          <ItemDataEntry>{price} zł</ItemDataEntry>
        </ItemDataGroup>
        <ItemDataEntry>Total: {wholePrice}</ItemDataEntry>
      </ItemDataLine>
    </ItemSection>
  );
};

export default ItemData;
