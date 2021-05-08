import { useCallback } from 'react';
import styled from 'styled-components';

import { HeaderWithoutSpace, TextWithoutSpace } from '../../../common/texts';
import { ItemHeaderType } from '../../../../common/types';

import DeleteButton from './DeleteButton';
import MoreButton from './MoreButton';

const ItemHeaderContainer = styled.header`
  position: relative;
`;

const ItemHeaderContent = styled.div`
  width: 100%;
  padding: var(--item-vertical-padding) var(--item-horizontal-padding);

  transition: background-color var(--short-transition-duration);

  &:hover {
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
  isMoreContentVisible,
  handleButtonClick,
  containerAs,
  headerAs,
  buttonLabel,
  deleteButtonLabel,
}) => {
  const rotateMoreButtonIfContainerIsVisible = useCallback(() => {
    return isMoreContentVisible ? { transform: 'rotate(180deg)' } : undefined;
  }, [isMoreContentVisible]);

  return (
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
        {buttonLabel && handleButtonClick && (
          <MoreButton
            label={buttonLabel}
            onClick={() => handleButtonClick(!isMoreContentVisible)}
            style={rotateMoreButtonIfContainerIsVisible()}
          />
        )}
      </ItemHeaderContent>
      <DeleteButton _id={_id} label={deleteButtonLabel} />
    </ItemHeaderContainer>
  );
};

export default ItemHeader;
