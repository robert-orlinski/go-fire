import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BoxedLinkText = styled(Link)`
  margin-top: 3.5rem;
`;

export const BoxedLink: React.FC = ({ children }) => (
  <BoxedLinkText className="link-text" as="span">
    {children}
  </BoxedLinkText>
);

export default BoxedLink;
