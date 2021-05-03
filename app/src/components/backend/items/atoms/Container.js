import styled from 'styled-components';

import { minD, maxD } from '../../../../common/helpers/devices';

const ItemContainer = styled.section`
  --item-vertical-padding: 2rem;
  --item-horizontal-padding: 3.5rem;

  --item-border-size: 3px;
  --item-border-style: var(--item-border-size) solid
    var(--transparent-green-max);

  --item-delete-button-size: 32px;
  --item-more-button-size: 3rem;

  margin-right: calc(
    var(--item-delete-button-size) * 1.5 - var(--item-border-size)
  );
  border: var(--item-border-style);

  @media ${maxD.tablet} {
    --item-vertical-padding: 1.6rem;
    --item-horizontal-padding: 2.2rem;
  }

  @media ${maxD.mobileL} {
    --item-vertical-padding: 1.5rem;
    --item-horizontal-padding: 1.5rem;

    margin-right: calc(
      var(--item-delete-button-size) * 0.5 - var(--item-border-size)
    );
  }

  &:not(:last-of-type) {
    margin-bottom: 2.5rem;

    @media ${maxD.mobileL} {
      margin-bottom: 1.5rem;
    }
  }
`;

export default ItemContainer;
