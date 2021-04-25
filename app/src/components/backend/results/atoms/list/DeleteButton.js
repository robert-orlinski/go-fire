import React from 'react';
import styled from 'styled-components';

import { ornament } from '../../../../../common/helpers/mixins';

const Button = styled.button`
  --button-size: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: var(--button-size);
  height: var(--button-size);

  top: calc(50% - var(--button-size) / 2);
  right: calc(var(--button-size) * -2);

  border-radius: 50%;
  background-color: var(--primary-green);

  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const ButtonInner = styled.span`
  width: calc(var(--button-size) * 0.44);
  height: calc(var(--button-size) * 0.44);

  &:before,
  &:after {
    ${ornament}

    width: 1px;
    height: calc(var(--button-size) * 0.44);
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

const DeleteButton = ({ _id, handleEntryDelete, label }) => {
  return (
    <Button aria-label={label} onClick={() => handleEntryDelete(_id)}>
      <ButtonInner />
    </Button>
  );
};

export default DeleteButton;
