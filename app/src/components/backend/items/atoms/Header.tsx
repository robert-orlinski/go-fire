import styled from 'styled-components';

import { HeaderWithoutSpace, TextWithoutSpace } from '../../../common/texts';
import { ItemHeaderType } from '../../../../common/types';

import DeleteButton from './DeleteButton';
import MoreArrow from './MoreArrow';

const ItemHeaderContainer = styled.summary`
  position: relative;
`;

const ItemHeaderContent = styled.div`
  width: 100%;
  padding: var(--item-vertical-padding) var(--item-horizontal-padding);

  transition: background-color var(--short-transition-duration);

  summary > &:hover {
    background-color: var(--transparent-green-med);
  }
`;

const ItemHeaderInner = styled.div`
  padding-right: calc(var(--item-more-button-size) + 1rem);
`;

const ItemHeader: React.FC<ItemHeaderType> = ({
  _id,
  name,
  date,
  containerAs,
  headerAs,
  deleteButtonLabel,
  isArrow,
}) => (
  <ItemHeaderContainer as={containerAs}>
    <ItemHeaderContent>
      <ItemHeaderInner>
        <HeaderWithoutSpace as={headerAs}>{name}</HeaderWithoutSpace>
        {date && (
          <TextWithoutSpace style={{ padding: '0.4rem 0 0' }}>
            {date}
          </TextWithoutSpace>
        )}
      </ItemHeaderInner>
      {isArrow && <MoreArrow />}
    </ItemHeaderContent>
    <DeleteButton _id={_id} label={deleteButtonLabel} />
  </ItemHeaderContainer>
);

export default ItemHeader;
