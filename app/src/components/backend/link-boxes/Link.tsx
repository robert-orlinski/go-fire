import styled from 'styled-components';

const BoxedLinkText = styled.span`
  margin-top: 3.5rem;
`;

export const BoxedLink: React.FC = ({ children }) => (
  <BoxedLinkText className="link-text">{children}</BoxedLinkText>
);

export default BoxedLink;
