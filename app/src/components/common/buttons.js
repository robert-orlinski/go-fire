import styled from 'styled-components';

export const GreenBox = styled.span`
  display: inline-block;

  padding: var(--padding, 15px 50px);
  border: none;

  background-color: var(--primary-green);
  color: #fff;
  font-weight: 700;
`;

export const SmallGreenBox = styled(GreenBox)`
  --padding: 9px 20px;
`;

export const Button = styled(GreenBox)`
  &:focus,
  &:active {
    outline: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonWithSpace = styled(Button)`
  margin: 1.5rem auto 0;
`;
