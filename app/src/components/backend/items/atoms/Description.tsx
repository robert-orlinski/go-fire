import { ItemSection } from '../../../common/containers';
import { TextWithoutSpace } from '../../../common/texts';

interface Props {
  title: string;
  description: string;
}

const ItemDescription: React.FC<Props> = ({ title, description }) => (
  <ItemSection>
    <h3>{title}</h3>
    <TextWithoutSpace>{description}</TextWithoutSpace>
  </ItemSection>
);

export default ItemDescription;
