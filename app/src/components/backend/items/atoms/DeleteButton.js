import { useContext } from 'react';
import styled from 'styled-components';

import { maxD } from '../../../../common/helpers/devices';

import ItemsContext from '../../../../views/Backend/Contents/Context/ItemsContext';

import { deleteItem } from '../../../../common/api/requests';
import { ornament } from '../../../../common/helpers/mixins';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: var(--item-delete-button-size);
  height: var(--item-delete-button-size);

  top: calc(50% - var(--item-delete-button-size) / 2);
  right: calc(var(--item-delete-button-size) * -1.5 - var(--item-border-size));

  border-radius: 50%;
  background-color: var(--primary-green);

  transition: opacity var(--short-transition-duration) ease;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @media ${maxD.mobileL} {
    top: calc(var(--item-delete-button-size) * -0.5);
    right: calc(var(--item-delete-button-size) * -0.5);
  }
`;

const ButtonInner = styled.span`
  width: calc(var(--item-delete-button-size) * 0.44);
  height: calc(var(--item-delete-button-size) * 0.44);

  &:before,
  &:after {
    ${ornament}

    width: 1px;
    height: calc(var(--item-delete-button-size) * 0.44);
    left: 50%;

    background-color: #fff;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const DeleteButton = ({ _id, label }) => {
  const { items, setItems } = useContext(ItemsContext);

  const handleItemDelete = () => {
    const itemsWithoutDeletedEntry = items.filter((item) => {
      return item._id !== _id;
    });
    setItems(itemsWithoutDeletedEntry);

    deleteItem(_id);
  };

  return (
    <Button aria-label={label} onClick={handleItemDelete}>
      <ButtonInner />
    </Button>
  );
};

export default DeleteButton;
