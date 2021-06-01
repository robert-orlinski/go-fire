import { CenteredTextWithoutSpace } from '../../../common/texts';

const FinalMessage: React.FC = ({ children }) => (
  <CenteredTextWithoutSpace style={{ marginTop: '2rem' }}>
    {children}
  </CenteredTextWithoutSpace>
);
export default FinalMessage;
