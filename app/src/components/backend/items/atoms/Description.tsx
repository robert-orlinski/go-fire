import { EntryDescriptionType } from '../../../../common/types';
import { ItemSection } from '../../../common/containers';
import { TextWithoutSpace } from '../../../common/texts';

const ItemDescription: React.FC<EntryDescriptionType> = ({ description }) => (
  <ItemSection>
    <h3>Description:</h3>
    <TextWithoutSpace>{description}</TextWithoutSpace>
  </ItemSection>
);

export default ItemDescription;
