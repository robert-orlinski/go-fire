import { ItemSection } from '../../../common/containers';
import { TextWithoutSpace } from '../../../common/texts';

const ItemDescription = ({ title, description }) => (
  <ItemSection>
    <h3>{title}</h3>
    <TextWithoutSpace>{description}</TextWithoutSpace>
  </ItemSection>
);

export default ItemDescription;
