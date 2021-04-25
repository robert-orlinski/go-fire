import { css } from 'styled-components';

export const pointer = css`
  &:hover {
    cursor: pointer;
  }
`;

export const ornament = css`
  display: block;
  position: absolute;
  content: '';
`;

export const returnNiceWholePrice = (firstNumber, secondNumber) => {
  const product = firstNumber * secondNumber;
  return `${product.toFixed(2).replace(/(?=(\d{3})+(?!\d))/g, ' ')} zł`;
};
