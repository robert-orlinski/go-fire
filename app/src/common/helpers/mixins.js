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

export const overlay = css`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: 9;

  top: 0;
  left: 0;
`;

export const returnNiceWholePrice = (firstNumber, secondNumber) => {
  const product = firstNumber * secondNumber;
  return `${product.toFixed(2).replace(/(?=(\d{3})+(?!\d))/g, ' ')} zł`;
};

export const returnSlug = (string) => {
  return string
    .toLowerCase()
    .replace(/([^\w ]+)/g, '')
    .replace(/ +/g, '-');
};
