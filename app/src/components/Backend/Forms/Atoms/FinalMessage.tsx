import { CenteredTextWithoutSpace } from '../../../Common/texts';

interface Props {
  message: string;
}

const FinalMessage: React.FC<Props> = ({ message }) => (
  <CenteredTextWithoutSpace style={{ marginTop: '2rem' }}>
    {message}
  </CenteredTextWithoutSpace>
);
export default FinalMessage;
